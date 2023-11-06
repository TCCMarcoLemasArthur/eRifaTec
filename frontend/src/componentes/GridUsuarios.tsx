import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import styles from '../estilos/gridUsuariosStyles';

import {
  DataGrid,
  GridColDef,
  GridToolbar
} from '@mui/x-data-grid';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';

const columns: GridColDef[] = [
  { field: 'idusuario', headerName: 'ID', flex: 0.7 },
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
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [idSel, setIdSel] = useState(0)
  
  useEffect(() => {
    console.log('useEffect executado')
    fetchUsers()
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:5000/listarusuario')
      .then(response => {
        console.log(response.data)
        setUsers(response.data)
      })
      .catch(error => {
        console.log(error.request)
      })
  }

  const handleDelete = () => {
    if (idSel != 0) {
      axios.delete(`http://localhost:5000/deletarusuario/${idSel}`)
        .then(response => {
          console.log(response.data)
          fetchUsers()
        })
        .catch(erro => {
          console.log(erro)
        })
    } else {
      console.error('Nenhum registro selecionado')
    }
  }

  const editarUsuario = () => {
    if (idSel != 0) {
      navigate(`/user/${idSel}`)
    } else {
      console.error('Nenhum registro selecionado')
    }
  }

  return (
    <>
      <Box sx={styles.container}>
        <DataGrid
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          checkboxSelection={false}
          hideFooterSelectedRowCount={true}
          onRowSelectionModelChange={(id) => setIdSel(Number(id))}
          rows={users}
          columns={columns}
          getRowId={(row: any) => row.idusuario}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
            sorting: {
              sortModel: [{ field: 'idusuario', sort: 'asc' }]
            }
          }}
          pageSizeOptions={[10, 15, 20]}
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
        Excluir selecionado
      </Button>
      <Button
        variant="contained"
        startIcon={<EditIcon />}
        onClick={editarUsuario}
        sx={{ m: 2 }}
      >
        Editar usuário
      </Button>
    </>
  );
}
