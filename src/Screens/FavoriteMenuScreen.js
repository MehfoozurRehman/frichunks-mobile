import React, {Component} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import InputBox from '../Components/InputBox';
import {THIRD} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import {MenuCarousel} from '../Components/MenuCarousel';
export default class FavoriteMenuScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: THIRD, height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/pre_made_menu_background.png')}
          style={{height: Height, flex: 1}}>
          <Header
            light={false}
            placeholder="Favorite Menu"
            backPath="FeatureSelectPreMade"
            navigation={navigation}
            backPath="Profile"
          />
          <ScrollView style={{flex: 1}}>
            <View style={{paddingHorizontal: 20}}>
              <InputBox variant="search" placeholder="Search" />
            </View>
            <View
              style={{
                marginBottom: 50,
                display: 'flex',
                alignItems: 'center',
                flex: 1,
              }}>
              <MenuCarousel />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
