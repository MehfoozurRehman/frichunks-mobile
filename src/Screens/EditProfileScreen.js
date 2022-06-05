import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import Button from '../Components/Button';
import Navigate from '../Navigation/Navigate';
import Svg, {G, Path} from 'react-native-svg';

export default class EditProfileScreen extends Component {
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
          placeholder="Edit Profile"
          backPath="Profile"
          navigation={navigation}
        />
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <InputBox
              variant="GrayWithSvg"
              placeholder="Jhon Snowri"
              svg={
                <Svg
                  data-name={709722}
                  xmlns="http://www.w3.org/2000/svg"
                  width={16.994}
                  height={18.985}
                  viewBox="0 0 16.994 18.985">
                  <G data-name="Group 765">
                    <G data-name="Group 764">
                      <Path
                        data-name="Path 2137"
                        d="M8.498 0a4.929 4.929 0 104.929 4.929A4.942 4.942 0 008.498 0z"
                        fill="#616262"
                      />
                    </G>
                  </G>
                  <G data-name="Group 767">
                    <G data-name="Group 766">
                      <Path
                        data-name="Path 2138"
                        d="M16.957 13.797a4.594 4.594 0 00-.5-.9 6.127 6.127 0 00-4.24-2.669.907.907 0 00-.624.151 5.254 5.254 0 01-6.2 0 .808.808 0 00-.624-.151 6.082 6.082 0 00-4.24 2.669 5.3 5.3 0 00-.5.9.458.458 0 00.022.409 8.586 8.586 0 00.581.861 8.182 8.182 0 00.99 1.119 12.914 12.914 0 00.99.861 9.816 9.816 0 0011.709 0 9.469 9.469 0 00.99-.861 9.938 9.938 0 00.99-1.119 7.545 7.545 0 00.581-.861.367.367 0 00.075-.409z"
                        fill="#616262"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />
            <InputBox
              variant="GrayWithSvg"
              placeholder="jhonsnowri@gmail.com"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16.379}
                  height={13.425}
                  viewBox="0 0 16.379 13.425">
                  <Path
                    data-name="Path 642"
                    d="M14.331 2.237H2.047l6.142 5.594zM0 2.237A2.155 2.155 0 012.047 0h12.284a2.155 2.155 0 012.047 2.237v8.95a2.155 2.155 0 01-2.047 2.237H2.047A2.155 2.155 0 010 11.187z"
                    fill="#616262"
                    fillRule="evenodd"
                  />
                </Svg>
              }
            />
            <InputBox
              variant="GrayWithSvg"
              placeholder="+92 345 2365789"
              svg={
                <Svg
                  data-name="phone-call (2)"
                  xmlns="http://www.w3.org/2000/svg"
                  width={15.968}
                  height={16.001}
                  viewBox="0 0 15.968 16.001">
                  <G data-name="Group 768">
                    <Path
                      data-name="Path 2139"
                      d="M15.549 11.743L13.316 9.51a1.485 1.485 0 00-2.472.558 1.52 1.52 0 01-1.755.957 6.886 6.886 0 01-4.147-4.147 1.445 1.445 0 01.957-1.755 1.485 1.485 0 00.562-2.471L4.224.419a1.593 1.593 0 00-2.153 0L.556 1.934C-.959 3.529.715 7.756 4.461 11.5s7.975 5.5 9.57 3.908l1.518-1.508a1.593 1.593 0 000-2.157z"
                      fill="#616262"
                    />
                  </G>
                </Svg>
              }
            />
          </View>
        </ScrollView>
        <View
          style={{
            height: 130,
            display: 'flex',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginBottom: 20,
          }}>
          <Button
            veriant="secondary"
            placeholder="Set Address on Map"
            onPress={() => {
              NavigateTo('MapView', navigation);
            }}
          />
          <Button veriant="primary" placeholder="Save" />
        </View>
      </View>
    );
  }
}
