import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

interface LoadsInvoiceScreenProps {
  from: string;
  to: string;
  dateCompanyHeading: string;
  dateCompanyDetail: string;
  shipmentInvoiceHeading: string;
  shipmentInvoiceDetail: string;
  statusHeading: string;
  statusHeadingDetail: string;
  loadInvoiceHeading: string;
  loadInvoiceDetail: string;
}

const LoadsInvoiceScreen: React.FC<LoadsInvoiceScreenProps> = ({
  from,
  to,
  dateCompanyHeading,
  dateCompanyDetail,
  shipmentInvoiceHeading,
  shipmentInvoiceDetail,
  statusHeading,
  statusHeadingDetail,
  loadInvoiceHeading,
  loadInvoiceDetail,
}) => {
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.innerBox}>
          <View style={styles.name}>
            <Text style={styles.text1}>{from}</Text>
            <View style={styles.circleContainer}>
              <View style={[styles.circle, styles.filledCircle]} />
              <View style={styles.line} />
              <View style={styles.circle} />
            </View>
            <Text style={styles.text1}>{to}</Text>
          </View>
          <View style={styles.shipmentContainer}>
            <View style={styles.shipmentHeading}>
              <Text style={styles.shipmentHeadingText}>
                {dateCompanyHeading}
              </Text>
              <Text style={styles.shipmentHeadingText}>
                {shipmentInvoiceHeading}
              </Text>
            </View>
            <View style={styles.shipmentDetail}>
              <Text style={styles.shipmentDetailText}>{dateCompanyDetail}</Text>
              <Text style={styles.shipmentDetailText}>
                {shipmentInvoiceDetail}
              </Text>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <View style={styles.statusHeading}>
              <Text style={styles.statusHeadingText}>{statusHeading} </Text>
              <Text style={styles.statusHeadingDetailText}>
                {statusHeadingDetail}
              </Text>
            </View>
            <View style={styles.statusLoadHeading}>
              <Text style={styles.statusLoadHeadingText}>
                {loadInvoiceHeading}{' '}
              </Text>
              <Text style={styles.statusLoadHeadingDetailText}>
                {loadInvoiceDetail}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    height: 155,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#9AA8B733',
    marginBottom: 10,
    elevation: 4,
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 8,
  },
  circle: {
    width: 13,
    height: 13,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4666FF',
  },
  filledCircle: {
    backgroundColor: '#4666FF',
  },
  line: {
    backgroundColor: '#4666FF',
    width: 50,
    height: 2,
  },
  text1: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
  },
  innerBox: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  name: {
    marginHorizontal: 20,
    // marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    // borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#9AA8B733',
  },
  shipmentContainer: {
    marginHorizontal: 20,
    flexDirection: 'column',
    paddingVertical: 10,
  },
  shipmentHeading: {flexDirection: 'row', justifyContent: 'space-between'},

  shipmentDetail: {flexDirection: 'row', justifyContent: 'space-between'},
  shipmentHeadingText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
  },
  shipmentDetailText: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#9AA8B7',
  },
  statusContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingVertical: 4,
  },
  statusHeading: {
    flexDirection: 'row',
  },
  statusHeadingText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
  },
  statusHeadingDetailText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#09C729',
  },
  statusLoadHeading: {flexDirection: 'row', alignItems: 'center'},
  statusLoadHeadingText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
  },
  statusLoadHeadingDetailText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#9AA8B7',
  },
});

export default LoadsInvoiceScreen;
