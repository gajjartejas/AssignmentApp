/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, ActivityIndicator, StyleSheet, View} from 'react-native';

//Navigator
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './Navigators/MainNavigator';

//Redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from './Store';
const {persistor, store} = configureStore();

//App Modules
import {Colors} from './Theme/index';

declare const global: {HermesInternal: null | {}};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <View style={styles.container}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <MainNavigator />
        </NavigationContainer>
      </View>
    </PersistGate>
  </Provider>
);

const styles = StyleSheet.create({
  //Container
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default App;
