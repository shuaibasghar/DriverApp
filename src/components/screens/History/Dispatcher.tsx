import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
interface DispatcherProps {
  companyName?: string;
  location?: string;
  eid?: string;
  imagePath?: string;
}

const Dispatcher: React.FC<DispatcherProps> = ({
  companyName,
  location,
  eid,
  imagePath,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.text1}>{companyName}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.locationHeadingText}>Location</Text>
          <Text style={styles.locationDetailText}>{location}</Text>
        </View>
      </View>
      <View style={styles.messageContainer}>
        <View style={styles.messageContainerInside}>
          <Text style={styles.eidText}>E-ID:</Text>
          <Text style={styles.eidNumText}>{eid}</Text>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.messageText}>Message</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.picContainer}>
          {/* <Image source={{uri: imagePath}} /> */}
          <Image source={require('../../../assets/images/truck.png')} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    height: 155,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 20,
    borderColor: '#9AA8B733',
    // marginBottom: 10,
    elevation: 4,
    padding: 5,
  },
  name: {
    marginHorizontal: 20,

    // marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    // borderWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#9AA8B733',
  },
  locationContainer: {},
  locationHeadingText: {
    alignSelf: 'flex-end',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
  },
  locationDetailText: {
    alignSelf: 'flex-end',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#9AA8B7',
  },
  text1: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
  },

  messageContainer: {
    marginHorizontal: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 10,
    gap: 15,
  },
  eidText: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
  },
  eidNumText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#9AA8B7',
  },
  messageButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#4666FF',
    borderRadius: 11,
  },
  messageText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
  },
  messageContainerInside: {
    justifyContent: 'center',
    gap: 5,
    marginTop: 5,
  },
  picContainer: {
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#9AA8B733',
  },
});
export default Dispatcher;
