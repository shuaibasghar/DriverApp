import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonHeaderProps {
  selectedButton: string;
  handleLoadsPress: (buttonId: string) => void;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({
  selectedButton,
  handleLoadsPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === 'Loads' && styles.selectedButton,
          ]}
          onPress={() => handleLoadsPress('Loads')}>
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'Loads' && styles.selectedButtonText,
            ]}>
            Loads
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === 'Invoices' && styles.selectedButton,
          ]}
          onPress={() => handleLoadsPress('Invoices')}>
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'Invoices' && styles.selectedButtonText,
            ]}>
            Invoices
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    borderRadius: 10,
    width: '50%',
  },
  buttonText: {
    color: '#333333',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textAlign: 'center',
  },
  selectedButton: {
    backgroundColor: '#4666FF',
  },
  selectedButtonText: {
    color: '#ffffff',
  },
});

export default ButtonHeader;
