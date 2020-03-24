import React, {Component} from 'react';
import {View, Text, Animated, Easing, Image} from 'react-native';
import styles from './styles';
import CarPool from '../../assets/car_pool.png';

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
        duration: 500,
        easing: Easing.easeOutCubic,
      }),
      Animated.timing(this.state.commute, {
        toValue: 1,
        duration: 500,
        easing: Easing.easeOutCubic,
      }),
    ]).start(() => this.props.showLogin());
  }
  render() {
    return (
      <View style={styles.logoStyles}>
        <Animated.View>
          <Image source={CarPool} style={{height: 100}} resizeMode="contain" />
        </Animated.View>
        <View style={[styles.logoStyles, {flexDirection: 'row'}]}>
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
      </View>
    );
  }
}

export default Logo;
