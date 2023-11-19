const sizeConfigs = {
  header: {
    height: '65px',
  },
  conteudo: {
    minHeight: '',
  },
  footer: {
    height: '96px',
  },
}

sizeConfigs.conteudo.minHeight = `calc(100vh - ${sizeConfigs.header.height} - ${sizeConfigs.footer.height})`

export default sizeConfigs;