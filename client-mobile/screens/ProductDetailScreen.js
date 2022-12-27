import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/ProductDetail";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DETAIL } from "../queries/product";
import { MaterialIcons } from "@expo/vector-icons";
import currencyFormat from "../helpers/currencyFormat";
import Loader from "../components/Loader";

export default function ProductDetailScreen({ route }) {
  const { id } = route.params;
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      productId: id,
    },
  });
  const [bigImage, setBigImage] = useState("");
  const [like, setLike] = useState("favorite-outline");

  const showImage = (url) => {
    setBigImage(url);
  };

  const likeButton = () => {
    if (like == "favorite-outline") setLike("favorite");
    else setLike("favorite-outline");
  };

  useEffect(() => {
    if (data && data.product) setBigImage(data.product.mainImg);
  }, [data]);

  if (loading) return <Loader />;
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.textError}>There is something wrong happened.</Text>
        <Text style={styles.textGoBack}>Go back to see another products</Text>
      </View>
    );
  }
  if (!loading) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.nameProduct}>{data.product.name}</Text>

            <Text style={styles.categoryTag}>{data.product.Category.name}</Text>
          </View>
          <Text style={styles.authorProduct}>
            By: {data.product.User.email}
          </Text>
          <Text>{data.product.description}</Text>
        </View>

        {bigImage && (
          <Image
            source={{
              uri: bigImage,
            }}
            style={styles.previewImage}
          />
        )}

        <ScrollView horizontal={true}>
          <TouchableOpacity onPress={() => showImage(data.product.mainImg)}>
            <Image
              source={{
                uri: data.product.mainImg,
              }}
              style={styles.smallImage}
            />
          </TouchableOpacity>

          {data.product.Images &&
            data.product.Images.map((image) => {
              return (
                <TouchableOpacity
                  key={image.id}
                  onPress={() => showImage(image.imgUrl)}
                >
                  <Image
                    source={{
                      uri: image.imgUrl,
                    }}
                    style={styles.smallImage}
                  />
                </TouchableOpacity>
              );
            })}
        </ScrollView>

        <Text style={styles.size}>Available Size: S, M, L, XL</Text>
        <Text style={styles.price}>{currencyFormat(data.product.price)}</Text>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.cartContainer}>
            <Text style={styles.addToCartText}>ADD TO CART</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.favoriteContainer}
            onPress={likeButton}
          >
            <MaterialIcons name={like} size={50} color="crimson" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
