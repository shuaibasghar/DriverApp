import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SendVoiceIcon from '../../../assets/icons/SendVoiceIcon';

const screenWidth = Dimensions.get('screen').width;

type Message = {
  id: string;
  sender: string;
  content: string;
  isVoice: boolean;
};

const MessageInput: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const handleSendTextMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage: Message = {
        id: String(messages.length + 1),
        sender: 'You',
        content: inputText,
        isVoice: false,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleSendVoiceMessage = () => {
    const newMessage: Message = {
      id: String(messages.length + 1),
      sender: 'You',
      content: 'Voice Message',
      isVoice: true,
    };
    setMessages([...messages, newMessage]);
  };

  const renderMessage = (message: Message, index: number) => {
    const containerStyle =
      message.sender === 'You'
        ? styles.sentMessageContainer
        : styles.receivedMessageContainer;
    const textStyle =
      message.sender === 'You'
        ? styles.sentMessageText
        : styles.receivedMessageText;

    const isLastMessage = index === messages.length - 1;
    const time = isLastMessage ? getCurrentTime() : '';

    return (
      <View key={message.id}>
        <View style={containerStyle}>
          {message.isVoice ? (
            <Text style={textStyle}>Voice Icon</Text>
          ) : (
            <Text style={textStyle}>{message.content}</Text>
          )}
        </View>
        {isLastMessage && <Text style={styles.time}>{time}</Text>}
      </View>
    );
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Convert to 12-hour format
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;

    const timeString = `${hours12.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')} ${meridiem}`;

    return timeString;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
        ref={ref => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() => {
          this.scrollView.scrollToEnd({animated: true});
        }}>
        {messages.map((message, index) => renderMessage(message, index))}
      </ScrollView>

      <View style={styles.inputAndRecord}>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={handleSendTextMessage}>
            <Image
              source={require('../../../assets/images/UploadIcon.png')}
              style={styles.sendIcon}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Your message"
            placeholderTextColor="#8E939D"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity onPress={handleSendTextMessage}>
            <Image
              source={require('../../../assets/images/Send.png')}
              style={styles.sendIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSendVoiceMessage}>
          <Image
            source={require('../../../assets/images/VoiceRecord.png')}
            style={styles.voiceIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#FFFFFF',
  },
  messagesContainer: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  sentMessageContainer: {
    alignSelf: 'flex-end',
    maxWidth: '70%',
    backgroundColor: '#4666FF',

    // borderRadius: 8,
    padding: 18,
    marginBottom: 8,
    borderBottomLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // elevation: 10,
  },
  receivedMessageContainer: {
    alignSelf: 'flex-start',
    maxWidth: '70%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  sentMessageText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
  },
  receivedMessageText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
  },
  time: {
    fontSize: 12,
    color: '#8E939D',
    // fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    alignSelf: 'flex-end',
    lineHeight: 14,
  },
  inputAndRecord: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 26,
    paddingTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    // marginTop: 8,
    borderWidth: 1,
    borderColor: '#E7E8E9',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#8E939D',
    marginLeft: 10,
  },
  sendIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  voiceIcon: {
    width: 50,
    height: 50,
    marginLeft: 8,
  },
});

export default MessageInput;
