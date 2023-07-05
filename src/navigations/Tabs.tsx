import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, Text} from 'react-native';
import React, {useMemo} from 'react';
import HomeScreen from '../components/screens/Home/HomeScreen';
import ChatScreen from '../components/screens/Chat/ChatScreen';
import HistoryScreen from '../components/screens/History/HistoryScreen';
import FinancialScreen from '../components/screens/Financial/FinancialScreen';
import ProfileScreen from '../components/screens/Profile/ProfileScreen';
import ChatIcon from '../assets/icons/ChatIcon';
import HistoryIcon from '../assets/icons/HistoryIcon';
import AppoloIcons from '../assets/icons/AppoloIcons';
import ProfileIcon from '../assets/icons/ProfileIcon';
import FinancialIcon from '../assets/icons/FinancialIcon';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          // padding: 10,
          paddingVertical: 40,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Poppins-SemiBold',
          marginBottom: 10,
        },
        tabBarIconStyle: {
          marginBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) =>
            focused ? <ChatIcon /> : <ChatIcon fillColor="#C0C5D1" />,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) =>
            focused ? <HistoryIcon /> : <HistoryIcon fillColor="#C0C5D1" />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: () => <AppoloIcons width={60} height={60} />,
        }}
      />
      <Tab.Screen
        name="Financial"
        component={FinancialScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <FinancialIcon fillColor="#4666FF" />
            ) : (
              <FinancialIcon fillColor="#C0C5D1" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <ProfileIcon fillColor="#4666FF" />
            ) : (
              <ProfileIcon fillColor="#C0C5D1" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
