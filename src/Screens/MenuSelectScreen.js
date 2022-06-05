import React, {Component} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import Logo from '../Components/Logo';
import {THIRD} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Svg, {G, Path} from 'react-native-svg';
import MenuBtn from '../Components/MenuBtn';

export default class MenuSelectScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: THIRD, height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/menu_select_background.png')}
          style={{height: Height, flex: 1}}>
          <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
            <Logo light={false} />
            <View
              style={{
                marginBottom: 50,
                display: 'flex',
                alignItems: 'center',
              }}>
              <MenuBtn
                onPress={() => {
                  navigation.navigate('FeatureSelectCustom', {
                    toPath: 'CustomMenu',
                  });
                }}
                placeholder="Custom Menu"
                svg={
                  <Svg
                    data-name="Artboard 23"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50.921}
                    height={50.897}
                    viewBox="0 0 50.921 50.897">
                    <Path
                      data-name="Path 2129"
                      d="M3.285 41.863H.821v4.928a3.285 3.285 0 003.285 3.285h28.746a3.285 3.285 0 003.285-3.285v-4.928H31.21l-3.289 3.285-3.282-3.285z"
                      fill="#fe724c"
                    />
                    <Path
                      data-name="Path 2130"
                      d="M8.213 20.509h20.53a6.57 6.57 0 016.57 6.57v1.643H1.643v-1.643a6.57 6.57 0 016.57-6.57z"
                      fill="#fe724c"
                    />
                    <Path
                      data-name="Path 2131"
                      d="M22.176 13.117h26.282a1.643 1.643 0 011.643 1.643v2.464H20.533V14.76a1.643 1.643 0 011.643-1.643z"
                      fill="#fe724c"
                    />
                    <Path
                      data-name="Path 2132"
                      d="M33.673 32.007h.821a1.643 1.643 0 011.643 1.643v3.285a1.643 1.643 0 01-1.643 1.643H2.464a1.643 1.643 0 01-1.643-1.643V33.65a1.643 1.643 0 011.643-1.643h3.285l3.285 3.285 3.287-3.285z"
                      fill="#fe724c"
                    />
                    <G data-name="Group 16">
                      <Path
                        data-name="Path 2133"
                        d="M48.457 12.296v-.825a2.464 2.464 0 00-2.464-2.464H37.78V6.065l1.742-1.742a2.464 2.464 0 000-3.484l-.14-.141a2.524 2.524 0 00-3.485 0l-2.8 2.8a.821.821 0 00-.241.581v4.932h-8.217a2.464 2.464 0 00-2.464 2.46v.821a2.464 2.464 0 00-2.464 2.464v2.464a.821.821 0 00.821.821h1.681l.082 1.643H8.213a7.4 7.4 0 00-7.392 7.392v1.643a.821.821 0 00.821.821h.821v1.643A2.464 2.464 0 000 33.65v3.285a2.464 2.464 0 002.464 2.464v1.643H.821a.821.821 0 00-.821.821v4.928a4.111 4.111 0 004.107 4.107h41.886a.821.821 0 00.821-.78l1.6-32.072H50.1a.821.821 0 00.821-.821V14.76a2.464 2.464 0 00-2.464-2.464zM34.5 4.423l2.563-2.563a.842.842 0 011.161 0l.141.142a.821.821 0 010 1.161l-1.987 1.982a.821.821 0 00-.241.581v3.285H34.5zm-10.682 7.048a.821.821 0 01.821-.821h21.354a.821.821 0 01.821.821v.821h-23zM2.464 27.08a5.757 5.757 0 015.749-5.749h20.533A5.757 5.757 0 0134.5 27.08v.821H2.464zm30.389 2.464v1.643H12.32a.821.821 0 00-.581.241l-2.7 2.7-2.7-2.7a.821.821 0 00-.581-.241H4.107v-1.644zm-31.21 7.391V33.65a.821.821 0 01.821-.821h2.945l3.045 3.042a.821.821 0 001.161 0l3.045-3.045H34.5a.821.821 0 01.821.821v3.285a.821.821 0 01-.821.821H2.464a.821.821 0 01-.821-.818zm31.21 2.464v1.643H31.21a.821.821 0 00-.581.241l-2.7 2.7-2.7-2.7a.821.821 0 00-.581-.241H4.107v-1.643zM4.107 49.255a2.464 2.464 0 01-2.464-2.464v-4.107H24.3l3.045 3.045a.821.821 0 001.161 0l3.045-3.045h3.767v4.107a2.464 2.464 0 01-2.464 2.464zm41.106 0h-9.1a4.064 4.064 0 00.843-2.464v-4.928a.821.821 0 00-.821-.821H34.5v-1.643a2.464 2.464 0 002.464-2.464V33.65a2.464 2.464 0 00-2.464-2.464v-1.643h.821a.821.821 0 00.821-.821V27.08a7.4 7.4 0 00-7.392-7.392h-4.81l-.082-1.643h22.914zm4.066-32.852H21.354V14.76a.821.821 0 01.821-.821h26.282a.821.821 0 01.821.821z"
                        fill="#c95d40"
                      />
                      <Path
                        data-name="Path 2134"
                        d="M7.392 22.973h1.643v1.643H7.392z"
                        fill="#b3404a"
                      />
                      <Path
                        data-name="Path 2135"
                        d="M9.757 25.437H11.4v1.643H9.757z"
                        fill="#b3404a"
                      />
                      <Path
                        data-name="Path 2136"
                        d="M13.141 22.973h1.643v1.643h-1.643z"
                        fill="#b3404a"
                      />
                      <Path
                        data-name="Path 2137"
                        d="M15.506 25.437h1.643v1.643h-1.643z"
                        fill="#b3404a"
                      />
                      <Path
                        data-name="Path 2138"
                        d="M18.89 22.973h1.643v1.643H18.89z"
                        fill="#b3404a"
                      />
                      <Path
                        data-name="Path 2139"
                        d="M21.256 25.437h1.643v1.643h-1.643z"
                        fill="#b3404a"
                      />
                      <Path
                        data-name="Path 2140"
                        d="M24.639 22.973h1.643v1.643h-1.643z"
                        fill="#b3404a"
                      />
                      <Path
                        data-name="Path 2141"
                        d="M27.005 25.437h1.643v1.643h-1.643z"
                        fill="#b3404a"
                      />
                    </G>
                  </Svg>
                }
              />
              <MenuBtn
                onPress={() => {
                  navigation.navigate('FeatureSelectPreMade', {
                    toPath: 'PreMadeMenu',
                  });
                }}
                placeholder="Pre-made Menu"
                svg={
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={41.404}
                    height={46.047}
                    viewBox="0 0 41.404 46.047">
                    <Path
                      data-name="Path 2142"
                      d="M6.768 0v5.419l-1.032 1.3 1.032 1.409v10.837l-1.032 1.349 1.032 1.35V32.5l-1.032 1.347 1.032 1.361v10.839h5.857l1.462-23.023L12.625 0z"
                      fill="#fe724c"
                    />
                    <Path
                      data-name="Path 2143"
                      d="M12.625 0h28.779v46.047H12.625z"
                      fill="#d66243"
                    />
                    <Path
                      data-name="Path 2144"
                      d="M26.812 0h14.592v46.047H26.812z"
                      fill="#fe724c"
                    />
                    <Path
                      data-name="Path 2145"
                      d="M9.927 13.536H4.058a4.059 4.059 0 110-8.117h2.709v2.7H4.058a1.36 1.36 0 100 2.721h5.869z"
                      fill="#804354"
                    />
                    <Path
                      data-name="Path 2146"
                      d="M9.927 27.082H4.058a4.059 4.059 0 010-8.117h2.709v2.7H4.058a1.36 1.36 0 100 2.721h5.869z"
                      fill="#804354"
                    />
                    <Path
                      data-name="Path 2147"
                      d="M9.927 40.628H4.058a4.059 4.059 0 010-8.117h2.709v2.7H4.058a1.36 1.36 0 100 2.721h5.869z"
                      fill="#804354"
                    />
                    <Path
                      data-name="Path 2148"
                      d="M25.464 6.768h2.7v2.71h-2.7z"
                      fill="#fff"
                    />
                    <Path
                      data-name="Path 2149"
                      d="M26.812 6.768h1.35v2.71h-1.35z"
                      fill="#fff"
                    />
                    <Path
                      data-name="Path 2150"
                      d="M33.579 14.895H20.044a6.768 6.768 0 0113.535 0z"
                      fill="#fff"
                    />
                    <Path
                      data-name="Path 2151"
                      d="M33.58 14.895h-6.768V8.128a6.775 6.775 0 016.768 6.767z"
                      fill="#fff"
                    />
                    <Path
                      data-name="Path 2152"
                      d="M18.684 13.546h16.255v2.7H18.684z"
                      fill="#fff"
                    />
                    <Path
                      data-name="Path 2153"
                      d="M26.812 13.546h8.127v2.7h-8.127z"
                      fill="#fff"
                    />
                    <G data-name="Group 17" fill="#ff7b3d">
                      <Path
                        data-name="Path 2154"
                        d="M18.684 18.965h16.255v2.7H18.684z"
                      />
                      <Path
                        data-name="Path 2155"
                        d="M18.684 29.802h16.255v2.7H18.684z"
                      />
                      <Path
                        data-name="Path 2156"
                        d="M18.684 35.22h16.255v2.7H18.684z"
                      />
                    </G>
                    <Path
                      data-name="Path 2157"
                      d="M26.812 18.965h8.127v2.7h-8.127z"
                      fill="#d66243"
                    />
                    <Path
                      data-name="Path 2158"
                      d="M26.812 29.803h8.127v2.7h-8.127z"
                      fill="#d66243"
                    />
                    <Path
                      data-name="Path 2159"
                      d="M26.812 35.22h8.127v2.7h-8.127z"
                      fill="#d66243"
                    />
                  </Svg>
                }
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
