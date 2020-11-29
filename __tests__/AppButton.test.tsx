import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';
import {AppButton} from '../src/Components/index';
import RNDeviceCheck from 'react-native-rn-device-check';

test('check button press', () => {
  const onPressMock = jest.fn();
  const {getByTestId} = render(
    <AppButton text={'My custom title'} onPress={onPressMock} />,
  );
  const button = getByTestId('button');
  fireEvent.press(button);
  expect(onPressMock).toHaveBeenCalled();
});

test('check button title', () => {
  const onPressMock = jest.fn();
  const {getByTestId} = render(
    <AppButton text={'My custom title'} onPress={onPressMock} />,
  );

  const text = getByTestId('title');
  expect(text.props.children).toEqual('My custom title');
});

test('check native module', () => {
  expect(RNDeviceCheck).toBeDefined();
});
