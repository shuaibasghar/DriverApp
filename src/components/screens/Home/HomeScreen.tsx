import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../header/Header';
import InvoiceAmount from '../History/InvoiceAmount';
import Tasks from '../History/Tasks';
import Dispatcher from '../History/Dispatcher';

export default function HomeScreen() {
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

  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    gap: 15,
    marginHorizontal: 20,
  },
  paidContainer: {
    flexDirection: 'column',
    width: '60%',
  },
  paidText: {
    fontSize: 14,
    color: '#17C903',
    fontFamily: 'Poppins-Medium',
  },
  paidTextDescription: {
    fontSize: 10,
    color: '#333333',
    fontFamily: 'Poppins-Regular',
  },
  amountContainer: {
    flexDirection: 'column',
    gap: 15,
  },
  totalAmount: {
    fontSize: 14,
    color: '#3C4253',
    fontFamily: 'Poppins-Medium',
  },
  totalAmountDetail: {
    fontSize: 17,
    color: '#3C4253',
    fontFamily: 'Poppins-SemiBold',
  },
});
