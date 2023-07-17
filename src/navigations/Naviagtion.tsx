import {NavigationContainerRef} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// Define the navigation ref
export const navigationRef = React.createRef<NavigationContainerRef>();

// Define navigation functions
export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

// Define navigation prop type
export type RootStackParamList = {
  [key: string]: undefined;
};

// Define navigation prop
export type NavigationProp = StackNavigationProp<RootStackParamList, string>;
