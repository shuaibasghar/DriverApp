import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LoadHeader from '../../header/LoadHeader';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Header name="Alexander  James" company="ABC Dispatcher LLC" /> */}
        <LoadHeader title="Load Details" color="#FFFFFF" />
      </View>

      <View style={styles.body}></View>
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
