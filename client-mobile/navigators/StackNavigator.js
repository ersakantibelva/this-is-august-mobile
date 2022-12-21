import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import TabNavigator from "./TabNavigator";
import TopTabNavigator from "./TopTabNavigator";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
    {/* <Stack.Screen name="Home" component={HomeScreen} options={{
      headerShown: false
    }}/> */}
    <Stack.Screen name="Tab" component={TabNavigator} />
    {/* <Stack.Screen name="TopTab" component={TopTabNavigator} /> */}
  </Stack.Navigator>
  )
}