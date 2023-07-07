import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonHeader from '../../header/ButtonHeader';
import LoadsScreen from './LoadsScreen';

export default function HistoryScreen() {
  const [selectedScreen, setSelectedScreen] = useState<string>('Loads');

  const handleLoadsPress = (screenId: string) => {
    setSelectedScreen(screenId);
  };

  const renderScreen = () => {
    if (selectedScreen === 'Loads') {
      return (
        <View style={styles.body}>
          <LoadsScreen />
        </View>
      );
    } else if (selectedScreen === 'Invoices') {
      return <Text>Invoices Screen</Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonHeader
          selectedButton={selectedScreen}
          handleLoadsPress={handleLoadsPress}
        />
      </View>
      <View style={styles.body}>{renderScreen()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4666FF',
  },
  header: {
    flex: 2,
  },
  body: {
    flex: 9,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
