const formRifaStyles = {
    formRifa: {
      margin: '45px auto',
      width: '100%',
      maxWidth: '46rem',
      backgroundColor: 'white',
      padding: '15px 20px',
      borderRadius: '10px',
    },
    titulo: {
      color: 'primary.main',
      textAlign: 'center',
      width: '100%',
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '15px'
    },
    campo: {
      input: {color: '#515151'},
      label: {color: '#7f858d'},
      fieldSet: {borderColor: '#7f858d'},
      width: '100%',
      marginBottom: 2
    },
    campoImagem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '148px',
      backgroundColor: '#fff',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '7px',
      borderColor: '#7f858d',
      cursor: 'pointer',
      '&:hover': {
        borderWidth: '2px',
        borderColor: 'primary.main',
        color: 'primary.main',
      }
    },
    enderecoBox: {
      transition: 'all 300ms ease',
    },
    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
  }
  
  export default formRifaStyles;