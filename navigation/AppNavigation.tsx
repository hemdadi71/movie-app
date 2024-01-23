import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import MovieScreen from '../screens/MovieScreen'
import PersonScreen from '../screens/PersonScreen'
import SearchScreen from '../screens/SearchScreen'
import UpcomingScreen from '../screens/UpcomingScreen'
import TopRatedScreen from '../screens/TopRatedScreen'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Movie"
          options={{ headerShown: false }}
          component={MovieScreen}
        />
        <Stack.Screen
          name="Person"
          options={{ headerShown: false }}
          component={PersonScreen}
        />
        <Stack.Screen
          name="Search"
          options={{ headerShown: false }}
          component={SearchScreen}
        />
        <Stack.Screen
          name="Upcoming"
          options={{ headerShown: false }}
          component={UpcomingScreen}
        />
        <Stack.Screen
          name="TopRated"
          options={{ headerShown: false }}
          component={TopRatedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
