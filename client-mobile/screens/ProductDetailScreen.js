import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import currencyFormat from "../helpers/currencyFormat";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProductDetailScreen({ route }) {
  const { slug } = route.params;
  const [product, setProduct] = useState({});
  const [bigImage, setBigImage] = useState("");
  const [price, setPrice] = useState("");

  const showImage = (url) => {
    setBigImage(url);
  };

  useEffect(() => {
    axios
      .get("https://h8-p3-c1-belva.foxhub.space/pub/products/" + slug)
      .then((res) => {
        setProduct(res.data);
        setBigImage(res.data.mainImg);
        currencyFormat(res.data.price);
        // setPrice(price)
      });
  }, []);

  if (product.name) {
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                flexGrow: 1,
                backgroundColor: "brown",
                color: "white",
                padding: 10,
                borderRadius: 20,
                alignItems: "center",
                textAlign: 'center',
                marginRight: 5,
              }}
            >
              {product.Category.name}
            </Text>
            <Text
              style={{
                flex: 9,
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              {product.name}
            </Text>
          </View>
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
          <TouchableOpacity onPress={() => showImage(product.mainImg)}>
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

        <Text
          style={{
            fontSize: 30,
            fontWeight: "500",
            marginVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          {currencyFormat(product.price)}
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 10,
            padding: 10,
            height: 80,
          }}
        >
          <View
            style={{
              flex: 5,
              backgroundColor: "brown",
              width: "100%",
              marginRight: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              ADD TO CART
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              marginLeft: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="favorite-outline" size={50} color="crimson" />
          </View>
        </View>
      </ScrollView>
    );
  }
}
