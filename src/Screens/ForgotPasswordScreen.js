import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import Button from '../Components/Button';
import Heading from '../Components/Heading';
import InputBox from '../Components/InputBox';
import Logo from '../Components/Logo';
import {TEXT_COLOR} from '../Constants/Colors';
import {Height} from '../Constants/Constants';
import Navigate from '../Navigation/Navigate';

export default class ForgotPasswordScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <ImageBackground
        source={require('../Assets/register_background.png')}
        style={{height: Height, flex: 1}}>
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <Logo light={false} />
          <Heading varinat="primary" placeholder="Forgot Password" />
          <InputBox placeholder="Email" variant="light" />
          <View style={{marginBottom: 50}} />
          <Button
            placeholder="Forgot Password"
            veriant="primary"
            onPress={() => {
              NavigateTo('Login', navigation);
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 50,
            }}>
            <Text style={{fontSize: 16, color: TEXT_COLOR, marginRight: 5}}>
              Back to
            </Text>
            <TouchableOpacity
              onPress={() => {
                NavigateTo('Login', navigation);
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: TEXT_COLOR,
                  textDecorationStyle: 'solid',
                  textDecorationLine: 'underline',
                  textDecorationColor: TEXT_COLOR,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
