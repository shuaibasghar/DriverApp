import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/navigations/Tabs';
import OrderTrackingScreen from './src/components/screens/OrderTracking/OrderTrakingScreen';
import CreateAccount from './src/components/screens/signup/CreateAccount';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {navigationRef} from './src/navigations/Naviagtion';
import SignUpVerficationScreen from './src/components/screens/signup/SignUpVerficationScreen';
// const Stack = createNativeStackNavigator();
// const Stack = createBottomTabNavigator();

const queryClient = new QueryClient();
function App(): JSX.Element {
  // const onSubmit = () => {
  //   navigationRef.current?.navigate('SignupVerification'); // Navigate to the verification screen
  // };
  return (
    <QueryClientProvider client={queryClient}>
      {/* <NavigationContainer ref={navigationRef}> */}
      <NavigationContainer>
        {/* <CreateAccount /> */}
        {/* <SignUpVerficationScreen /> */}
        <Tabs />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
