import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textError: {
    color: "gray",
    fontSize: 20,
    fontWeight: 'bold'
  },
  textGoBack: {
    color: "gray",
    fontSize: 14,
  },
  container: {
    backgroundColor: "white",
  },
  headerContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nameProduct: {
    flex: 9,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  categoryTag: {
    backgroundColor: "brown",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center",
    marginLeft: 5,
  },
  authorProduct: {
    color: "black",
    fontSize: 10,
    marginBottom: 8,
  },
  previewImage: {
    width: "100%",
    height: 500,
  },
  smallImage: {
    width: 100,
    height: 100,
  },
  size: {
    marginTop: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 16
  },
  price: {
    fontSize: 30,
    fontWeight: "500",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: "row",
    marginHorizontal: 10,
    padding: 10,
    height: 80,
  },
  cartContainer: {
    flex: 5,
    backgroundColor: "brown",
    width: "100%",
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  favoriteContainer: {
    flex: 1,
    width: "100%",
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
