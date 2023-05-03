import React, { useEffect, useState } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import axiosGet from '../../Global/Axios/axiosGet'

const columns = [
  {
    id: 'item_id',
    label: 'Item ID',
    minWidth: 100,
    maxWidth: 100,
  },
  {
    id: 'name',
    label: 'Item Name',
    minWidth: 100,
    maxWidth: 100,
  }
]


const EventList = (props) => {
  const [attendanceRows, setAttendanceRows] = useState([])

  const getData = async () => {
    const url = '/list-food'
    const response = await axiosGet(url)
    setAttendanceRows(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Paper className="root">
        {/* <Grid
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
            <Button onClick={handleSubmit} variant="contained">Add FoodItem</Button>
          </Grid>
        </Grid> */}

        <TableContainer className="tableContainer">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth,
                    }}
                    className="headerCell"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {attendanceRows.map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  classeName="rowStyle"
                  key={row.code}
                >
                  {columns.map((column) => (
                    <TableCell align={column.align} key={column.id}>
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}

export default EventList
