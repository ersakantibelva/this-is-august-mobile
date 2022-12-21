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
import TopTabNavigator from "../navigators/TopTabNavigator";

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
    <View style={styles.container}>
      <TopTabNavigator style={{
        flex: 1
      }}/>
      <Text style={{
        flex: 3
      }}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  }
});
