import React, {Component} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import Logo from '../../components/logo/Logo';
import LoginPanel from '../../components/login/LoginPanel';

const DEVICE_HEIGHT = Dimensions.get('window').height;

class LoginScreen extends Component {
  state = {
    isLogoAnimated: false,
  };

  showLogin = () => {
    this.setState({isLogoAnimated: true});
  };

  render() {
    return (
      <View
        style={{
          height: DEVICE_HEIGHT,
          backgroundColor: '#041',
          paddingBottom: 20,
        }}>
        <Logo showLogin={this.showLogin} />
        <LoginPanel show={this.state.isLogoAnimated} />
      </View>
    );
  }
}

export default LoginScreen;
