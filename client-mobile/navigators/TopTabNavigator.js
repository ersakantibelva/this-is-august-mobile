import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DetailScreen from '../screens/DetailScreen'
import HomeScreen from '../screens/HomeScreen'

const Tab = createMaterialTopTabNavigator()

export default function TopTabNavigator() {

  return(
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={HomeScreen} ></Tab.Screen> */}
      <Tab.Screen name="Details" component={DetailScreen} ></Tab.Screen>
      <Tab.Screen name="Detail" component={DetailScreen} ></Tab.Screen>
    </Tab.Navigator>
  )
}