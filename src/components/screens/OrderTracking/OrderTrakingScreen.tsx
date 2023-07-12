import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function OrderTrackingScreen() {
  const handleAccept = () => {};
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
          <Text style={styles.orderTracking}>Order Tracking</Text>
          <Text style={styles.orderTrackingNumber}>Order Number: 457 034</Text>
          <View style={styles.checkListContainer}>
            <Image source={require('../../../assets/images/tickCircle.png')} />
            <View style={styles.verticalLine} />
            <Text style={styles.orderAcceptedText}>Order accepted</Text>
          </View>
          <View style={styles.checkListContainerTwo}>
            <Image source={require('../../../assets/images/tickCircle.png')} />
            <View style={styles.verticalLine} />
            <Text style={styles.orderPreparingText}>Preparing order</Text>
          </View>
          <View style={styles.readyContainer}>
            <Image
              source={require('../../../assets/images/tickCircleBlue.png')}
            />
            <View style={styles.verticalLine} />
            <View>
              <Text style={styles.orderReadyText}>Ready To Collect</Text>
              <Text style={styles.readyDescription}>
                Your order was collected and it's
              </Text>
              <Text style={styles.readyDescription}>
                Your order was collected and it's
              </Text>
              <Text style={styles.uploadHeadingText}>
                Upload proof of delivery
              </Text>
              <View style={styles.uploadIcon}>
                <Image source={require('../../../assets/images/arrow.png')} />
                <Text style={styles.uploadIconText}>Upload</Text>
              </View>
            </View>
          </View>
          <View style={styles.checkListContainer}>
            <View style={styles.verticalLine} />
            <Image
              source={require('../../../assets/images/orderCollected.png')}
            />
            <Text style={styles.orderPreparingText}>Order Collected</Text>
          </View>
          <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
            <Text style={styles.acceptButtonText}>Accept</Text>
          </TouchableOpacity>
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
    marginVertical: 40,
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 1,
  },
  timeText: {
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
  verticalLine: {
    height: '100%',
    width: 2,
    backgroundColor: '#F4F6FF',
    position: 'absolute',
    left: 20,
    zIndex: -1,
  },
  orderTracking: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3C4253',
    fontFamily: 'Poppins-SemiBold',
  },
  orderTrackingNumber: {
    textAlign: 'center',

    fontSize: 12,
    color: '#C0C5D1',
    fontFamily: 'Poppins-Medium',
  },
  checkListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  checkListContainerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 20,
  },
  orderAcceptedText: {
    fontSize: 12,
    color: '#C0C5D1',
    fontFamily: 'Poppins-Medium',
  },
  orderPreparingText: {
    fontSize: 12,
    color: '#C0C5D1',
    fontFamily: 'Poppins-Medium',
  },
  readyContainer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
  },
  orderReadyText: {
    fontSize: 18,
    color: '#4666FF',
    fontFamily: 'Poppins-SemiBold',
  },
  readyDescription: {
    fontSize: 12,
    color: '#C0C5D1',
    fontFamily: 'Poppins-Medium',
  },
  uploadHeadingText: {
    fontSize: 16,
    color: '#3C4253',
    fontFamily: 'Poppins-SemiBold',
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
  acceptButton: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#4666FF',
    borderRadius: 8,
    marginHorizontal: 70,
    paddingVertical: 18,
  },
  acceptButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
  },
});
