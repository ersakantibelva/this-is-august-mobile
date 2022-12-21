import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProductsScreen from '../screens/ProductsScreen'

const Tab = createMaterialTopTabNavigator()

export default function TopTabNavigator() {

  return(
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductsScreen} ></Tab.Screen>
      <Tab.Screen name="Top" component={ProductsScreen} ></Tab.Screen>
      <Tab.Screen name="Bottoms" component={ProductsScreen} ></Tab.Screen>
    </Tab.Navigator>
  )
}