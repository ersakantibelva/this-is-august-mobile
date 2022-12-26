import { FlatList, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/product";
import ProductCard from "../components/ProductCard";

export default function ProductsScreen() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  // const [products, setProducts] = useState({
  //   currentPage: 1,
  //   totalPages: 1,
  //   totalProduct: 0,
  //   products: []
  // });

  // useEffect(() => {
  //   axios
  //     .get("https://h8-p3-c1-belva.foxhub.space/pub/products")
  //     .then((res) => {
  //       setProducts({
  //         currentPage: res.data.currentPage,
  //         totalPages: res.data.totalPages,
  //         totalProduct: res.data.totalProduct,
  //         products: res.data.products
  //       });
  //     });
  // }, []);
  if (!loading) {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
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
      </View>
    );
  }
}
