import React from 'react';
import LoginScreen from './src/screens/login/LoginScreen';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <LoginScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default App;
