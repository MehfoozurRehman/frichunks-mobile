import React, {Component} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Height} from '../Constants/Constants';
import {WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import Navigate from '../Navigation/Navigate';

export default class HomeScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <ImageBackground
        source={require('../Assets/home_background.png')}
        style={{
          height: Height,
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 40,
          }}>
          <Text
            style={{
              color: '#242424',
              fontSize: 25,
              width: '80%',
              fontWeight: 'bold',
            }}>
            Get Started
          </Text>
          <Text style={{color: '#242424', width: '80%', marginVertical: 10}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt qui
            asperiores vel a dolore maxime facere nihil voluptatum natus ad.
          </Text>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 50,
              backgroundColor: '#242424',
              borderWidth: 1,
              borderColor: '#242424',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginVertical: 10,
              justifyContent: 'center',
            }}
            onPress={() => {
              navigation.navigate('Dashboard', {
                ordered: false,
              });
            }}>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                paddingHorizontal: 16,
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
