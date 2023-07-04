import React from 'react';
import {Image} from 'react-native';
import SignUpNextScreen from './src/components/screens/signup/SignUpNextScreen';
import SignUpVerficationScreen from './src/components/screens/signup/SignUpVerficationScreen';
import Login from './src/components/screens/login/Login';
import CreateAccount from './src/components/screens/signup/CreateAccount';
import RegisterBusiness from './src/components/screens/business/RegisterBusiness';
import RegisterBusinessTwo from './src/components/screens/business/RegisterBusinessTwo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //
  );
}

export default App;
