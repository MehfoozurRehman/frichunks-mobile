import React, {Component} from 'react';
import {ScrollView, View, TextInput, ImageBackground} from 'react-native';
import {WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import Button from '../Components/Button';
import MenuCarouselItem from '../Components/MenuCarouselItem';
import Navigate from '../Navigation/Navigate';
export default class CartScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <ImageBackground
        source={require('../Assets/cart_background.png')}
        style={{backgroundColor: WHITE, height: Height, width: Width}}>
        <Header
          light={true}
          placeholder="Cart"
          backPath="CustomMenu"
          navigation={navigation}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <MenuCarouselItem title="Menu name" button={false} istitle={true} />
          <View style={{marginBottom: 50}} />
          <Button
            veriant="primary"
            placeholder="Checkout"
            onPress={() => {
              NavigateTo('CheckOut', navigation);
            }}
          />
          <View style={{marginBottom: 50}} />
        </ScrollView>
      </ImageBackground>
    );
  }
}
