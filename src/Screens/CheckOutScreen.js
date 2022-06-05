import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {THIRD, WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import Navigate from '../Navigation/Navigate';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../Components/Button';
import Svg, {G, Path, Image} from 'react-native-svg';

function CardText({heading, text}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: WHITE,
          paddingHorizontal: 20,
        }}>
        {heading}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: WHITE,
          paddingHorizontal: 20,
        }}>
        {text}
      </Text>
    </View>
  );
}

export default class CheckOutScreen extends Component {
  constructor() {
    super();
    this.state = {
      cashMethod: false,
      cardMethod: false,
      modalVisibility: false,
    };
  }
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
          placeholder="Checkout"
          backPath="Cart"
          navigation={navigation}
        />
        <ScrollView style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            Order Method
          </Text>
          <View style={{paddingHorizontal: 20}}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.cardMethod === true) {
                  this.setState({
                    cashMethod: true,
                  });
                  this.setState({
                    cardMethod: false,
                  });
                } else if (this.state.cardMethod === false) {
                  this.setState({
                    cashMethod: true,
                  });
                }
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: 60,
                backgroundColor: '#F9F9F9',
                borderRadius: 8,
                paddingHorizontal: 30,
                marginBottom: 20,
              }}>
              <View style={{marginRight: 35}}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={42}
                  height={42}
                  viewBox="0 0 42 42">
                  <Image
                    data-name={639365}
                    width={42}
                    height={42}
                    xlinkHref="data:image/png;base64,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"
                  />
                </Svg>
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Pickup</Text>
              </View>
              {this.state.cashMethod ? (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16.163}
                  height={12.4}
                  viewBox="0 0 16.163 12.4">
                  <G data-name="Group 570" fill="#ff6f00">
                    <Path
                      data-name="Path 1748"
                      d="M8.388 8.887a1.437 1.437 0 010 2L7.275 12a1.437 1.437 0 01-2 0L.4 7.083a1.437 1.437 0 010-2L1.516 3.97a1.437 1.437 0 012 0z"
                    />
                    <Path
                      data-name="Path 1749"
                      d="M12.65.4a1.437 1.437 0 012 0l1.113 1.113a1.437 1.437 0 010 2l-8.446 8.408a1.437 1.437 0 01-2 0l-1.113-1.113a1.437 1.437 0 010-2z"
                    />
                  </G>
                </Svg>
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (this.state.cardMethod === true) {
                  this.setState({
                    cashMethod: true,
                  });
                  this.setState({
                    cardMethod: false,
                  });
                } else if (this.state.cardMethod === false) {
                  this.setState({
                    cashMethod: true,
                  });
                }
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: 60,
                backgroundColor: '#F9F9F9',
                borderRadius: 8,
                paddingHorizontal: 30,
                marginBottom: 20,
              }}>
              <View style={{marginRight: 35}}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={42}
                  height={42}
                  viewBox="0 0 42 42">
                  <Image
                    data-name={639365}
                    width={42}
                    height={42}
                    xlinkHref="data:image/png;base64,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"
                  />
                </Svg>
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Cash</Text>
              </View>
              {this.state.cashMethod ? (
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16.163}
                  height={12.4}
                  viewBox="0 0 16.163 12.4">
                  <G data-name="Group 570" fill="#ff6f00">
                    <Path
                      data-name="Path 1748"
                      d="M8.388 8.887a1.437 1.437 0 010 2L7.275 12a1.437 1.437 0 01-2 0L.4 7.083a1.437 1.437 0 010-2L1.516 3.97a1.437 1.437 0 012 0z"
                    />
                    <Path
                      data-name="Path 1749"
                      d="M12.65.4a1.437 1.437 0 012 0l1.113 1.113a1.437 1.437 0 010 2l-8.446 8.408a1.437 1.437 0 01-2 0l-1.113-1.113a1.437 1.437 0 010-2z"
                    />
                  </G>
                </Svg>
              ) : null}
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginBottom: 50,
            }}>
            <Button
              veriant="primary"
              placeholder="Confirm Order"
              onPress={() => {
                NavigateTo('OrderPlaced', navigation);
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
