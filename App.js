import React from 'react';
import LoginScreen from './src/screens/login/LoginScreen';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return <LoginScreen />;
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fff',
    // display: 'flex',
    // alignItems: 'center',
  },
});

export default App;
