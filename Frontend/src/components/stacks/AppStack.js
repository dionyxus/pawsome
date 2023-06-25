import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../login/LoginScreen';
import HomeTabs from './HomeTabs';
import PetSelectScreen from '../login/PetSelectScreen';
import Leaderboard from '../homescreens/leaderboard';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen name="Leaderboard" component={Leaderboard} />

        <Stack.Screen name="PetSelect" component={PetSelectScreen} />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;