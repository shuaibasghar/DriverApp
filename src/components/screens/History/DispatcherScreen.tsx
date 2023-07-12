import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Dispatcher from '../History/Dispatcher';

export default function DispatcherScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Dispatchers</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.innerBody}>
          <Dispatcher
            companyName="ABC Logistics LLC"
            location="Miami, Florida"
            eid="1234-5678"
            imagePath="../../"
          />
          <Dispatcher
            companyName="ABC Logistics LLC"
            location="Miami, Florida"
            eid="1234-5678"
            imagePath="../../"
          />
          <Dispatcher
            companyName="ABC Logistics LLC"
            location="Miami, Florida"
            eid="1234-5678"
            imagePath="../../"
          />
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
  headerText: {
    fontSize: 22,
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },
  body: {
    flex: 9,

    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  innerBody: {
    flex: 1,
    gap: 10,
    marginVertical: 20,
  },
});
