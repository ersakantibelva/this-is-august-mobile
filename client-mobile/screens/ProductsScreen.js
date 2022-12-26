import { FlatList, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/product";
import ProductCard from "../components/ProductCard";

export default function ProductsScreen() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (!loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue'
        }}
      >
        <FlatList
          data={data.products}
          // data={data}
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
      </View>
    );
  }
}
