import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import ProfileScreen from '../screens/Profile';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        // name='Profile'
        /* Console Warning
         * Found screens with the same name nested inside one another.
         * Profile, Profile > Profile
         * This can cause confusing behavior during navigation.
         * Fix: change the name `Profile` to `Account`
         */
        name='Account'
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{ title: 'Sign Up' }}
      />
      <ProfileStack.Screen
        name='LogIn'
        component={LogInScreen}
        options={{ title: 'Log In' }}
      />
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
