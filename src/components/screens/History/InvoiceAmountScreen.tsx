import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../header/Header';
import InvoiceAmount from '../History/InvoiceAmount';
import Tasks from '../History/Tasks';

export default function InvoiceAmountScreen() {
  const handlePay = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          name="8 Design Co."
          company="IV BY D98899 23"
          indicatorColor="#FE6545"
          indicatorText="LATE"
        />
      </View>

      <View style={styles.body}>
        <View style={styles.innerBody}>
          <View>
            <InvoiceAmount
              invoiceHeading="Invoice For"
              invoiceForName="Karl Johns"
              invoiceForAddress="Abc st 1/4, San Francisco,
            California, USA"
              amountHeading="Amount Due"
              amountDetail="$1600"
              amountDate="April 8,2023"
            />
          </View>
          <View>
            <Tasks />
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.Button} onPress={handlePay}>
              <Text style={styles.ButtonText}>Pay Now</Text>
            </TouchableOpacity>
            <View style={styles.amountContainer}>
              <Text style={styles.totalAmount}>TOTAL AMOUNT</Text>
              <Text style={styles.totalAmountDetail}>
                <Text style={{color: '#9AA8B7'}}>$ </Text>1600
              </Text>
            </View>
          </View>
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
    // backgroundColor: 'red',
    // height: 20,
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

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    gap: 15,
    marginHorizontal: 20,
  },
  Button: {
    backgroundColor: '#4666FF',
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  ButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
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
