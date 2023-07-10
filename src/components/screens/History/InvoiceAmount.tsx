import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
interface InvoiceAmountProps {
  invoiceHeading?: string;
  invoiceForName?: string;
  invoiceForAddress?: string;
  amountHeading?: string;
  amountDetail?: string;
  amountDate?: string;
}

const InvoiceAmount: React.FC<InvoiceAmountProps> = ({
  invoiceHeading,
  invoiceForName,
  invoiceForAddress,
  amountHeading,
  amountDetail,
  amountDate,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainerInvoice}>
        <Text style={styles.invoiceFor}>{invoiceHeading}</Text>
        <Text style={styles.invoiceForName}>{invoiceForName}</Text>
        <Text style={styles.invoiceForAddress}>{invoiceForAddress}</Text>
      </View>
      <View style={styles.innerBoxContainer}>
        <Text style={styles.amountDue}>{amountHeading}</Text>
        <Text style={styles.amountDueDetail}>{amountDetail}</Text>
        <Text style={styles.amountDueDate}>{amountDate}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9AA8B733',
    marginBottom: 10,
    elevation: 4,
    padding: 5,
  },
  innerBoxContainer: {
    width: '40%',
    backgroundColor: '#F5F6FA',
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
    gap: 5,
    borderColor: '#9AA8B733',
  },
  textContainerInvoice: {
    width: '50%',
    flexDirection: 'column',
    gap: 5,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  invoiceFor: {
    fontSize: 14,
    color: '#3C4253',
    fontFamily: 'Poppins-Medium',
  },
  invoiceForName: {
    fontSize: 17,
    color: '#3C4253',
    fontFamily: 'Poppins-SemiBold',
  },
  invoiceForAddress: {
    fontSize: 11,
    color: '#9AA8B7',
    fontFamily: 'Poppins-Medium',
  },

  amountDue: {
    fontSize: 14,
    color: '#3C4253',
    fontFamily: 'Poppins-Medium',
  },
  amountDueDetail: {
    fontSize: 17,
    color: '#FE4545',
    fontFamily: 'Poppins-SemiBold',
  },
  amountDueDate: {
    fontSize: 12,
    color: '#9AA8B7',
    fontFamily: 'Poppins-Medium',
  },
});
export default InvoiceAmount;
