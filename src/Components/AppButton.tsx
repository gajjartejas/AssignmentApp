import * as React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Colors, FontSize} from '../Theme/index';

type AppButtonProps = {
  text: string | number;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function AppButton({
  text,
  onPress = () => null,
  containerStyle = {},
  disabled = false,
  textStyle = {},
}: AppButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, containerStyle]}
      onPress={onPress}
      disabled={disabled}
      testID={'button'}>
      <Text testID={'title'} style={[styles.text, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 54,
    backgroundColor: Colors.transparent,
  },
  text: {
    fontFamily: 'System',
    fontSize: FontSize.large,
    color: Colors.primary,
    fontWeight: '500',
  },
});
