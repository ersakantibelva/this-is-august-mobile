import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/Search";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useLazyQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/product";

export default function DetailScreen() {
  const [search, setSearch] = useState("");
  const [getFiltered, { loading, error, data }] = useLazyQuery(GET_PRODUCTS, {
    variables: {
      search: search,
    },
  });

  async function handleSearchProduct() {
    try {
      getFiltered({
        variables: { search },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          placeholder="Search here"
          value={search}
          onChangeText={setSearch}
          cursorColor={'gray'}
          onKeyPress={handleSearchProduct}
          style={styles.searchInput}
        />
      </View>

      {loading && <Loader />}

      <View
        style={styles.foundedContainer}
      >
        {
          !search &&
          <Text style={styles.notFoundText}>
            No product found
          </Text>
        }
        {data && (
          <FlatList
            ListHeaderComponent={
              <Text
                style={styles.foundedText}
              >
                {data.products.length} products found
              </Text>
            }
            data={data.products}
            renderItem={({ item }) => <ProductCard item={item} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={{
              justifyContent: "space-around",
            }}
            style={styles.card}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
