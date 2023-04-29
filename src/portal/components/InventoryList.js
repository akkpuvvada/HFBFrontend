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
  },
  {
    id: 'quantity',
    label: 'Available Quantity',
    minWidth: 100,
    maxWidth: 100,
  }
]


const InventoryList = (props) => {
  const [attendanceRows, setAttendanceRows] = useState([])

  const getData = async () => {
    const url = '/list-inventory'
    const response = await axiosGet(url)
    setAttendanceRows(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Paper className="root">
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

export default InventoryList
