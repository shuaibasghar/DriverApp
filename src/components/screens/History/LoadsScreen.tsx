import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoadsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <View style={styles.name}>
            <Text style={styles.text1}>Miami,FL</Text>
            <View style={styles.circleContainer}>
              <View style={styles.filledCircle} />
              <View style={styles.line} />
              <View style={styles.emptyCircle} />
            </View>
            <Text style={styles.text1}>Atlanta,GA</Text>
          </View>
          <View style={styles.borderLine} />
        </View>
      </View>
      <View style={styles.box}>
        {/* <Text style={styles.boxText}>Box 1</Text> */}
      </View>
      <View style={styles.box}>
        {/* <Text style={styles.boxText}>Box 1</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    gap: 10,
    marginTop: 15,
  },
  box: {
    // width: '80%',
    height: 160,
    backgroundColor: '#FFFFFF',
    // marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9AA8B733',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  line: {
    height: 2,

    backgroundColor: '#4666FF',
    position: 'absolute',
    top: '45%',
    left: '6%',
    right: '14%',
  },
  circleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 20,
    marginHorizontal: 45,
  },
  filledCircle: {
    width: 13,
    height: 13,
    borderRadius: 10,
    backgroundColor: '#4666FF',
  },
  emptyCircle: {
    width: 13,
    height: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4666FF',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  innerBox: {
    flexDirection: 'column',
    gap: 5,
    marginVertical: 10,
  },
  name: {
    marginHorizontal: 20,
    // marginVertical: 15,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingVertical: 15,
    // borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#9AA8B733',
  },
  borderLine: {
    flex: 1,
    height: 2,
    backgroundColor: 'lightgray',
  },
});

export default LoadsScreen;
