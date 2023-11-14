import React from 'react'

/* MUI */
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

/* Hooks */
import useTodos from '../hooks/useTodos'


const TableInfoDetail = () => {
  const [data, loading, error] = useTodos()
  return (
    <div>
      <Backdrop
        sx={ {
          color: 'darkorange',
          zIndex: theme => theme.zIndex.drawer + 1
        } }
        open={ loading }
      />
      { error && <div>{ error.message }</div> }
      {
        !loading && (
          data.length ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>User ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    data.map((todo) => (
                      <TableRow key={ todo.id }>
                        <TableCell>{ todo.id }</TableCell>
                        <TableCell>{ todo.userId }</TableCell>
                        <TableCell>{ todo.title }</TableCell>
                        <TableCell>{ todo.completed ? 'Completado' : 'No Completado' }</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography variant="h6" color="red">No hay registros ¡Agrega uno!</Typography>
          )
        )
      }
    </div>
  )
}

export default TableInfoDetail
