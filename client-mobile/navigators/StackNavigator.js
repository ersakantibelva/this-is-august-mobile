import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import ProductCard from "../components/ProductCard";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
    <Stack.Screen name="BottomTab" component={BottomTabNavigator}
    options={{
      headerShown: false
    }}
    />
    <Stack.Screen name="Product Card" component={ProductCard}/>
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
  </Stack.Navigator>
  )
}