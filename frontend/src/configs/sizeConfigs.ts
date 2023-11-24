const sizeConfigs = {
  header: {
    height: '65px',
  },
  conteudo: {
    minHeight: '',
  },
  feed: {
    img: {
      height: '100%',
      width: '100%'
    }
  },
  footer: {
    height: '96px',
  },
}

sizeConfigs.conteudo.minHeight = `calc(100vh - ${sizeConfigs.header.height} - ${sizeConfigs.footer.height})`

export default sizeConfigs;