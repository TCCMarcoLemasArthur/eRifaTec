import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

import styles from '../estilos/gridUsuariosStyles';

import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridValueGetterParams
} from '@mui/x-data-grid';
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box';

const columns: GridColDef[] = [
  { field: 'idusuario', headerName: 'ID', flex: 1 },
  { field: 'nomeusuario', headerName: 'Nome', flex: 1 },
  { field: 'cpfusuario', headerName: 'CPF', flex: 1 },
  { field: 'emailusuario', headerName: 'Email', flex: 1 },
  { field: 'senhausuario', headerName: 'Senha', flex: 1 },
  { field: 'datanascusuario', headerName: 'Data de Nascimento', flex: 1.7 },
  { field: 'cep', headerName: 'CEP', flex: 1 },
  { field: 'cidade', headerName: 'Cidade', flex: 1 },
  { field: 'rua', headerName: 'Rua', flex: 1 },
  { field: 'estado', headerName: 'Estado', flex: 1 },
  { field: 'bairro', headerName: 'Bairro', flex: 1 },
  { field: 'numero', headerName: 'Número', flex: 1 },
  { field: 'celular', headerName: 'Celular', flex: 1 },
];

export default function GridUsuarios() {
  const [users, setUsers] = useState([])
  const { id } = useParams()
  
  useEffect(() => {
    axios.get('http://localhost:5000/listarusuario')
      .then(response => {
        console.log(response.data)
        setUsers(response.data)
      })
      .catch(error => {
        console.log(error.request)
      })
  }, []);

  const handleDelete = () => {
    // Código para deletar um ou mais registros
    //TODO usar os ids da tabela
    axios.delete(`http://localhost:5000/deletarusuario/${id}`)
      .then(response => {
        console.log(response)
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  return (
    <>
      <Box sx={styles.container}>
        <DataGrid
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
            sorting: {
              sortModel: [{ field: 'idusuario', sort: 'asc' }]
            }
          }}
          getRowId={(row: any) => row.idusuario}
          pageSizeOptions={[5, 10, 15, 20]}
          checkboxSelection
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              printOptions: { disableToolbarButton: true },
              csvOptions: { disableToolbarButton: true }
            },
          }}
        />
      </Box>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
        sx={{ m: 2 }}
      >
        Delete
      </Button>
    </>
  );
}
