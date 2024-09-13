import * as React from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

function createData(workYear, team, workingDays, daysOff, salary) {
  return { workYear, team, workingDays, daysOff, salary };
}

const TableWrapper = styled.div`
  margin-top:50px;
`
const rows = [
createData('2021/2022', 'G', 210, 77, '£47.000'),
createData('2022/2023', 'G', 210, 77, '£52.000'),
createData('2023/2024', 'G', 210, 77, '£49.000'),
createData('2023/2024', 'G', 210, 77, '£47.000'),
createData(),
  ];

const checkEditAdd = (e) =>{
  let t = ''
    e.daysOff === undefined ? t = 'Add New' : t = 'Edit';
  return t;
}

function RotaTable({ Edit }) {
  return (
    <TableWrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Work Year</TableCell>
              <TableCell align='center'>Team</TableCell>
              <TableCell align='center'>Working Days</TableCell>
              <TableCell align='center'>Days Off</TableCell>
              <TableCell align='center'>Salary</TableCell>
              <TableCell align='center'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.WorkYear}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.workYear}
                </TableCell>
                <TableCell align='center' >{row.team}</TableCell>
                <TableCell align='center'>{row.workingDays}</TableCell>
                <TableCell align='center'>{row.daysOff}</TableCell>
                <TableCell align='center'>{row.salary}</TableCell>
                <TableCell align='center'>
                  <Button
                    variant='outlined'
                    onClick={Edit}
                    endIcon={<EditIcon />}
                  >
                    {
                      checkEditAdd(row)
                    }
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
}

export default RotaTable;