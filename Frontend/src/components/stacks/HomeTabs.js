import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../homescreens/Dashboard/Dashboard';
import Leaderboard from '../homescreens/leaderboard';
import Leaderboard1 from '../homescreens/leaderboard1';
import PetActivityStack from './PetActivityStack';
import Profile from '../homescreens/Profile/profile';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Leaderboard" component={Leaderboard} />
    <Tab.Screen name="Dashboard" component={Dashboard} />
    
    
    <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Homescreen" component={PetActivityStack} options={{ headerShown: false }}/>
    
      
    </Tab.Navigator>
  );
};

export default HomeTabs;
