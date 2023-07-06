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
  FlatList,
} from 'react-native';
import {Svg, Rect, Defs, ClipPath, Polygon} from 'react-native-svg';

import SendVoiceIcon from '../../../assets/icons/SendVoiceIcon';
import PlayIcon from '../../../assets/icons/PlayIcon';
import UploadIcon from '../../../assets/icons/UploadIcon';

const screenWidth = Dimensions.get('screen').width;

type Message = {
  id: string;
  sender: string;
  content: string;
  isVoice: boolean;
  time: string;
};

const MessageInput: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [showSendIcon, setShowSendIcon] = useState<boolean>(false);

  const handleSendTextMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage: Message = {
        id: String(messages.length + 1),
        sender: 'You',
        content: inputText,
        isVoice: false,
        time: getCurrentTime(),
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputText('');
      setIsRecording(false);
      setShowSendIcon(false);
    }
  };

  const handleSendVoiceMessage = () => {
    const newMessage: Message = {
      id: String(messages.length + 1),
      sender: 'You',
      content: 'Voice Message',
      isVoice: true,
      time: getCurrentTime(),
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  const renderMessage = ({item}: {item: Message}) => {
    const containerStyle =
      item.sender === 'You'
        ? styles.sentMessageContainer
        : styles.receivedMessageContainer;
    const textStyle =
      item.sender === 'You'
        ? styles.sentMessageText
        : styles.receivedMessageText;

    return (
      <View>
        <View style={containerStyle}>
          {item.isVoice ? (
            <PlayIcon fillColor="white" />
          ) : (
            <Text style={textStyle}>{item.content}</Text>
          )}
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    );
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Convert to 12-hour format
    const maridium = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;

    const timeString = `${hours12.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')} ${maridium}`;

    return timeString;
  };

  const handleInputChange = (text: string) => {
    setInputText(text);
    setShowSendIcon(text.trim().length > 0);
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.messagesContainer}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ref={ref => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() => {
          this.scrollView.scrollToEnd({animated: true});
        }}
      />

      <View style={styles.inputAndRecord}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
          // onPress={
          //   isRecording ? handleSendVoiceMessage : handleSendTextMessage
          // }
          >
            {isRecording ? (
              <SendVoiceIcon width={50} height={50} />
            ) : (
              <UploadIcon />
            )}
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Your message"
            placeholderTextColor="#8E939D"
            value={inputText}
            onChangeText={handleInputChange}
          />
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/send.png')}
              style={styles.sendIcon}
            />
          </TouchableOpacity>
        </View>
        {showSendIcon ? (
          <TouchableOpacity onPress={handleSendTextMessage}>
            <Text style={styles.sendIcon}>Send</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={
              // () => setIsRecording(!isRecording)
              handleSendVoiceMessage
            }
            style={styles.voiceIcon}>
            <SendVoiceIcon width={50} height={50} />
            {/* {isRecording ? (
            <Text>Stop Recording</Text>
          ) : (
            <Text>Start Recording</Text>
          )} */}
          </TouchableOpacity>
        )}
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
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
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

// import React, {useState} from 'react';
// import {
//   View,
//   Image,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import {Svg, Rect, Defs, ClipPath, Polygon} from 'react-native-svg';

// import SendVoiceIcon from '../../../assets/icons/SendVoiceIcon';
// import PlayIcon from '../../../assets/icons/PlayIcon';
// import UploadIcon from '../../../assets/icons/UploadIcon';

// const screenWidth = Dimensions.get('screen').width;

// type Message = {
//   id: string;
//   sender: string;
//   content: string;
//   isVoice: boolean;
// };

// const MessageInput: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputText, setInputText] = useState<string>('');

//   const handleSendTextMessage = () => {
//     if (inputText.trim() !== '') {
//       const newMessage: Message = {
//         id: String(messages.length + 1),
//         sender: 'You',
//         content: inputText,
//         isVoice: false,
//       };
//       setMessages([...messages, newMessage]);
//       setInputText('');
//     }
//   };

//   const handleSendVoiceMessage = () => {
//     const newMessage: Message = {
//       id: String(messages.length + 1),
//       sender: 'You',
//       content: 'Voice Message',
//       isVoice: true,
//     };
//     setMessages([...messages, newMessage]);
//   };

//   const renderMessage = (message: Message, index: number) => {
//     const containerStyle =
//       message.sender === 'You'
//         ? styles.sentMessageContainer
//         : styles.receivedMessageContainer;
//     const textStyle =
//       message.sender === 'You'
//         ? styles.sentMessageText
//         : styles.receivedMessageText;

//     const isLastMessage = index === messages.length - 1;
//     const time = isLastMessage ? getCurrentTime() : '';

//     return (
//       <View key={message.id}>
//         <View style={containerStyle}>
//           {message.isVoice ? (
//             <PlayIcon fillColor="white" />
//           ) : (
//             <Text style={textStyle}>{message.content}</Text>
//           )}
//         </View>
//         {isLastMessage && <Text style={styles.time}>{time}</Text>}
//       </View>
//     );
//   };

//   const getCurrentTime = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();

//     // Convert to 12-hour format
//     const maridium = hours >= 12 ? 'PM' : 'AM';
//     const hours12 = hours % 12 || 12;

//     const timeString = `${hours12.toString().padStart(2, '0')}:${minutes
//       .toString()
//       .padStart(2, '0')} ${maridium}`;

//     return timeString;
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.messagesContainer}
//         showsVerticalScrollIndicator={false}
//         ref={ref => {
//           this.scrollView = ref;
//         }}
//         onContentSizeChange={() => {
//           this.scrollView.scrollToEnd({animated: true});
//         }}>
//         {messages.map((message, index) => renderMessage(message, index))}
//       </ScrollView>

//       <View style={styles.inputAndRecord}>
//         <View style={styles.inputContainer}>
//           <TouchableOpacity onPress={handleSendTextMessage}>
//             <UploadIcon />
//           </TouchableOpacity>
//           <TextInput
//             style={styles.input}
//             placeholder="Your message"
//             placeholderTextColor="#8E939D"
//             value={inputText}
//             onChangeText={setInputText}
//           />
//           <TouchableOpacity onPress={handleSendTextMessage}>
//             <Image
//               source={require('../../../assets/images/send.png')}
//               style={styles.sendIcon}
//             />
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity
//           onPress={handleSendVoiceMessage}
//           style={styles.voiceIcon}>
//           <SendVoiceIcon width={50} height={50} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 16,
//     paddingTop: 16,
//     backgroundColor: '#FFFFFF',
//   },

//   messagesContainer: {
//     flexGrow: 1,
//     paddingBottom: 16,
//   },
//   sentMessageKnock: {
//     position: 'absolute',
//     top: 0,
//     left: -5,
//     width: 10,
//     height: 10,
//     backgroundColor: '#4666FF',
//     // transform: [{rotate: '45deg'}],
//     // zIndex: 1,
//   },

//   sentMessageContainer: {
//     alignSelf: 'flex-end',
//     maxWidth: '70%',
//     backgroundColor: '#4666FF',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 8,
//   },
//   receivedMessageContainer: {
//     alignSelf: 'flex-start',
//     maxWidth: '70%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 8,
//   },
//   sentMessageText: {
//     fontSize: 16,
//     fontFamily: 'Poppins-Regular',
//     color: '#FFFFFF',
//   },
//   receivedMessageText: {
//     fontSize: 16,
//     fontFamily: 'Poppins-Regular',
//     color: '#FFFFFF',
//   },
//   time: {
//     fontSize: 12,
//     color: '#8E939D',
//     // fontFamily: 'Poppins-Regular',
//     fontWeight: '400',
//     alignSelf: 'flex-end',
//     lineHeight: 14,
//   },
//   inputAndRecord: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 26,
//     paddingTop: 5,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     // marginTop: 8,
//     borderWidth: 1,
//     borderColor: '#E7E8E9',
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: '#8E939D',
//     marginLeft: 10,
//   },
//   sendIcon: {
//     width: 20,
//     height: 20,
//     marginLeft: 8,
//   },
//   voiceIcon: {
//     width: 50,
//     height: 50,
//     marginLeft: 8,
//   },
// });

// export default MessageInput;
