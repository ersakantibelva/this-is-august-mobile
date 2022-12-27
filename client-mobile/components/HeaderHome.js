import { Image, Text, View } from "react-native";
import { styles } from "../styles/HeaderHome";

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <View
        style={styles.bannerContainer}
      >
        <View
          style={styles.textContainer}
        >
          <Text
            style={styles.textBrand}
          >
            THIS IS AUGUST
          </Text>
          <Text
            style={styles.textSlogan}
          >
            shop your outfit now.
          </Text>
        </View>

        <View
          style={styles.overlay}
        ></View>

        <View
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            source={{
              uri: "https://i0.wp.com/thisisapril.com/wp-content/uploads/2022/12/SALE-2.jpg?w=1164&ssl=1",
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <Text
            style={{
              backgroundColor: "blue",
              flex: 1,
            }}
          >
            All Product
          </Text>
        </View>
      </View>

      <View style={styles.allProdContainer}>
        <Text style={styles.allProdText}>
          All Products
        </Text>
      </View>
    </View>
  );
}
