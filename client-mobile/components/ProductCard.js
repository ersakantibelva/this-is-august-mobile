import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from "react-native";
import currencyFormat from "../helpers/currencyFormat";
import { styles } from "../styles/ProductCard";

export default function ProductCard({ item }) {
  const navigate = useNavigation()
  
  const onPress = () => {
    navigate.navigate('Product Detail', {
      id: item.id,
      name: item.name
    })
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={{
          uri: `${item.mainImg}`,
        }} />
        <Text>{item.name}</Text>
        <Text style={styles.price}>{currencyFormat(item.price)}</Text>
      </TouchableOpacity>
    </View>
  )
}