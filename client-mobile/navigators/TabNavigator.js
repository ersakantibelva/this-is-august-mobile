import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import Messages from '../screens/Messages'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'

export default function TabNavigator() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Messages') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        } else if (route.name === 'Message') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={Messages} />
      {/* <Tab.Screen name="Message" component={Messages} /> */}
    </Tab.Navigator>
  )
}