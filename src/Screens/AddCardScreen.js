import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import Button from '../Components/Button';
import Navigate from '../Navigation/Navigate';
import Svg, {G, Path} from 'react-native-svg';
import {ScrollView} from 'react-native-gesture-handler';

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
          placeholder="Add Card"
          backPath="CheckOut"
          navigation={navigation}
        />
        <ScrollView>
          <Text
            style={{paddingHorizontal: 20, paddingTop: 50, marginVertical: 14}}>
            Card Information
          </Text>
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <InputBox variant="gray" placeholder="Account Holder Name" />
            <InputBox
              variant="GrayWithSvg"
              placeholder="XXXX XXXX XXXX"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.25}
                  height={15.75}
                  viewBox="0 0 20.25 15.75">
                  <Path
                    data-name="Icon awesome-credit-card"
                    d="M0 14.063a1.688 1.688 0 001.688 1.687h16.875a1.688 1.688 0 001.688-1.688V7.875H0zm6.75-2.391a.423.423 0 01.422-.422h4.781a.423.423 0 01.422.422v1.406a.423.423 0 01-.422.422H7.172a.423.423 0 01-.422-.422zm-4.5 0a.423.423 0 01.422-.422H5.2a.423.423 0 01.422.422v1.406a.423.423 0 01-.422.422H2.672a.423.423 0 01-.422-.422zm18-9.985v1.688H0V1.688A1.688 1.688 0 011.688 0h16.875a1.688 1.688 0 011.687 1.688z"
                    fill="#FE724C"
                  />
                </Svg>
              }
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <InputBox
                variant="GrayWithSvg"
                placeholder="MM/YY"
                svg={
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={17.454}
                    height={19.393}
                    viewBox="0 0 17.454 19.393">
                    <Path
                      data-name="Icon material-date-range"
                      d="M5.818 8.727H3.879v1.939h1.939zm3.879 0h-1.94v1.939H9.7zm3.879 0h-1.94v1.939h1.939zm1.939-6.788h-.97V0h-1.939v1.939H4.848V0H2.909v1.939h-.97A1.931 1.931 0 00.01 3.879L0 17.454a1.939 1.939 0 001.939 1.939h13.575a1.945 1.945 0 001.939-1.939V3.879a1.945 1.945 0 00-1.939-1.94zm0 15.514H1.939V6.788h13.575z"
                      fill="#FE724C"
                    />
                  </Svg>
                }
              />
              <View style={{width: 15}} />
              <InputBox
                variant="GrayWithSvg"
                placeholder="CV"
                svg={
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12.122}
                    height={16.967}
                    viewBox="0 0 12.122 16.967">
                    <Path
                      data-name="Icon ionic-md-keypad"
                      d="M6.061 13.884a1.542 1.542 0 101.534 1.542 1.542 1.542 0 00-1.534-1.542zM1.534 0a1.542 1.542 0 101.534 1.542A1.542 1.542 0 001.534 0zm0 4.629a1.542 1.542 0 101.534 1.542 1.542 1.542 0 00-1.534-1.542zm0 4.629A1.542 1.542 0 103.068 10.8a1.542 1.542 0 00-1.534-1.542zm9.054-6.171A1.544 1.544 0 109.05 1.542a1.542 1.542 0 001.538 1.545zM6.061 9.258A1.542 1.542 0 107.595 10.8a1.542 1.542 0 00-1.534-1.542zm4.527 0a1.542 1.542 0 101.534 1.542 1.542 1.542 0 00-1.534-1.542zm0-4.629a1.542 1.542 0 101.534 1.542 1.542 1.542 0 00-1.534-1.542zm-4.527 0a1.542 1.542 0 101.534 1.542 1.542 1.542 0 00-1.534-1.542zm0-4.629a1.542 1.542 0 101.534 1.542A1.542 1.542 0 006.061 0z"
                      fill="#FE724C"
                    />
                  </Svg>
                }
              />
            </View>
            <View style={{height: 70, display: 'flex', marginTop: 50}}>
              <Button veriant="primary" placeholder="Add Card" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
