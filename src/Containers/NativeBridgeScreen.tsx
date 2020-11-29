import * as React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

//App Modules
import {AppButton, WelcomeMessageView} from '../Components/index';
import {Colors, FontSize} from '../Theme/index';
import RNDeviceCheck from 'react-native-rn-device-check';

const NativeBridgeScreen: React.FC = () => {
  //
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

  return (
    <SafeAreaView style={styles.container}>
      <WelcomeMessageView />
      <View style={styles.ButtonViewContainer}>
        <AppButton
          text="Call Native Module"
          containerStyle={{...styles.button, backgroundColor: Colors.primary}}
          textStyle={styles.buttonText}
          onPress={showToast}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  ButtonViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  //Title text
  titleText: {
    color: Colors.primary,
    fontSize: FontSize.veryLarge,
    alignSelf: 'center',
    paddingVertical: 20,
  },
  //Buttons
  button: {
    marginHorizontal: 18,
    marginVertical: 8,
  },
  buttonText: {
    color: Colors.white,
  },
});

export default NativeBridgeScreen;
