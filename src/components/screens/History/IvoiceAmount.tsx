import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
interface InvoiceAmountProps {
  //   invoiceHeading?: string;
  //   amountHeading?: string;
  //   amountHeading?: string;
}

const IvoiceAmount: React.FC<InvoiceAmountProps> = () => {
  return (
    <View style={styles.container}>
      <Text>IvoiceAmount</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});
export default IvoiceAmount;
