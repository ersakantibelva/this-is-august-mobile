import { View, Text, Button } from "react-native"

export default function DetailScreen({ route, navigation }) {
  const { id } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{ id }</Text>
      {/* <Text>{ itemName }</Text> */}
      <Button
        onPress={() => navigation.push('Detail')}
        title="Go to Detail..again"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}