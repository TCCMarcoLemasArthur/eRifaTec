const formUsuarioStyles = {
  formUsuario: {
    margin: 'auto',
    width: '100%',
    maxWidth: '46rem',
    backgroundColor: 'white',
    padding: '15px 20px',
  },
  titulo: {
    color: 'primary.main',
    textAlign: 'center',
    width: '100%',
    fontWeight: 600,
    marginBottom: 2
  },
  campo: {
    input: {color: '#515151'},
    label: {color: '#7f858d'},
    fieldSet: {borderColor: '#7f858d'},
    width: '100%',
    marginBottom: 2
  },
  campoNumero: {
    input: {
      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none'
      },
      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none'
      },
      MozAppearance: 'textfield'
    }
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}

export default formUsuarioStyles;