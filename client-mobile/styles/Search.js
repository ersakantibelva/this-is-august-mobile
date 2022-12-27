import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 2,
    marginTop: 5,
    zIndex: 20,
  },
  searchInput: {
    alignSelf: "center",
    width: "95%",
    height: 40,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  foundedContainer: {
    flex: 14,
  },
  notFoundText: {
    textAlign: 'center',
    flex: 1,
    color: 'gray'
  },
  foundedText: {
    textAlign: "center",
    color: "gray",
  },
  card: {
    width: "100%",
  }
});
