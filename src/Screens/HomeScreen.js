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
          <TouchableOpacity
            style={{
              width: '80%',
              height: 50,
              backgroundColor: '#4761BC',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={9.647}
              height={19.293}
              viewBox="0 0 9.647 19.293">
              <Path
                data-name={2111392}
                d="M7.886 3.2h1.761V.136A22.743 22.743 0 007.081 0C4.542 0 2.802 1.6 2.802 4.533v2.7h-2.8v3.429h2.8v8.629h3.436v-8.626h2.689l.427-3.429H6.237V4.873c0-.991.268-1.67 1.649-1.67z"
                fill="#fff"
              />
            </Svg>
            <Text
              style={{
                fontSize: 14,
                color: WHITE,
                paddingHorizontal: 16,
              }}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '80%',
              height: 50,
              backgroundColor: '#FF4B26',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={18.088}
              height={18.088}
              viewBox="0 0 18.088 18.088">
              <G fill="#fff" data-name="g+">
                <Path
                  data-name="Path 2116"
                  d="M17.406 7.471h-7.378a.59.59 0 00-.59.59v2.357a.59.59 0 00.59.59h4.155a5.546 5.546 0 01-2.388 2.8l1.772 3.067a8.868 8.868 0 004.522-7.756 5.979 5.979 0 00-.1-1.158.593.593 0 00-.583-.49z"
                />
                <Path
                  data-name="Path 2117"
                  d="M9.044 14.547a5.5 5.5 0 01-4.762-2.755L1.215 13.56a9.037 9.037 0 0012.351 3.315l-1.772-3.067a5.463 5.463 0 01-2.75.739z"
                />
                <Path
                  data-name="Path 2118"
                  d="M13.566 16.877l-1.772-3.067a5.464 5.464 0 01-2.75.744v3.539a9.029 9.029 0 004.522-1.216z"
                />
                <Path
                  data-name="Path 2119"
                  d="M3.539 9.044a5.464 5.464 0 01.743-2.75L1.215 4.526a9 9 0 000 9.036l3.067-1.768a5.464 5.464 0 01-.743-2.75z"
                />
                <Path
                  data-name="Path 2120"
                  d="M9.044 3.539a5.48 5.48 0 013.5 1.255.588.588 0 00.791-.036l1.67-1.67a.594.594 0 00-.034-.869 9.024 9.024 0 00-13.75 2.307l3.067 1.768a5.5 5.5 0 014.756-2.755z"
                />
                <Path
                  data-name="Path 2121"
                  d="M12.544 4.794a.588.588 0 00.791-.036l1.67-1.67a.594.594 0 00-.034-.869A9.017 9.017 0 009.044 0v3.539a5.48 5.48 0 013.5 1.255z"
                />
              </G>
            </Svg>
            <Text
              style={{
                fontSize: 14,
                color: WHITE,
                paddingHorizontal: 16,
              }}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '80%',
              height: 50,
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
              borderColor: '#707070',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
            onPress={() => {
              NavigateTo('Login', navigation);
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={18.914}
              height={13.299}
              viewBox="0 0 18.914 13.299">
              <G data-name={646135}>
                <G data-name="Group 3">
                  <G data-name="Group 2">
                    <Path
                      data-name="Path 2122"
                      d="M18.747.95l-5.736 5.7 5.736 5.7a1.643 1.643 0 00.167-.712V1.664a1.643 1.643 0 00-.167-.714z"
                      fill="#110505"
                    />
                  </G>
                </G>
                <G data-name="Group 5">
                  <G data-name="Group 4">
                    <Path
                      data-name="Path 2123"
                      d="M17.251 0H1.662A1.643 1.643 0 00.95.167l7.331 7.295a1.664 1.664 0 002.351 0L17.963.167A1.643 1.643 0 0017.251 0z"
                      fill="#110505"
                    />
                  </G>
                </G>
                <G data-name="Group 7">
                  <G data-name="Group 6">
                    <Path
                      data-name="Path 2124"
                      d="M.167.95A1.643 1.643 0 000 1.662v9.974a1.643 1.643 0 00.167.712l5.736-5.7z"
                      fill="#110505"
                    />
                  </G>
                </G>
                <G data-name="Group 9">
                  <G data-name="Group 8">
                    <Path
                      data-name="Path 2125"
                      d="M12.229 7.433l-.812.812a2.773 2.773 0 01-3.918 0l-.812-.812-5.736 5.7a1.643 1.643 0 00.712.167h15.588a1.643 1.643 0 00.712-.167z"
                      fill="#110505"
                    />
                  </G>
                </G>
              </G>
            </Svg>
            <Text
              style={{
                fontSize: 14,
                color: '#201A50',
                paddingHorizontal: 16,
              }}>
              Continue as Email
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
