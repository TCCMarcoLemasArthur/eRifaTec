import sizeConfigs from "../../configs/sizeConfigs";

const sizes = sizeConfigs.conteudo

const noPageStyles = {
  container: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: `${sizes.minHeight}`,
    div: {
      svg: {
        fontSize: '2rem'
      }
    }
  },
  alert: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    fontSize: 24,
    fontWeight: 400
  },
  alertTitle: {
    fontSize: 28,
    fontWeight: 'bold'
  }
}

export default noPageStyles;