import React, {Component} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import styles from './styles';

class Logo extends Component {
  state = {
    qaAnim: new Animated.Value(0),
    commute: new Animated.Value(0),
  };

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  UNSAFE_componentWillMount() {
    Animated.sequence([
      Animated.timing(this.state.qaAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.easeOutCubic,
      }),
      Animated.timing(this.state.commute, {
        toValue: 1,
        duration: 1000,
        easing: Easing.easeOutCubic,
      }),
    ]).start();
  }
  render() {
    return (
      <View style={styles.logoStyles}>
        <Animated.View
          style={{
            opacity: this.state.qaAnim,
            top: this.state.qaAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
            }),
          }}>
          <Text style={styles.qaText}>QA</Text>
        </Animated.View>
        <Animated.View
          style={{
            opacity: this.state.qaAnim,
            bottom: this.state.qaAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
            }),
          }}>
          <Text style={styles.commuteText}> COMMUTE</Text>
        </Animated.View>
      </View>
    );
  }
}

export default Logo;
