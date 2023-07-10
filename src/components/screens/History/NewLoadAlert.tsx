import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LoadHeader from '../../header/LoadHeader';

export default function NewLoadAlert() {
  const handleAccept = () => {
    // Handle accept logic
  };

  const handleReject = () => {
    // Handle reject logic
  };
  const handleSeeMore = () => {
    // Handle reject logic
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Header name="Alexander  James" company="ABC Dispatcher LLC" /> */}
        <LoadHeader
          title="New Load Alert"
          color="#333333"
          tripleDotIconColor="#333333"
          backButtonColor="#333333"
        />
      </View>

      <View style={styles.body}>
        <View style={styles.innerBody}>
          <View>
            <Image source={require('../../../assets/images/map.png')} />
          </View>
          <View style={styles.name}>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>Miami</Text>
              <Text style={styles.text2}>Florida</Text>
            </View>
            <View style={styles.circleContainer}>
              <View style={[styles.circle, styles.filledCircle]} />
              <View style={styles.line} />
              <View style={styles.circle} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>Miami</Text>
              <Text style={styles.text2}>Georgia</Text>
            </View>
          </View>
          <Text style={styles.rateText}>$1600</Text>
          <View style={styles.distanceContainer}>
            <Text style={styles.distanceText}>664 miles</Text>
            <Text style={styles.distanceText}>$2.40/mi</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.rejectButton}
              onPress={handleReject}>
              <Text style={styles.rejectButtonText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={handleAccept}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.seeMoreButton}
            onPress={handleSeeMore}>
            <Text style={styles.seeMoreButtonText}>See More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 2,
    // backgroundColor: 'red',
    // height: 20,
  },
  body: {
    flex: 9,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // height: 20,
  },
  innerBody: {
    marginTop: 20,
  },
  name: {
    marginHorizontal: 20,
    // marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textContainer: {
    // flexDirection: 'column'
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
    fontFamily: 'Poppins-Medium',
    color: '#333333',
  },
  text2: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#9AA8B7',
  },
  rateText: {
    // marginVertical: 10,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    color: '#3C4253',
  },
  distanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  distanceText: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#9AA8B7',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    gap: 15,
  },
  acceptButton: {
    backgroundColor: '#4666FF',
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  acceptButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
  },
  rejectButton: {
    borderWidth: 1,
    borderColor: '#006400',
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 20,
    // marginRight: 10,
  },
  rejectButtonText: {
    fontSize: 14,
    color: '#333333',
    fontFamily: 'Poppins-Medium',
  },
  seeMoreButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  seeMoreButtonText: {
    fontSize: 14,
    color: '#9AA8B7',
    fontFamily: 'Poppins-Medium',
  },
});
