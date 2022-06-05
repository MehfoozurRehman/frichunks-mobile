import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import Button from '../Components/Button';
import Checkbox from '../Components/Checkbox';
import Heading from '../Components/Heading';
import InputBox from '../Components/InputBox';
import Logo from '../Components/Logo';
import {TEXT_COLOR, THIRD} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Navigate from '../Navigation/Navigate';
export default class LoginScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <View style={{backgroundColor: THIRD, height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/login_background.png')}
          style={{height: Height, flex: 1}}>
          <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
            <Logo light={true} />
            <Heading varinat="white" placeholder="Welcome Back!" />
            <InputBox placeholder="Email" variant="primary" />
            <InputBox
              placeholder="Password"
              variant="primary"
              secureTextEntry={true}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Checkbox placeholder="Remember" />
              <TouchableOpacity
                onPress={() => {
                  NavigateTo('ForgotPassword', navigation);
                }}>
                <Text
                  style={{
                    marginTop: 1,
                    fontSize: 15,
                    color: TEXT_COLOR,
                    textDecorationColor: TEXT_COLOR,
                    textDecorationStyle: 'solid',
                    textDecorationLine: 'underline',
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <Button
              placeholder="Login"
              veriant="primary"
              onPress={() => {
                navigation.navigate('Dashboard', {
                  ordered: true,
                });
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
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  NavigateTo('Register', navigation);
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: TEXT_COLOR,
                    textDecorationStyle: 'solid',
                    textDecorationLine: 'underline',
                    textDecorationColor: TEXT_COLOR,
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom: 50}}>
              <Button
                placeholder="Continue as Guest"
                veriant="secondary"
                onPress={() => {
                  navigation.navigate('Dashboard', {
                    ordered: false,
                  });
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
