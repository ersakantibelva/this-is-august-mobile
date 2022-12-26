import { Image, Text, View } from "react-native";

export default function HeaderHome() {
  return (
    <View style={{
      height: 250
    }}>
      <View
        style={{
          flex: 4
        }}
      >
        <View
          style={{
            position: "absolute",
            zIndex: 20,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "300",
              fontSize: 30,
            }}
          >
            THIS IS AUGUST
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "600",
            }}
          >
            shop your outfit now.
          </Text>
        </View>

        <View
          style={{
            position: "absolute",
            zIndex: 10,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            opacity: 0.3,
          }}
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

      <View style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
      }}>
        <Text style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: '500'
        }}>
          All Products
        </Text>
      </View>
    </View>
  );
}
