import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@material-ui/data-grid'
import Button from '@material-ui/core/Button'

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: white;
  height: 300px;
  width: 650px;
  margin: 30px;
`

const columns = [
  { field: 'user', headerName: 'User', width: 100 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'playingWith', headerName: 'Playing with', width: 130 },
  {
    field: 'action',
    headerName: 'Action',
    width: 130,
    renderCell: (params) => (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          {params.row.status === 'Available' ? 'Join' : 'Watch'}
        </Button>
      </strong>
    ),
  },
]

const rows = [
  { id: 1, user: 'Pablo', status: 'Available', playingWith: '' },
  { id: 2, user: 'Tony', status: 'In the Game', playingWith: 'Jack' },
  { id: 3, user: 'Jack', status: 'In the Game', playingWith: 'Tony' },
]

export default function PlayerList() {
  return (
    <Wrapper>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </Wrapper>
  )
}
