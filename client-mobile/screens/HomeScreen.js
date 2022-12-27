import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/product";
import ProductCard from "../components/ProductCard";
import HeaderHome from "../components/HeaderHome";
import Loader from "../components/Loader";
import { styles } from "../styles/Home";

export default function HomeScreen() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Loader />
  else if (error) console.log(error);
  else {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {loading && <Loader />}

        {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.textError}>
            There is something wrong happened.
          </Text>
          <Text style={styles.textGoBack}>Try to search another product or go back to home</Text>
        </View>
      )}

        <FlatList
          ListHeaderComponent={<HeaderHome />}
          data={data.products}
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
}
