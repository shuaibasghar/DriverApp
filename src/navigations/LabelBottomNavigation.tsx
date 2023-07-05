import {View, Text, TextStyle} from 'react-native';
import React from 'react';

interface LabelBottomNavigationProps {
  text: string;
  color: string;
  fontWeight?: TextStyle['fontWeight'];
  fontSize?: number;
}

const LabelBottomNavigation: React.FC<LabelBottomNavigationProps> = ({
  text,
  color,
  fontWeight = 'normal',
  fontSize = 12,
}) => {
  return (
    <View>
      <Text
        style={{
          fontSize,
          fontFamily: 'Poppins-Medium',
          fontWeight,
          color,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default LabelBottomNavigation;
