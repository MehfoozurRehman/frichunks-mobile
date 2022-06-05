import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import Navigate from '../Navigation/Navigate';
import SavedAddresses from '../Components/SavedAddresses';
export default class EditProfileScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <View
        style={{
          backgroundColor: WHITE,
          height: Height,
          width: Width,
        }}>
        <Header
          light={false}
          placeholder="Adresses"
          backPath="Profile"
          navigation={navigation}
        />
        <Text
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            paddingHorizontal: 20,
            marginVertical: 10,
          }}>
          Delivery Address
        </Text>
        <ScrollView style={{flex: 1}}>
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
          <SavedAddresses navigation={navigation} />
        </ScrollView>
      </View>
    );
  }
}
