import { TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={{
    }}>
      <TextInput style={{
        width: "100%",
        height: 40,
        margin: 10,
        borderColor: 'black'
      }}/>
    </View>
  )
}