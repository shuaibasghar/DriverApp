import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonHeader from '../../header/ButtonHeader';
import LoadsInvoiceScreen from './LoadsInvoiceScreen';

export default function HistoryScreen() {
  const [selectedScreen, setSelectedScreen] = useState<string>('Loads');

  const handleLoadsPress = (screenId: string) => {
    setSelectedScreen(screenId);
  };

  const renderScreen = () => {
    if (selectedScreen === 'Loads') {
      return (
        <TouchableOpacity style={styles.loadInvoice}>
          <LoadsInvoiceScreen
            from="Miami,FL"
            to="Atlanta,GA"
            dateCompanyHeading="Date"
            dateCompanyDetail="May 19 2023"
            shipmentInvoiceHeading="Shipment Number"
            shipmentInvoiceDetail="1234-5678"
            statusHeading="Status: "
            statusHeadingDetail="Completed"
            loadInvoiceHeading="Load rate: "
            loadInvoiceDetail="$1,600"
          />
          <LoadsInvoiceScreen
            from="Miami,FL"
            to="Atlanta,GA"
            dateCompanyHeading="Date"
            dateCompanyDetail="May 19 2023"
            shipmentInvoiceHeading="Shipment Number"
            shipmentInvoiceDetail="1234-5678"
            statusHeading="Status: "
            statusHeadingDetail="Completed"
            loadInvoiceHeading="Load rate: "
            loadInvoiceDetail="$1,600"
          />
          <LoadsInvoiceScreen
            from="Miami,FL"
            to="Atlanta,GA"
            dateCompanyHeading="Date"
            dateCompanyDetail="May 19 2023"
            shipmentInvoiceHeading="Shipment Number"
            shipmentInvoiceDetail="1234-5678"
            statusHeading="Status: "
            statusHeadingDetail="Completed"
            loadInvoiceHeading="Load rate: "
            loadInvoiceDetail="$1,600"
          />
        </TouchableOpacity>
      );
    } else if (selectedScreen === 'Invoices') {
      return (
        <View style={styles.loadInvoice}>
          <LoadsInvoiceScreen
            from="Jan 20, 2023"
            to="Jan 27 2023"
            dateCompanyHeading="Company"
            dateCompanyDetail="ABC Logistic. LLC"
            shipmentInvoiceHeading="Invoice Number"
            shipmentInvoiceDetail="1234-5678"
            statusHeading=""
            statusHeadingDetail="PAID"
            loadInvoiceHeading="Invoice Amount: "
            loadInvoiceDetail="$1,600"
          />
          <LoadsInvoiceScreen
            from="Mar 23, 2023"
            to="Mar 25 2023"
            dateCompanyHeading="Company"
            dateCompanyDetail="ABC Logistic. LLC"
            shipmentInvoiceHeading="Invoice Number"
            shipmentInvoiceDetail="1234-5678"
            statusHeading=""
            statusHeadingDetail="PAID"
            loadInvoiceHeading="Invoice Amount: "
            loadInvoiceDetail="$1,600"
          />
          <LoadsInvoiceScreen
            from="April 21, 2023"
            to="April 22 2023"
            dateCompanyHeading="Company"
            dateCompanyDetail="ABC Logistic. LLC"
            shipmentInvoiceHeading="Invoice Number"
            shipmentInvoiceDetail="1234-5678"
            statusHeading=""
            statusHeadingDetail="PAID"
            loadInvoiceHeading="Invoice Amount: "
            loadInvoiceDetail="$1,600"
          />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ButtonHeader
          selectedButton={selectedScreen}
          handleLoadsPress={handleLoadsPress}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.innerBody}>{renderScreen()}</View>
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
  },
  body: {
    flex: 9,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // justifyContent: 'center',
    // flexDirection: 'column',
  },
  innerBody: {
    flex: 1,
    marginVertical: 15,
    gap: 20,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#FFFFFF',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
  },
  loadInvoice: {
    // flexDirection: 'column',
    // paddingHorizontal: 20,
    marginBottom: 10,
  },
});
