import React from 'react';
import {View, StyleSheet} from 'react-native';

const Circle = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, styles.filledCircle]} />
      <View style={styles.line} />
      <View style={styles.circle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
    // marginLeft: 30,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  filledCircle: {
    backgroundColor: 'gray',
  },
  line: {
    backgroundColor: 'black',
    width: 50,
    height: 5,
    // marginLeft: 4,
  },
});

export default Circle;
