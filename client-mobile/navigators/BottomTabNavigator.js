import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'ios-search' : 'ios-search-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false
    })} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        headerShown: false
      }}/>
    </Tab.Navigator>
  )
}