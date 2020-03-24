import React, {Component} from 'react';
import {View, Text, Image, Animated, Easing, Dimensions} from 'react-native';
import Logo from '../logo/Logo';
import CarPool from '../../assets/car_pool.png';
import LoginImg from '../../assets/loginPanel.jpg';

const DEVICE_HEIGHT = Dimensions.get('window').height;

class LoginPanel extends Component {
  state = {
    animFinished: false,
    inputForm: new Animated.Value(0),
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.state.animFinished) {
      Animated.timing(this.state.inputForm, {
        toValue: 1,
        duration: 1000,
      }).start(() => this.setState({animFinished: true}));
    }
  }

  render() {
    return (
      <View
        style={{
          top: 100,
          height: DEVICE_HEIGHT,
          backgroundColor: '#acc',
          borderRadius: 20,
        }}>
        <Animated.View
          style={{
            opacity: this.state.inputForm,
            top: this.state.inputForm.interpolate({
              inputRange: [0, 1],
              outputRange: [1000, 100],
            }),
          }}>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
        </Animated.View>
      </View>
    );
  }
}

export default LoginPanel;
