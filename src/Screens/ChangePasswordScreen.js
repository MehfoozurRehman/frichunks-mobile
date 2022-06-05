import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import Button from '../Components/Button';
import Navigate from '../Navigation/Navigate';
export default class CustomMenuScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <View
        style={{
          display: 'flex',
          backgroundColor: WHITE,
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: WHITE,
          height: Height,
          width: Width,
        }}>
        <Header
          light={false}
          placeholder="Change Password"
          backPath="Profile"
          navigation={navigation}
        />
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <InputBox
              variant="gray"
              placeholder="Enter Old Password"
              secureTextEntry={true}
            />
            <InputBox
              variant="gray"
              placeholder="Enter New Password"
              secureTextEntry={true}
            />
            <InputBox
              variant="gray"
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
          </View>
        </ScrollView>
        <View
          style={{
            height: 60,
            marginBottom: 30,
            paddingHorizontal: 20,
          }}>
          <Button
            veriant="primary"
            placeholder="Change Password"
            onPress={() => {
              NavigateTo('Dashboard', navigation);
            }}
          />
        </View>
      </View>
    );
  }
}
