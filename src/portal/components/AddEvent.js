import React, { useEffect, useState } from "react";
import { Button, Paper, TextField, Grid, InputLabel } from "@mui/material"
import './AddEvent.css'
import OutlinedInput from '@mui/material/OutlinedInput'
import { Checkbox } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import axiosPost from "../../Global/Axios/axiosPost"
import axiosGet from "../../Global/Axios/axiosGet"
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import showSuccessSnackbar from '../../Global/Snackbar/successSnackbar'
import { useSnackbar } from 'notistack'

const AddEvent = () => {
  const [formData, setFormData] = useState({})
  const [partners_list, setPartners_list] = useState([])
  const [foodList, setFoodlist] = useState([])
  const [volunteers, setVolunteers] = useState([])
  const [selectedVolunteers, setSelectedVolunteers] = useState([])
  const [availableNames, setAvailableNames] = useState([])

  const { enqueueSnackbar } = useSnackbar()

  const getPartners = async () => {
    const url = '/list-partners'
    const response = await axiosGet(url)
    const intermediate = []
    response?.data?.map((element) => {
      const temp = {
        value: element.partner_id,
        label: element.org_name
      }
      intermediate.push(temp)
    })
    setPartners_list(intermediate)
  }

  const getVolunteers = async () => {
    const url = '/list-volunteers'
    const response = await axiosGet(url)
    const intermediate = []
    response?.data?.map((element) => {
      const temp = {
        value: element.id,
        label: element.name
      }
      intermediate.push(temp)
    })
    setVolunteers(intermediate)
  }

  const getFoodItems = async () => {
    const url = '/list-food'
    const response = await axiosGet(url)
    const intermediate = []
    const interNames = []
    response?.data?.map((element) => {
      const temp = {
        value: element.item_id,
        label: element.name
      }
      const temp1 = {
        [element.item_id]: element.label
      }
      intermediate.push(temp)
      interNames.push(temp1)
    })
    setFoodlist(intermediate)
    setAvailableNames(interNames)
  }

  const getData = () => {
    getPartners()
    getVolunteers()
    getFoodItems()
  }

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event
    const array = []
    value.forEach(element => {
      array.push(availableNames[element])
    })
    setSelectedVolunteers(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleSubmit = async () => {
    // const url = '/login/'
    // const headers = {
    //   'Content-Type': 'application/json; charset=UTF-8',
    // }
    // const response = await axiosPost(url, { data: formData, headers })
    const sendData = {}
    sendData.loc_id = '110'
    sendData.volunteers = selectedVolunteers
    sendData.date = formData?.sdate?.toLocaleDateString()
    const selectedFoodItems = [
      {
        "item_id": formData?.foodItem1,
        "quantity": formData?.quantity1
      },
      {
        "item_id": formData?.foodItem2,
        "quantity": formData?.quantity2
      },
      {
        "item_id": formData?.foodItem3,
        "quantity": formData?.quantity3
      },
      {
        "item_id": formData?.foodItem4,
        "quantity": formData?.quantity4
      },
      {
        "item_id": formData?.foodItem5,
        "quantity": formData?.quantity5
      }
    ]
    sendData.distributes = selectedFoodItems
    sendData.ID = localStorage.getItem('id')
    const merged = {...sendData, ...formData}
    console.log(merged)
    const url = '/create-event/'
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    }
    const response = await axiosPost(url, { data: merged, headers })
    console.log(response)
    showSuccessSnackbar(enqueueSnackbar, `${response?.data?.message} with ID ${response?.data?.ID}`)
    // handleReset()
  }

  const handleReset = () => {
    setSelectedVolunteers([])
    setFormData({})
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <Paper className="event-paper">
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <TextField
            name="location"
            onChange={(e) => setFormData({ ...formData, "location": e.target.value })}
            value={formData?.location}
            fullWidth
            label={"Location"}
          />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Event"
              onChange={(newValue) => setFormData({ ...formData, "sdate": newValue.$d })}
              fullWidth
              value={formData?.date}
            />
          </LocalizationProvider>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <TextField
            onChange={(e) => setFormData({ ...formData, "no_of_persons_served": e.target.value })}
            value={formData?.no_of_persons_served}
            type="number"
            fullWidth
            label={"No-Of-people-served"}
          />
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <InputLabel>Time</InputLabel>
          <TextField
            onChange={(e) => setFormData({ ...formData, "time": e.target.value })}
            value={formData?.time}
            fullWidth
            type="time"
          />
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <InputLabel>Select Partner Agency</InputLabel>
          <Select
            id="demo-simple-select"
            value={formData.partner_id}
            label={"Select Partner Agency"}
            fullWidth
            onChange={(e) => setFormData({ ...formData, "partner_id": e.target.value })}
          >
            {
              partners_list.map((element) => {
                return <MenuItem value={element.value}>{element.label}</MenuItem>
              })
            }
          </Select>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <InputLabel>Select Volunteers</InputLabel>
          <Select
            multiple
            value={selectedVolunteers}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            fullWidth
            renderValue={(availableNames) => availableNames.join(', ')}
          >
            {volunteers.map((element) => (
              <MenuItem key={element.label} value={element.value} name={element.label}>
                <Checkbox checked={selectedVolunteers.indexOf(element.value) > -1} />
                <ListItemText primary={element.label} />
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          item
          justifyContent="center"
        >
          <InputLabel>Food Item1</InputLabel>
          <Select
            value={formData.partner_id}
            fullWidth
            onChange={(e) => setFormData({ ...formData, "foodItem1": e.target.value })}
          >
            {
              foodList.map((element) => {
                return <MenuItem value={element.value}>{element.label}</MenuItem>
              })
            }
          </Select>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <InputLabel>Quantity 1</InputLabel>
          <TextField
            onChange={(e) => setFormData({ ...formData, "quantity1": e.target.value })}
            value={formData?.quantity1}
            type="number"
            fullWidth
          />
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          item
          justifyContent="center"
        >
          <InputLabel>Food Item 2</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.partner_id}
            label={"Select Food Item 2"}
            fullWidth
            onChange={(e) => setFormData({ ...formData, "foodItem2": e.target.value })}
          >
            {
              foodList.map((element) => {
                return <MenuItem value={element.value}>{element.label}</MenuItem>
              })
            }
          </Select>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <InputLabel>Quantity 2</InputLabel>
          <TextField
            onChange={(e) => setFormData({ ...formData, "quantity2": e.target.value })}
            value={formData?.quantity2}
            fullWidth
          />
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          item
          justifyContent="center"
        >
          <InputLabel>Food Item 3</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.partner_id}
            label={"Select Food Item 3"}
            fullWidth
            onChange={(e) => setFormData({ ...formData, "foodItem3": e.target.value })}
          >
            {
              foodList.map((element) => {
                return <MenuItem value={element.value}>{element.label}</MenuItem>
              })
            }
          </Select>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <InputLabel>Quantity 3</InputLabel>
          <TextField
            type="number"
            onChange={(e) => setFormData({ ...formData, "quantity3": e.target.value })}
            value={formData?.quantity3}
            fullWidth
          />
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          item
          justifyContent="center"
        >
          <InputLabel>Food Item 4</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.partner_id}
            label={"Select Food Item 4"}
            fullWidth
            onChange={(e) => setFormData({ ...formData, "foodItem4": e.target.value })}
          >
            {
              foodList.map((element) => {
                return <MenuItem value={element.value}>{element.label}</MenuItem>
              })
            }
          </Select>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <InputLabel>Quantity 4</InputLabel>
          <TextField
            type="number"
            onChange={(e) => setFormData({ ...formData, "quantity4": e.target.value })}
            value={formData?.quantity4}
            fullWidth
          />
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={6}
          item
          justifyContent="center"
        >
          <InputLabel>Food Item 5</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.partner_id}
            label={"Select Food Item 5"}
            fullWidth
            onChange={(e) => setFormData({ ...formData, "foodItem5": e.target.value })}
          >
            {
              foodList.map((element) => {
                return <MenuItem value={element.value}>{element.label}</MenuItem>
              })
            }
          </Select>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <InputLabel>Quantity 5</InputLabel>
          <TextField
            type="number"
            onChange={(e) => setFormData({ ...formData, "quantity5": e.target.value })}
            value={formData?.quantity5}
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid
        container
        className="action-section"
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid
          xs={6}
          sm={6}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </Grid>
        <Grid
          xs={6}
          sm={6}
          md={6}
          lg={4}
          item
          justifyContent="center"
        >
          <Button variant="contained" onClick={handleReset}>Reset</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddEvent