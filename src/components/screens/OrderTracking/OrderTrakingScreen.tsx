import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function OrderTrackingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.timeText}>1h 20min</Text>
        <Text style={styles.timeDescriptionText}>
          Time remaining until delivery
        </Text>
        <View style={styles.statusTime}>
          <Text style={styles.statusText}>Status: </Text>
          <Text style={styles.statusTimeText}>On Time</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.innerBody}>
          <Text>Order Tracking</Text>
        </View>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 9,

    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  innerBody: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 40,
    borderWidth: 1,
    marginHorizontal: 40,
  },

  statusTime: {
    position: 'absolute',
    top: 110,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5F6FA',
    borderRadius: 8,
    // padding: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 1,
  },
  timeText: {
    // textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },
  timeDescriptionText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
  statusText: {
    fontSize: 12,
    color: '#333333',
    fontFamily: 'Poppins-SemiBold',
  },
  statusTimeText: {
    fontSize: 12,
    color: '#31A702',
    fontFamily: 'Poppins-SemiBold',
  },
});
