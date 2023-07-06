import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../header/Header';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name="Alexander  James" company="ABC Dispatcher LLC" />
      </View>

      <View style={styles.body}>{/* <Text>Chat here</Text> */}</View>
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
    // backgroundColor: 'red',
    // height: 20,
  },
  body: {
    flex: 9,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // height: 20,
  },
});
