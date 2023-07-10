import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LoadHeader from '../../header/LoadHeader';
import TickIcon from '../../../assets/icons/TickIcon';
import CrossIcon from '../../../assets/icons/CrossIcon';

export default function LoadDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LoadHeader title="Load Details" color="#FFFFFF" />
      </View>

      <View style={styles.body}>
        <View style={styles.innerBody}>
          <View style={styles.shipmentContainer}>
            <View style={styles.shipmentHeading}>
              <Text style={styles.shipmentHeadingText}>Shipment Number: </Text>
              <Text style={styles.shipmentNumberText}>1234-5678</Text>
            </View>
            <View>
              <CrossIcon />
            </View>
          </View>
          <View style={styles.name}>
            <Text style={styles.text1}>Miami, FL</Text>
            <View style={styles.circleContainer}>
              <View style={[styles.circle, styles.filledCircle]} />
              <View style={styles.line} />
              <View style={styles.circle} />
            </View>
            <Text style={styles.text1}>Atlanta, GA</Text>
          </View>
          <View style={styles.dimensionContainer}>
            <Text style={styles.dimensionHeading}>Dimension </Text>
            <Text style={styles.dimensionHeadingDetail}>
              7.1" H x 6.7" W x 3.3" D (8.3 oz)
            </Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={styles.boxHeading}>What's in the box?</Text>
            <View style={styles.boxHeadingDetailContainer}>
              <TickIcon />
              <Text style={styles.boxHeadingDetailText}>
                ABC Wireless Earphone
              </Text>
            </View>
            <View style={styles.boxHeadingDetailContainer}>
              <TickIcon />
              <Text style={styles.boxHeadingDetailText}>Charging Cable</Text>
            </View>
            <View style={styles.boxHeadingDetailContainer}>
              <TickIcon />
              <Text style={styles.boxHeadingDetailText}>Audio Cable</Text>
            </View>
          </View>

          <View style={styles.attachFileContainer}>
            <Text style={styles.attachedHeading}>Attached Files</Text>
            <View style={styles.uploadContainer}>
              <View style={styles.uploadContainerContent}>
                <View style={styles.uploadIcon}>
                  <Image source={require('../../../assets/images/arrow.png')} />
                  <Text style={styles.uploadIconText}>Upload</Text>
                </View>
                <Text style={styles.uploadContainerContentText}>
                  Rate Confirmation
                </Text>
              </View>
              <View style={styles.uploadContainerContent}>
                <View style={styles.uploadIcon}>
                  <Image source={require('../../../assets/images/arrow.png')} />
                  <Text style={styles.uploadIconText}>Upload</Text>
                </View>
                <Text style={styles.uploadContainerContentText}>
                  Bill of ABC
                </Text>
              </View>
              <View style={styles.uploadContainerContent}>
                <View style={styles.uploadIcon}>
                  <Image source={require('../../../assets/images/arrow.png')} />
                  <Text style={styles.uploadIconText}>Upload</Text>
                </View>
                <Text style={styles.uploadContainerContentText}>
                  Proof of Delivery
                </Text>
              </View>
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
    // height: 20,
  },
  innerBody: {
    marginTop: 20,
  },
  shipmentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  shipmentHeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shipmentHeadingText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
  },
  shipmentNumberText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#9AA8B7',
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
  dimensionContainer: {
    marginHorizontal: 20,
    // marginVertical: 15,
    paddingVertical: 10,
    // borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#9AA8B733',
  },
  dimensionHeading: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
  },
  dimensionHeadingDetail: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#9AA8B7',
  },
  boxContainer: {
    marginHorizontal: 20,
    // marginVertical: 15,
    paddingVertical: 10,
    // borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#9AA8B733',
  },
  boxHeading: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#333333',
  },
  boxHeadingDetailContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
    gap: 10,
  },
  boxHeadingDetailText: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#9AA8B7',
  },
  attachFileContainer: {
    marginHorizontal: 20,
    // marginVertical: 15,
    paddingVertical: 10,
    // borderWidth: 1,
    // borderBottomWidth: 2,
    // borderBottomColor: '#9AA8B733',
  },
  attachedHeading: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#3C4253',
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    // alignItems: 'center',
  },
  uploadContainerContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  uploadContainerContentText: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#3C4253',
  },
  uploadIcon: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#E3E3E3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    gap: 5,
  },
  uploadIconText: {
    fontSize: 9,
    fontFamily: 'Poppins-Medium',
    color: '#3C4253',
  },
});
