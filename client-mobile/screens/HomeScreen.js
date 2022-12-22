import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "../components/ProductCard";
import HeaderHome from "../components/HeaderHome";
import Loader from "../components/Loader";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState({
    currentPage: 1,
    totalPages: 1,
    totalProduct: 0,
    products: [],
  });

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://h8-p3-c1-belva.foxhub.space/pub/products")
      .then((res) => {
        setProducts({
          currentPage: res.data.currentPage,
          totalPages: res.data.totalPages,
          totalProduct: res.data.totalProduct,
          products: res.data.products,
        })
        setLoading(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      {
        loading &&
        <Loader />
      }

      <FlatList
        ListHeaderComponent={<HeaderHome />}
        data={products.products}
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
    </SafeAreaView>
  );
}
