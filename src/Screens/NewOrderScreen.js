import React, {Component} from 'react';
import {ImageBackground, Text, ScrollView, View} from 'react-native';
import Button from '../Components/Button';
import InputBox from '../Components/InputBox';
import DatePickerBox from '../Components/DatePickerBox';
import TimePickerBox from '../Components/TimePickerBox';
import Logo from '../Components/Logo';
import {PRIMARY, TEXT_COLOR, THIRD} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Svg, {G, Path} from 'react-native-svg';
import NewOrderRow from '../Components/NewOrderRow';
import Navigate from '../Navigation/Navigate';

export default class NewOrderScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <View style={{backgroundColor: THIRD, height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/new_order_background.png')}
          style={{height: Height, flex: 1}}>
          <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
            <Logo light={false} />
            <NewOrderRow
              placeholder="People"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={23.266}
                  height={17.216}
                  style={{marginRight: 15}}
                  viewBox="0 0 23.266 17.216">
                  <G data-name="Group 12">
                    <G data-name="Icon ionic-ios-person-add">
                      <Path
                        data-name="Path 2126"
                        d="M20.315 13.456a24.431 24.431 0 00-2.453-.418 2.642 2.642 0 01-1.135-.464 6.8 6.8 0 01-.08-1.972.4.4 0 01.052-.159 5.952 5.952 0 00.485-.836 8.591 8.591 0 00.358-1.392.33.33 0 01.188-.234.758.758 0 00.367-.56c.146-.656.377-.911.348-1.4a.553.553 0 00-.151-.4.292.292 0 01-.094-.309 7.875 7.875 0 00.245-1.906C18.489 1.692 16.972 0 14.233 0c-2.782 0-4.26 1.692-4.218 3.41a8.211 8.211 0 00.24 1.906.308.308 0 01-.094.309.534.534 0 00-.151.4c-.028.489.2.744.348 1.4a.767.767 0 00.367.56.338.338 0 01.188.234 8.591 8.591 0 00.358 1.392 6.181 6.181 0 00.485.836.271.271 0 01.052.159 6.787 6.787 0 01-.08 1.972 2.642 2.642 0 01-1.135.464 24.43 24.43 0 00-2.453.418c-.668.209-2.6.857-2.942 2.185a.347.347 0 00.372.405h17.319a.346.346 0 00.367-.405c-.338-1.333-2.273-1.98-2.941-2.189z"
                        fill="#ca4041"
                      />
                    </G>
                    <G data-name="Icon ionic-ios-person-add">
                      <Path
                        data-name="Path 2126"
                        d="M15.628 14.126a24.431 24.431 0 00-2.453-.418 2.642 2.642 0 01-1.135-.464 6.8 6.8 0 01-.08-1.972.4.4 0 01.052-.159 5.952 5.952 0 00.485-.836 8.591 8.591 0 00.358-1.392.33.33 0 01.188-.234.758.758 0 00.367-.56c.146-.656.377-.911.348-1.4a.553.553 0 00-.151-.4.292.292 0 01-.094-.309 7.875 7.875 0 00.245-1.906C13.802 2.362 12.285.67 9.546.67c-2.782 0-4.26 1.692-4.218 3.41a8.211 8.211 0 00.24 1.906.308.308 0 01-.094.309.534.534 0 00-.151.4c-.028.489.2.744.348 1.4a.767.767 0 00.367.56.338.338 0 01.188.234 8.591 8.591 0 00.358 1.392 6.181 6.181 0 00.485.836.271.271 0 01.052.159 6.787 6.787 0 01-.08 1.972 2.642 2.642 0 01-1.135.464 24.43 24.43 0 00-2.453.418c-.668.209-2.6.857-2.942 2.185a.347.347 0 00.372.405h17.319a.346.346 0 00.367-.405c-.338-1.333-2.273-1.981-2.941-2.189z"
                        fill="#ca4041"
                        stroke="#f6f6f6"
                      />
                    </G>
                  </G>
                </Svg>
              }
              input={<InputBox placeholder="500" variant="gray" />}
            />
            <NewOrderRow
              placeholder="Date"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22.146}
                  height={22.829}
                  style={{marginRight: 15}}
                  viewBox="0 0 24.146 26.829">
                  <Path
                    data-name="Icon material-date-range"
                    d="M8.049 12.073H5.366v2.683h2.683zm5.366 0h-2.684v2.683h2.683zm5.366 0H16.1v2.683h2.68zm2.683-9.39h-1.342V0h-2.683v2.683H6.707V0H4.024v2.683H2.683a2.671 2.671 0 00-2.67 2.683L0 24.146a2.682 2.682 0 002.683 2.683h18.78a2.691 2.691 0 002.683-2.683V5.366a2.691 2.691 0 00-2.683-2.683zm0 21.463H2.683V9.39h18.78z"
                    fill="#ca4041"
                  />
                </Svg>
              }
              input={<DatePickerBox mode="date" />}
            />
            <Text
              style={{
                fontSize: 14,
                color: TEXT_COLOR,
                marginBottom: 3,
                marginTop: 10,
              }}>
              Time
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TimePickerBox />
              <Text style={{marginHorizontal: 5, color: PRIMARY, fontSize: 30}}>
                -
              </Text>
              <TimePickerBox />
            </View>
            <View style={{marginVertical: 50}}>
              <Button
                placeholder="Next"
                veriant="primary"
                onPress={() => {
                  NavigateTo('MenuSelect', navigation);
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
