import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import Feed from "../screens/Feed";
import HomeScreen from "../screens/HomeScreen";
import Messages from "../screens/Messages";
import TabNavigator from "./TabNavigator";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Tab" component={TabNavigator} />
    <Stack.Screen name="Feed" component={Feed} />
  </Stack.Navigator>
  )
}