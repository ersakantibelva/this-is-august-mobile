import axios from "axios";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsScreen() {
  const [products, setProducts] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProduct: 0,
    products: []
  });

  useEffect(() => {
    axios
      .get("https://h8-p3-c1-belva.foxhub.space/pub/products")
      .then((res) => {
        setProducts({
          currentPage: res.data.currentPage,
          totalPages: res.data.totalPages,
          totalProduct: res.data.totalProduct,
          products: res.data.products
        });
      });
  }, []);

  return (
    <View style={{
      flex:1
    }}>
      <FlatList
      data={products.products}
      renderItem={({item}) => <ProductCard item={item} />}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={{
        justifyContent: 'space-around'
      }}
      style={{
        width: "100%",
      }}
      />
    </View>
  )
}