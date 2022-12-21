import { View, Text, Button } from "react-native"
import SearchBar from "../components/SearchBar"

export default function DetailScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SearchBar />
      <Text>Details Screen</Text>
    </View>
  )
}