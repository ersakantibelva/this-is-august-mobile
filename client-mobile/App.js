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

export default function App() {
  const [products, setProducts] = useState({});

  const header = () => {
    return (
      <View style={styles.tomatoBox}>
        <View style={styles.whiteBox}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>
        <View style={styles.redBox}>
          <Text>Halo</Text>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "black",
          padding: 20,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
            flex: 1,
          }}
          source={{
            uri: `${item.mainImg}`,
          }}
        />
        <Text
          style={{
            color: "white",
            flex: 3,
          }}
        >
          {item.name} - {item.description}
        </Text>
      </View>
    );
  };

  useEffect(() => {
    axios
      .get("https://h8-p3-c1-belva.foxhub.space/pub/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.orangeBox}>
        <FlatList
        ListHeaderComponent={header}
          data={products.products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
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
