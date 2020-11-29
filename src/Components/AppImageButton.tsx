import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

type AppButtonProps = {
  source: object;
  onPress?: () => void;
};

export default function AppButton({
  source = {},
  onPress = () => null,
}: AppButtonProps) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Image resizeMode={'contain'} style={styles.image} source={source} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
  },
});
