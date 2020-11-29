import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, TextInput, SafeAreaView} from 'react-native';

//App Modules
import {AppButton, WelcomeMessageView} from '../Components/index';
import {Colors, FontSize} from '../Theme/index';
import RNDeviceCheck from 'react-native-rn-device-check';

//Redux
import {useDispatch} from 'react-redux';
import * as loginActions from '../Store/actions/loginActions';

const LoginScreen: React.FC = () => {
  //Show toast from native modules
  const showToast = () => {
    const style = {fontSize: 50};
    RNDeviceCheck.showToast(
      'App is running on simulator.',
      'App is running on device.',
      2000,
      style,
    );
  };

  const dispatch = useDispatch();

  //States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () =>
    //User Name and Password
    dispatch(loginActions.requestLogin(username, 'demo$$123#'));

  useEffect(() => {
    showToast();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <WelcomeMessageView />

        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          defaultValue={username}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          defaultValue={password}
          secureTextEntry={true}
        />

        <AppButton
          text="Login"
          containerStyle={{...styles.button, backgroundColor: Colors.primary}}
          textStyle={styles.buttonText}
          onPress={onLogin}
          disabled={username.length < 1 || password.length < 1}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  //TextInput
  textInput: {
    height: 40,
    backgroundColor: Colors.white,
    marginHorizontal: 18,
    marginVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  //Title text
  descriptionText: {
    color: Colors.primary,
    fontSize: FontSize.veryLarge,
    alignSelf: 'center',
  },
  //Buttons
  button: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  buttonText: {
    color: Colors.white,
  },
});

export default LoginScreen;
