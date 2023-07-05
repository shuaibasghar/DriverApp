import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import StatusIndicator from './StatusIndicator';
const screenWidth = Dimensions.get('screen').width;

type HeaderProps = {
  name: string;
  company: string;
};
const Header: React.FC<HeaderProps> = ({name, company}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer1}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
        <View style={styles.indicatorContainer}>
          <StatusIndicator
            size={8}
            color="#09C729"
            text="Online"
            textStyle={styles.indicatorText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  indicatorText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 20,
  },
  innerContainer1: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth - 80,
  },
  textContainer: {flex: 1, marginRight: 8},
  indicatorContainer: {
    marginLeft: 8,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
  },
  company: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: '#FFFFFF',
  },
});
export default Header;
