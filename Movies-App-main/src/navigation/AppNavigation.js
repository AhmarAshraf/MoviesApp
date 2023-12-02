import * as React from 'react';
import {Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../screens/dashboard/Dashboard';
import Home from '../screens/home/Home';
import MovieDetail from '../screens/movieDetail/MovieDetail';
import Watch from '../screens/watch/Watch';
import MediaLibrary from '../screens/mediaLibrary/MediaLibrary';
import More from '../screens/more/More';

import dashboard from '../assets/images/dashboard.png';
import watch from '../assets/images/watch.png';
import library from '../assets/images/library.png';
import more from '../assets/images/more.png';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = props => {
  return (
    <Image
      source={props.icon}
      style={{tintColor: props.color, width: props.width, height: props.height}}
    />
  );
};

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2E2739',
          padding: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name={'Dashboard'}
        component={Dashboard}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={dashboard} color={color} width={22} height={22} />
          ),
        }}
      />
      <Tab.Screen
        name={'Watch'}
        component={Watch}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={watch} color={color} width={22} height={22} />
          ),
        }}
      />
      <Tab.Screen
        name={'Media Library'}
        component={MediaLibrary}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={library} color={color} width={22} height={22} />
          ),
        }}
      />
      <Tab.Screen
        name={'More'}
        component={More}
        options={{
          tabBarIcon: ({color}) => (
            <TabBarIcon icon={more} color={color} width={22} height={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const AppNavigation = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
