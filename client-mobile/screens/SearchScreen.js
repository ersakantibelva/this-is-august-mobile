import axios from "axios";
import { useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader"

export default function DetailScreen() {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [product, setProduct] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProduct: 0,
    products: []
  })

  async function handleSearchProduct() {
    try {
      setLoading(true)
      const { data } = await axios.get('https://h8-p3-c1-belva.foxhub.space/pub/products?search=' + search)
      setProduct({
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        totalProduct: data.totalProduct,
        products: data.products
      })
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          marginHorizontal: 2,
          marginTop: 5,
          zIndex: 20
        }}
      >
        <TextInput
          placeholder="Search here"
          value={search}
          onChangeText={setSearch}
          style={{
            alignSelf: "center",
            width: "80%",
            height: 40,
            marginRight: 10,
            borderColor: "gray",
            borderRadius: 5,
            borderWidth: 1,
            padding: 10,
          }}
        />
        <TouchableOpacity
        onPress={handleSearchProduct}
          style={{
            width: "20%",
            backgroundColor: "#DDDDDD",
            height: "100%",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            SEARCH
          </Text>
        </TouchableOpacity>
      </View>

      {
        loading &&
        <Loader />
      }

      <View style={{
        flex: 14
      }}>
      {product && (
        <FlatList
          data={product.products}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{
            justifyContent: "space-around",
          }}
          style={{
            width: "100%",
          }}
        />
      )}
      </View>
    </SafeAreaView>
  );
}
