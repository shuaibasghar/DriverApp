import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigations/Tabs';

// const Stack = createNativeStackNavigator();
// const Stack = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <ProfileIcon />,
        }}
      />
       */}
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
