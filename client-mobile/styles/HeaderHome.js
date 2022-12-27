import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 250
  },
  bannerContainer: {
    flex: 4
  },
  textContainer: {
    position: "absolute",
    zIndex: 20,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  textBrand: {
    color: "white",
    fontWeight: "300",
    fontSize: 30,
  },
  textSlogan: {
    color: "white",
    fontWeight: "600",
  },
  overlay: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    opacity: 0.3,
  },
  allProdContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  allProdText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: '500'
  }
})