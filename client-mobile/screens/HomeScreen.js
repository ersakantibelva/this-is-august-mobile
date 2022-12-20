import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios
      .get("https://h8-p3-c1-belva.foxhub.space/pub/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Detail')}
        title="Go to Detail"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
      onPress={() => navigation.navigate('Tab')}
      title="Go to Tab"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "contain",
  },
  tomatoBox: {
    backgroundColor: "tomato",
    flexDirection: "row",
    padding: 20,
    flex: 1,
  },
  blueBox: {
    backgroundColor: "blue",
    flex: 2,
  },
  orangeBox: {
    backgroundColor: "orange",
    flex: 2,
  },
  whiteBox: {
    backgroundColor: "white",
    flex: 1,
  },
  redBox: {
    backgroundColor: "red",
    flex: 2,
  },
});
