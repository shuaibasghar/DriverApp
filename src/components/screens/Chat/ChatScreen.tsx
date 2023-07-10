import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../header/Header';
import MessageInput from './MessageInput';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          name="Alexander  James"
          company="ABC Dispatcher LLC"
          indicatorColor="#09C729"
          indicatorText="Online"
        />
      </View>

      <View style={styles.body}>
        <MessageInput />
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

  chatContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 16,
  },
});
