import sizeConfigs from "../../configs/sizeConfigs";

const sizes = sizeConfigs.header

const headerStyles = {
  container: {
    bgcolor: 'background.dark',
    height: `${sizes.height}`
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 6
  },
}

export default headerStyles;