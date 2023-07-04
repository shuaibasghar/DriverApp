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
import AppoloIcons from '../../../assets/icons/AppoloIcons';
const screenWidth = Dimensions.get('screen').width;
const SignUpVerficationScreen: React.FC = () => {
  const [VerificationCode, setVerificationCode] = useState<string>('');
  const handleVerificationCode = (text: string) => {
    setVerificationCode(text);
  };

  const handleNextPress = () => {
    console.log('verification:', VerificationCode);
  };
  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <View style={styles.innerBody}>
          <View style={styles.icon}>
            <AppoloIcons />
          </View>
          <Text style={styles.innerBodyFontsOne}>Sign Up</Text>
          <Text style={styles.innerBodyFontsTwo}>
            Please enter verification code sent to
          </Text>
          <Text style={styles.innerBodyFontsThree}>sample@sample.com</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Verification code"
              value={VerificationCode}
              // keyboardType="email-address"
              onChangeText={handleVerificationCode}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
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
};

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
  innerBodyFontsTwo: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
  },
  innerBodyFontsThree: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    fontWeight: '400',
    color: '#4666FF',
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
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
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

export default SignUpVerficationScreen;
