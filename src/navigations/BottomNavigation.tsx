import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ChatIcon from '../assets/icons/ChatIcon';
import LabelBottomNavigation from './LabelBottomNavigation';
import AppoloIcons from '../assets/icons/AppoloIcons';

export default function BottomNavigation() {
  return (
    <View style={styles.navigationBar}>
      <View style={styles.navigationBarPair}>
        <TouchableOpacity style={styles.tab}>
          <ChatIcon width={45} height={28} />
          <LabelBottomNavigation text={'Chat'} color={'#4666FF'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <ChatIcon width={45} height={28} />

          <LabelBottomNavigation text={'History'} color={'#4666FF'} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.tab}>
        <AppoloIcons width={78} height={70} />
      </TouchableOpacity>

      <View style={styles.navigationBarPair}>
        <TouchableOpacity style={styles.tab}>
          <ChatIcon width={45} height={28} />
          <LabelBottomNavigation text={'Financial'} color={'#4666FF'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <ChatIcon width={45} height={28} />

          <LabelBottomNavigation
            text={'Profile'}
            color={'#C0C5D1'}
            fontWeight={'400'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  navigationBar: {
    // padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'blue',
    width: '100%',
    height: 100,
    position: 'absolute', // Position the navigation bar at the bottom
    bottom: 0, // Set the distance from the bottom of the screen
  },
  navigationBarPair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  tab: {
    // width: '33%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
