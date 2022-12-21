import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default function ProductCard({ item }) {
  const navigate = useNavigation()
  const price = Number(item.price).toLocaleString('id-ID')
  
  const onPress = () => {
    navigate.navigate('Product Detail', {
      slug: item.slug,
      name: item.name
    })
  }

  return (
    <View style={{
      backgroundColor: 'white',
      width: "50%",
      padding: 10
    }}>
      <TouchableOpacity onPress={onPress}>
      <Image style={{
        width: "100%",
        height: 200
      }} source={{
          uri: `${item.mainImg}`,
        }} />
        <Text>{item.name}</Text>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20
        }}>Rp{price},00</Text>
      </TouchableOpacity>
    </View>
  )
}