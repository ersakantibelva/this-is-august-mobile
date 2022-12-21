import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import DetailScreen from "../screens/DetailScreen";
import ProductCard from "../components/ProductCard";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
    <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{
      headerShadowVisible: false,
      title: 'THIS IS AUGUST',
      headerTitleAlign: "center"
    }}/>
    <Stack.Screen name="Product Detail" component={ProductDetailScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="ProductCard" component={ProductCard}/>
  </Stack.Navigator>
  )
}