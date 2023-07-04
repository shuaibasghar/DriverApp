import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppoloIcons from '../../../assets/icons/AppoloIcons';
const screenWidth = Dimensions.get('screen').width;
// console.log(screenWidth);
interface FormState {
  businessAddress: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
}
function RegisterBusinessTwo() {
  const [formState, setFormState] = useState<FormState>({
    businessAddress: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleInputChange = (name: keyof FormState, value: string) => {
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleContinue = () => {
    // Perform continue logic with formState values
    console.log('Form State:', formState);

    // Reset the form state to initial values
    setFormState({
      businessAddress: '',
      apartment: '',
      city: '',
      state: '',
      zipCode: '',
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      {/* <View style={styles.body}> */}
      <ScrollView
        contentContainerStyle={styles.body}
        keyboardShouldPersistTaps="handled">
        <View style={styles.innerBody}>
          <View style={styles.icon}>
            <AppoloIcons />
          </View>
          <Text style={styles.innerBodyFontsOne}>Register Your Business</Text>
          <Text style={styles.innerBodyFontsTwo}>
            Please provide your business info
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Business Address"
              value={formState.businessAddress}
              // keyboardType="email-address"
              onChangeText={text => handleInputChange('businessAddress', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Appartment, suite etc. (optional)"
              value={formState.apartment}
              //   keyboardType="email-address"
              onChangeText={text => handleInputChange('apartment', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="City"
              value={formState.city}
              //   keyboardType="email-address"
              onChangeText={text => handleInputChange('city', text)}
            />
            <View style={styles.inputContainerTwo}>
              <TextInput
                style={styles.stateInput}
                placeholder="state"
                value={formState.state}
                // keyboardType="email-address"
                onChangeText={text => handleInputChange('state', text)}
              />
              <TextInput
                style={styles.zipCodeInput}
                placeholder="Zip Code"
                value={formState.zipCode}
                // keyboardType="email-address"
                onChangeText={text => handleInputChange('zipCode', text)}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <View style={styles.innerBodyTextContainer}>
            <Text style={styles.innerBodyTextContainerFontOne}>Go back</Text>
          </View>
        </View>
      </ScrollView>
      {/* </View> */}

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
    // flex: 9,
    // width: screenWidth - 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // padding: 20,
  },

  innerBody: {
    // flex: 1,
    width: screenWidth - 50,
    alignItems: 'center',
    // backgroundColor: 'cyan',
  },

  icon: {
    margin: 20,
  },
  innerBodyFontsOne: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#333333',
    letterSpacing: 2,
  },
  innerBodyFontsTwo: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
  },
  inputContainer: {
    width: '100%',
    marginTop: 25,
    justifyContent: 'center',
  },
  inputContainerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  stateInput: {
    width: '46%',
    fontSize: 16,
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
  zipCodeInput: {
    marginLeft: 5,
    width: '46%',

    fontSize: 16,
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
  input: {
    // width: '100%',
    fontSize: 16,
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
export default RegisterBusinessTwo;
