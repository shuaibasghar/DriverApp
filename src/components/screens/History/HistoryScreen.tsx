import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import ButtonHeader from '../../header/ButtonHeader';
import LoadsInvoiceScreen from './LoadsInvoiceScreen';
import LoadDetails from './LoadDetails';
import {useNavigation} from '@react-navigation/native';
export default function HistoryScreen() {
  const [selectedScreen, setSelectedScreen] = useState<string>('Loads');

  const handleLoadsPress = (screenId: string) => {
    setSelectedScreen(screenId);
  };

  const handlePress = () => {
    // navigation.navigate('LoadDetails');
    return <LoadDetails />;
  };
  const renderScreen = () => {
    if (selectedScreen === 'Loads') {
      return (
        <View style={styles.loadInvoice}>
          <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
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
        </View>
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
  },
  innerBody: {
    flex: 1,
    marginVertical: 15,
    gap: 20,
  },
  loadInvoice: {
    marginBottom: 10,
  },
});
