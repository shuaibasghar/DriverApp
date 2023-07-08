import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import AppoloIcons from '../../../assets/icons/AppoloIcons';

const screenWidth = Dimensions.get('screen').width;
// console.log(screenWidth);
function Login() {
  // const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleLoginPress = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Tabs');
  };
  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <View style={styles.innerBody}>
          <View style={styles.icon}>
            <AppoloIcons />
          </View>
          <Text style={styles.innerBodyFontsOne}>Login</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              // keyboardType="email-address"
              onChangeText={handleEmailChange}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              // keyboardType="email-address"
              onChangeText={handlePasswordChange}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.innerBodyTextContainer}>
            <Text style={styles.innerBodyTextContainerFontOne}>
              Dont have an account ?
            </Text>
            <TouchableOpacity>
              <Text style={styles.innerBodyTextContainerFontTwo}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          2023 Apollo-E, All Rights Reserved
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  navigation: {
    flex: 2,
    // backgroundColor: 'blue',
    // height: 200,
  },
  body: {
    flex: 9,
    // width: screenWidth - 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // padding: 20,
  },

  innerBody: {
    flex: 1,
    width: screenWidth - 50,
    alignItems: 'center',
    // backgroundColor: 'cyan',
  },

  icon: {
    margin: 40,
  },
  innerBodyFontsOne: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#333333',
  },
  inputContainer: {
    width: '100%',
    marginTop: 25,
    justifyContent: 'center',
  },
  input: {
    // width: '100%',
    fontSize: 18,
    height: 55,
    borderWidth: 1,
    borderColor: '#F2F5FE',
    // borderColor: '#ccc',
    borderRadius: 10,
    fontFamily: 'Poppins-Medium',
    color: '#8E939D',
    textAlignVertical: 'center',
    padding: 10,
    marginBottom: 25,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4666FF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  innerBodyTextContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    marginTop: 25,
  },
  innerBodyTextContainerFontOne: {
    color: '#333333',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 12,
  },
  innerBodyTextContainerFontTwo: {
    color: '#4666FF',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 12,
  },
  footer: {
    flex: 1,
    // backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#8E939D',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 10,
  },
});
export default Login;
