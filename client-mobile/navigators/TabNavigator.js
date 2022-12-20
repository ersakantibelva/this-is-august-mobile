import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import Messages from '../screens/Messages'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabNavigator() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Feed') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Messages') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  )
}