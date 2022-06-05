import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Button from '../Components/Button';
import Checkbox from '../Components/Checkbox';
import Heading from '../Components/Heading';
import InputBox from '../Components/InputBox';
import Logo from '../Components/Logo';
import {TEXT_COLOR} from '../Constants/Colors';
import {Height} from '../Constants/Constants';
import Navigate from '../Navigation/Navigate';

export default class RegisterScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <ImageBackground
        source={require('../Assets/register_background.png')}
        style={{height: Height, flex: 1}}>
        <ScrollView style={{height: Height, paddingHorizontal: 20}}>
          <Logo light={false} />
          <Heading varinat="primary" placeholder="Welcome Back!" />
          <InputBox placeholder="User Name" variant="light" />
          <InputBox placeholder="Email" variant="light" />
          <InputBox
            placeholder="Password"
            variant="light"
            secureTextEntry={true}
          />
          <InputBox
            placeholder="Confirm Password"
            variant="light"
            secureTextEntry={true}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginVertical: 20,
            }}>
            <Checkbox placeholder="I agree with the processing of " />
            <TouchableOpacity
              // onPress={() => {
              //   NavigateTo('', navigation);
              // }}
              style={{marginLeft: 37}}>
              <Text style={styles.link}>personal data</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: TEXT_COLOR,
              }}>
              &
            </Text>
            <TouchableOpacity
            // onPress={() => {
            //   NavigateTo('', navigation);
            // }}
            >
              <Text style={styles.link}>privacy policy</Text>
            </TouchableOpacity>
          </View>
          <Button
            placeholder="Sign Up"
            veriant="primary"
            onPress={() => {
              NavigateTo('Dashboard', navigation);
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Text style={{fontSize: 16, color: TEXT_COLOR, marginRight: 5}}>
              Don't have an account?
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

const styles = StyleSheet.create({
  link: {
    marginHorizontal: 5,
    fontSize: 16,
    color: TEXT_COLOR,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textDecorationColor: TEXT_COLOR,
    textDecorationLine: 'underline',
  },
});
