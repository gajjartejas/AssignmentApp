import * as React from 'react';
import {StyleSheet, View, Text, Image, SafeAreaView} from 'react-native';

//App Modules
import {AppButton, WelcomeMessageView} from '../Components/index';
import {Colors, FontSize} from '../Theme/index';

//Third Party
import Slider from 'react-native-slide-to-unlock';
import {StackScreenProps} from '@react-navigation/stack';

//Type for the react navigation
type RootStackParamList = {
  NativeBridge: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'NativeBridge'>;

const VariousButtonsScreen = ({navigation}: Props) => {
  //Show toast from native modules
  const navigateToNextScreen = () => {
    navigation.navigate('NativeBridge');
  };

  return (
    <SafeAreaView style={styles.container}>
      <WelcomeMessageView />
      <View style={styles.buttonsContainer}>
        <Text style={styles.descriptionText}>4 variations of a button</Text>

        <AppButton
          text="Press Me"
          containerStyle={{
            ...styles.button,
            backgroundColor: Colors.transparent,
          }}
          onPress={navigateToNextScreen}
        />

        <AppButton
          text="Press Me"
          containerStyle={{
            ...styles.button,
            backgroundColor: Colors.buttonGray,
          }}
          onPress={navigateToNextScreen}
        />

        <AppButton
          text="Press Me"
          containerStyle={{...styles.button, backgroundColor: Colors.primary}}
          textStyle={styles.buttonText}
          onPress={navigateToNextScreen}
        />

        <Slider
          onEndReached={navigateToNextScreen}
          containerStyle={styles.sliderContainerStyle}
          sliderElement={
            <View style={styles.sliderElement}>
              <Image
                style={styles.sliderElementImage}
                source={require('../Assets/Images/dimond.png')}
              />
            </View>
          }>
          <Text style={styles.sliderText}>{'Slide me to continue'}</Text>
        </Slider>
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
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 40,
  },

  //Title text
  titleText: {
    color: Colors.primary,
    fontSize: FontSize.veryLarge,
    alignSelf: 'center',
    paddingVertical: 20,
  },

  //Description text
  descriptionText: {
    color: Colors.yellow,
    fontSize: FontSize.large,
    alignSelf: 'center',
  },
  //Buttons
  button: {
    marginHorizontal: 18,
    marginVertical: 8,
  },
  buttonText: {
    color: Colors.white,
  },
  //Slider Button
  sliderContainerStyle: {
    marginHorizontal: 18,
    marginVertical: 8,
    backgroundColor: Colors.background,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
    borderColor: Colors.white,
    borderWidth: 0.5,
  },
  sliderElement: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    height: 54,
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderElementImage: {
    width: 24,
    height: 24,
  },
  sliderText: {
    color: Colors.primary,
    fontSize: FontSize.large,
    fontWeight: '500',
  },
});

export default VariousButtonsScreen;
