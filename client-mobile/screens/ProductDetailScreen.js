import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import currencyFormat from "../helpers/currencyFormat";

export default function ProductDetailScreen({ route }) {
  const { slug } = route.params;
  const [product, setProduct] = useState({});
  const [bigImage, setBigImage] = useState("");
  const [price, setPrice] = useState("")

  const showImage = (url) => {
    setBigImage(url);
  };

  useEffect(() => {
    axios
      .get("https://h8-p3-c1-belva.foxhub.space/pub/products/" + slug)
      .then((res) => {
        setProduct(res.data);
        setBigImage(res.data.mainImg);
        currencyFormat(res.data.price)
        // setPrice(price)
      });
  }, []);

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          marginVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          {product.name}
        </Text>
        <Text>{product.description}</Text>
      </View>

      {bigImage && (
        <Image
          source={{
            uri: bigImage,
          }}
          style={{
            width: "100%",
            height: 500,
          }}
        />
      )}

      <ScrollView horizontal={true}>
        <TouchableOpacity
          onPress={() => showImage(product.mainImg)}
        >
          <Image
            source={{
              uri: product.mainImg,
            }}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </TouchableOpacity>
        
        {product.Images &&
          product.Images.map((image) => {
            return (
              <TouchableOpacity
                key={image.id}
                onPress={() => showImage(image.imgUrl)}
              >
                <Image
                  source={{
                    uri: image.imgUrl,
                  }}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
              </TouchableOpacity>
            );
          })}
      </ScrollView>

      <Text style={{
        fontSize: 30,
        fontWeight: '500',
        marginVertical: 10
      }}>Rp{currencyFormat(product.price)},00
      </Text>

      <Text>{price}</Text>

    </ScrollView>
  );
}
