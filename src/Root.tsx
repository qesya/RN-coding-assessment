/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { CoreScreens } from './components/atoms/CoreScreens';
import { NativeModules } from 'react-native';

NativeModules.DevSettings.setIsDebuggingRemotely(true);

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <CoreScreens />
    </NavigationContainer>
  );
};

export default App;
