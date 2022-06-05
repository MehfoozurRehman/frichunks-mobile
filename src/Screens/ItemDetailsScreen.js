import React, {Component} from 'react';
import {Text, ScrollView, View, Image} from 'react-native';
import {FORTH, TEXT_COLOR, WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Svg, {Path} from 'react-native-svg';
import Header from '../Components/Header';
import Button from '../Components/Button';
import AddOn from '../Components/AddOn';
import Navigate from '../Navigation/Navigate';

export default class CustomMenuCreationScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <View style={{backgroundColor: WHITE, height: Height, width: Width}}>
        <Header
          light={false}
          placeholder=""
          backPath="CustomMenu"
          navigation={navigation}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <Image
            source={require('../Assets/menu_item_image.png')}
            style={{width: '100%', height: 150, borderRadius: 5}}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: TEXT_COLOR,
              marginTop: 15,
            }}>
            Ground Beef Tacos
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={15.986}
                height={14.844}
                style={{marginRight: 5}}
                viewBox="0 0 15.986 14.844">
                <Path
                  data-name="Icon ionic-ios-star"
                  d="M15.38 5.138h-5.249l-1.6-4.76a.578.578 0 00-1.085 0l-1.6 4.76H.571A.573.573 0 000 5.709a.42.42 0 00.011.1.549.549 0 00.239.4l4.314 3.04-1.656 4.814a.573.573 0 00.2.642.552.552 0 00.321.139.7.7 0 00.357-.128l4.211-3 4.211 3a.669.669 0 00.357.128.513.513 0 00.318-.139.566.566 0 00.2-.642l-1.656-4.814 4.278-3.069.1-.089a.546.546 0 00-.421-.953z"
                  fill="#fc0"
                />
              </Svg>
              <Text style={{fontSize: 14, color: FORTH}}>4.6 ( 30+)</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: TEXT_COLOR,
                  marginBottom: 3,
                  marginRight: 5,
                }}>
                Rs
              </Text>
              <Text
                style={{fontSize: 25, color: TEXT_COLOR, fontWeight: 'bold'}}>
                560
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 14, color: '#BFBFBF', textAlign: 'justify'}}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: TEXT_COLOR,
              marginBottom: 10,
            }}>
            Choice of Add On
          </Text>
          <AddOn />
          <AddOn />
          <AddOn />
          <AddOn />
          <Button
            placeholder="Add to Menu"
            veriant="primary"
            onPress={() => {
              NavigateTo('CustomMenu', navigation);
            }}
          />
          <View style={{marginBottom: 50}} />
        </ScrollView>
      </View>
    );
  }
}
