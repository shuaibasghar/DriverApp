import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios, {AxiosResponse} from 'axios';
import {useMutation} from 'react-query';
import {useNavigation} from '@react-navigation/native';
const screenWidth = Dimensions.get('screen').width;

interface SignupResponse {
  error: string[];
  message: string;
  data: {
    role: string;
    email: string;
  };
  success: boolean;
  onSubmit: () => void;
}

const CreateAccount: React.FC = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handlePasswordConfirmChange = (text: string) => {
    setPasswordConfirm(text);
  };

  const submitFormData = async (formData: {
    email: string;
    password: string;
    passwordconfirm: string;
  }): Promise<SignupResponse> => {
    try {
      const response: AxiosResponse<SignupResponse> = await axios.post(
        'http://10.0.2.2:5057/api/user/signup',
        formData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  const {mutate} = useMutation<SignupResponse, Error, typeof submitFormData>(
    submitFormData,
    {
      onSuccess: data => {
        if (data.success) {
          console.log(data.message);
          onSubmit();
          resetForm();
          navigation.navigate('SignUpVerficationScreen');
        } else {
          console.log(data.message);
          console.log('Errors:', data.error);
        }
      },
      onError: error => {
        console.error(error.message);
      },
    },
  );

  const handleSignUpPress = async () => {
    const formData = {email, password, passwordconfirm};
    await mutate(formData);
  };
  const resetForm = () => {
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />

      <View style={styles.body}>
        <View style={styles.innerBody}>
          <Text style={styles.innerBodyFontsOne}>Create Your Account</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={handleEmailChange}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={passwordconfirm}
              onChangeText={handlePasswordConfirmChange}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
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
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBody: {
    flex: 1,
    width: screenWidth - 50,
    alignItems: 'center',
  },
  innerBodyFontsOne: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#333333',
    letterSpacing: 2,
  },
  inputContainer: {
    width: '100%',
    marginTop: 25,
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    height: 55,
    borderWidth: 1,
    borderColor: '#F2F5FE',
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
  footer: {
    flex: 1,
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

export default CreateAccount;
