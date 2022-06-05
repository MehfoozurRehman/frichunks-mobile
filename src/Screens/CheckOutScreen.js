import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {FORTH, SECONDARY, THIRD, WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import Navigate from '../Navigation/Navigate';
import {ScrollView} from 'react-native-gesture-handler';
import SavedAddresses from '../Components/SavedAddresses';
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

function CardOptions({svg, text, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#F9F9F9',
        borderRadius: 8,
        paddingHorizontal: 20,
        marginBottom: 20,
      }}>
      <View style={{marginRight: 20}}>{svg}</View>
      <View>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{text}</Text>
      </View>
    </TouchableOpacity>
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
            Delivery Address
          </Text>
          <SavedAddresses navigation={navigation} path={true} />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              paddingHorizontal: 20,
            }}>
            Menu
          </Text>
          <View style={{paddingHorizontal: 20}}>
            <View
              style={{
                display: 'flex',
                borderRadius: 8,
                paddingTop: 20,
                backgroundColor: THIRD,
                paddingBottom: 12,
                marginVertical: 20,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 60,
                  backgroundColor: WHITE,
                  borderRadius: 8,
                  marginBottom: 12,
                  padding: 20,
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.166}
                  height={27.54}
                  viewBox="0 0 20.166 27.54">
                  <G data-name="Group 18" fill="#949494">
                    <Path
                      data-name="Path 2160"
                      d="M1.899 15.195L.128 26.704a.726.726 0 001.426.274l2.719-11.783z"
                    />
                    <Path
                      data-name="Path 2161"
                      d="M7.002 15.195L5.231 26.704a.726.726 0 001.426.274l2.719-11.783z"
                    />
                    <Path
                      data-name="Path 2162"
                      d="M14.367 15.195l1.771 11.509a.726.726 0 01-1.426.274l-2.721-11.783z"
                    />
                    <Path
                      data-name="Path 2163"
                      d="M18.165 15.195l1.771 11.509a.726.726 0 01-1.426.274l-2.721-11.783z"
                    />
                  </G>
                  <Path
                    data-name="Path 2164"
                    d="M2.849 11.4h1.087a3.227 3.227 0 003.022-2.094l3.026-8.069A1.9 1.9 0 0111.762 0h6.5a1.9 1.9 0 011.885 2.135l-.8 6.434a3.227 3.227 0 01-3.2 2.827.95.95 0 00-.95.95v2.374H1.899v-2.374a.95.95 0 01.95-.95z"
                    fill="#fe724c"
                  />
                  <Path
                    data-name="Path 2165"
                    d="M2.849 13.295h9.5a.95.95 0 01.95.95v.95h-11.4v-.95a.95.95 0 01.95-.95z"
                    fill="#fe724c"
                  />
                  <Path
                    data-name="Path 2166"
                    d="M3.324 13.295h9.022a.95.95 0 01.95.95v.95H2.374v-.95a.95.95 0 01.95-.95z"
                    fill="#feb39e"
                  />
                  <Path
                    data-name="Path 2167"
                    d="M20.15 2.135L18.995 11.4h-2.849a.949.949 0 00-.95.95v2.849h-1.901v-2.853a.949.949 0 01.95-.95 3.227 3.227 0 003.2-2.827l.48-3.833a5.494 5.494 0 00.042-.675A5.434 5.434 0 0016.145 0h2.121a1.9 1.9 0 011.884 2.135z"
                    fill="#feb39e"
                  />
                  <Path
                    data-name="Path 2168"
                    d="M18.519 15.198h-3.324v-2.849a.95.95 0 01.95-.95 3.227 3.227 0 003.2-2.827z"
                    fill="#fe724c"
                  />
                  <Path
                    data-name="Path 2169"
                    d="M1.9 15.196H0v-2.85a.95.95 0 01.95-.95h1.9a.95.95 0 00-.95.95z"
                    fill="#feb39e"
                  />
                </Svg>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={26.202}
                  height={26.202}
                  viewBox="0 0 26.202 26.202">
                  <G data-name="Group 28">
                    <G data-name="Group 22">
                      <Path
                        data-name="Path 2178"
                        d="M11.671 26.202a.384.384 0 01-.384-.384v-4.844a.384.384 0 01.768 0v4.844a.384.384 0 01-.384.384z"
                        fill="#c1c1c1"
                      />
                      <G data-name="Group 21">
                        <Path
                          data-name="Path 2179"
                          d="M11.905 21.949h-.475a.533.533 0 01-.506-.7L11.336 20H12l.412 1.249a.533.533 0 01-.507.7z"
                          fill="#f5d400"
                        />
                        <Path
                          data-name="Path 2180"
                          d="M16.216 13.658c0 3.089-2.035 6.626-4.545 6.626s-4.545-3.537-4.545-6.626a4.545 4.545 0 119.09 0z"
                          fill="#fe724c"
                        />
                        <Path
                          data-name="Path 2181"
                          d="M11.672 9.097a5.868 5.868 0 00-1.024.087 4.143 4.143 0 013.522 4.474c0 2.656-1.5 5.643-3.522 6.429a2.808 2.808 0 001.024.2c2.51 0 4.545-3.537 4.545-6.626a4.228 4.228 0 00-4.545-4.564z"
                          fill="#feb39e"
                        />
                      </G>
                    </G>
                    <G data-name="Group 24">
                      <Path
                        data-name="Path 2182"
                        d="M4.919 26.201a.384.384 0 01-.384-.384 2.491 2.491 0 00-.23-.905 2.216 2.216 0 01-.093-1.876 3.914 3.914 0 01.429-.707 1.616 1.616 0 00.409-.935v-.037a1.58 1.58 0 00-.41-.972 3.91 3.91 0 01-.429-.707 2.216 2.216 0 01.093-1.877 2.49 2.49 0 00.23-.905v-2.311a.384.384 0 11.768 0v2.316a3.17 3.17 0 01-.282 1.184 1.49 1.49 0 00-.106 1.288 3.212 3.212 0 00.351.57 2.319 2.319 0 01.553 1.372.384.384 0 010 .047 2.294 2.294 0 01-.553 1.419 3.21 3.21 0 00-.351.57 1.489 1.489 0 00.106 1.288 3.17 3.17 0 01.282 1.184.384.384 0 01-.383.378zm.9-4.845z"
                        fill="#c1c1c1"
                      />
                      <G data-name="Group 23">
                        <Path
                          data-name="Path 2183"
                          d="M5.167 15.272h-.475a.533.533 0 01-.506-.7l.412-1.249h.664l.412 1.249a.533.533 0 01-.507.7z"
                          fill="#465a61"
                        />
                        <Path
                          data-name="Path 2184"
                          d="M9.474 6.981c0 3.089-2.035 6.626-4.545 6.626S.384 10.07.384 6.981A4.228 4.228 0 014.929 2.42a4.228 4.228 0 014.545 4.561z"
                          fill="#fe724c"
                        />
                        <Path
                          data-name="Path 2185"
                          d="M4.93 2.42a5.869 5.869 0 00-1.024.087 4.143 4.143 0 013.522 4.474c0 2.656-1.5 5.643-3.522 6.429a2.808 2.808 0 001.024.2c2.51 0 4.545-3.537 4.545-6.626A4.228 4.228 0 004.93 2.423z"
                          fill="#feb39e"
                        />
                      </G>
                    </G>
                    <G data-name="Group 27">
                      <Path
                        data-name="Path 2186"
                        d="M21.273 26.203a.384.384 0 01-.384-.384v-1.5a2.491 2.491 0 00-.23-.905 2.216 2.216 0 01-.093-1.876 3.909 3.909 0 01.429-.707 1.58 1.58 0 00.41-.972 1.645 1.645 0 00-.42-.992 3.589 3.589 0 01-.469-.816 1.84 1.84 0 01.092-1.521 3.085 3.085 0 00.281-1.3v-2.893a.384.384 0 11.768 0v2.893a3.834 3.834 0 01-.336 1.59 1.1 1.1 0 00-.086.963 2.891 2.891 0 00.377.643 2.36 2.36 0 01.561 1.436 2.3 2.3 0 01-.553 1.419 3.208 3.208 0 00-.351.57 1.489 1.489 0 00.106 1.288 3.17 3.17 0 01.282 1.184v1.5a.384.384 0 01-.384.38z"
                        fill="#c1c1c1"
                      />
                      <Path
                        data-name="Path 2187"
                        d="M21.523 13.138h-.475a.533.533 0 01-.506-.7l.412-1.249h.664l.412 1.249a.533.533 0 01-.507.7z"
                        fill="#ad6bff"
                      />
                      <G data-name="Group 26">
                        <Path
                          data-name="Path 2188"
                          d="M25.818 4.945c0 3.089-2.035 6.626-4.545 6.626s-4.545-3.537-4.545-6.626a4.545 4.545 0 119.09 0z"
                          fill="#fe724c"
                        />
                        <Path
                          data-name="Path 2189"
                          d="M21.274.384a5.869 5.869 0 00-1.024.087 4.143 4.143 0 013.522 4.474c0 2.656-1.5 5.643-3.522 6.429a2.808 2.808 0 001.024.2c2.51 0 4.545-3.537 4.545-6.626A4.228 4.228 0 0021.274.384z"
                          fill="#feb39e"
                        />
                        <G data-name="Group 25">
                          <Path
                            data-name="Path 2190"
                            d="M14.097 11.078a3.033 3.033 0 00-1.367-.7.384.384 0 00-.179.747 2.276 2.276 0 011.027.516 2.05 2.05 0 01.569.955.384.384 0 10.737-.216 2.8 2.8 0 00-.786-1.3z"
                            fill="#f5d400"
                          />
                          <Path
                            data-name="Path 2191"
                            d="M7.35 4.401a3.032 3.032 0 00-1.367-.7.384.384 0 10-.179.747 2.276 2.276 0 011.027.516 2.051 2.051 0 01.569.955.384.384 0 00.737-.216 2.805 2.805 0 00-.787-1.302z"
                            fill="#00a9ce"
                          />
                          <Path
                            data-name="Path 2192"
                            d="M24.485 3.669a2.806 2.806 0 00-.787-1.3 3.033 3.033 0 00-1.367-.7.384.384 0 10-.179.747 2.277 2.277 0 011.027.516 2.05 2.05 0 01.569.955.384.384 0 10.737-.216z"
                            fill="#ad6bff"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                  <G data-name="Group 29">
                    <Path
                      data-name="Path 2193"
                      d="M6.909.768a.384.384 0 000-.768.384.384 0 000 .768z"
                      fill="#fdbc00"
                    />
                  </G>
                  <G data-name="Group 30">
                    <Path
                      data-name="Path 2194"
                      d="M15.192 1.51a.384.384 0 000-.768.384.384 0 000 .768z"
                      fill="#fdbc00"
                    />
                  </G>
                  <G data-name="Group 31">
                    <Path
                      data-name="Path 2195"
                      d="M13.578 7.344a.384.384 0 000-.768.384.384 0 000 .768z"
                      fill="#fdbc00"
                    />
                  </G>
                  <G data-name="Group 32">
                    <Path
                      data-name="Path 2196"
                      d="M18.27 15.656a.384.384 0 000-.768.384.384 0 000 .768z"
                      fill="#fdbc00"
                    />
                  </G>
                  <G data-name="Group 33">
                    <Path
                      data-name="Path 2197"
                      d="M.371 14.209a.384.384 0 000-.768.384.384 0 000 .768z"
                      fill="#fdbc00"
                    />
                  </G>
                  <G data-name="Group 34">
                    <Path
                      data-name="Path 2198"
                      d="M.384 26.202a.384.384 0 000-.768.384.384 0 000 .768z"
                      fill="#fdbc00"
                    />
                  </G>
                  <G data-name="Group 35">
                    <Path
                      data-name="Path 2199"
                      d="M2.175 17.886a.384.384 0 000-.768.384.384 0 000 .768z"
                      fill="#fdbc00"
                    />
                  </G>
                  <G data-name="Group 36">
                    <Path
                      data-name="Path 2200"
                      d="M24.815 21.644a.384.384 0 000-.768.384.384 0 000 .768z"
                      fill="#fdbc00"
                    />
                  </G>
                  <G data-name="Group 37">
                    <Path
                      data-name="Path 2201"
                      d="M23.812 17.989a.384.384 0 000-.768.384.384 0 000 .768z"
                      fill="#fdbc00"
                    />
                  </G>
                  <G data-name="Group 38">
                    <Path
                      data-name="Path 2202"
                      d="M7.932 24.779a.384.384 0 000-.768.384.384 0 000 .768z"
                      fill="#fdbc00"
                    />
                  </G>
                  <G data-name="Group 40">
                    <Path
                      data-name="Path 2203"
                      d="M1.658.113a.384.384 0 00-.543 0l-1 1a.384.384 0 10.543.543l1-1a.384.384 0 000-.543z"
                      fill="#50d9b2"
                    />
                    <Path
                      data-name="Path 2204"
                      d="M11.748 2.343a.384.384 0 10-.543.543l1 1a.384.384 0 10.543-.543z"
                      fill="#ff6381"
                    />
                    <G data-name="Group 39" fill="#50d9b2">
                      <Path
                        data-name="Path 2205"
                        d="M17.53 19.806l-1 1a.384.384 0 00.543.543l1-1a.384.384 0 10-.543-.543z"
                      />
                      <Path
                        data-name="Path 2206"
                        d="M1.658 20.988a.384.384 0 00-.543.543l1 1a.384.384 0 10.543-.543z"
                      />
                      <Path
                        data-name="Path 2207"
                        d="M24.083 24.544a.384.384 0 00-.543.543l1 1a.384.384 0 10.543-.543z"
                      />
                    </G>
                    <Path
                      data-name="Path 2208"
                      d="M26.089 12.682a.384.384 0 00-.543 0l-1 1a.384.384 0 10.543.543l1-1a.384.384 0 000-.543z"
                      fill="#ff6381"
                    />
                    <Path
                      data-name="Path 2209"
                      d="M14.962 24.544a.384.384 0 00-.543.543l1 1a.384.384 0 10.543-.543z"
                      fill="#ff6381"
                    />
                  </G>
                </Svg>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={27.743}
                  height={18.504}
                  viewBox="0 0 27.743 18.504">
                  <Path
                    data-name="Path 2170"
                    d="M3.876 5.734v11.907a.863.863 0 001.724.054l.747-11.961H3.876z"
                    fill="#596c76"
                  />
                  <Path
                    data-name="Path 2171"
                    d="M21.396 5.734l.747 11.961a.863.863 0 001.724-.054V5.734z"
                    fill="#596c76"
                  />
                  <Path
                    data-name="Path 2172"
                    d="M1.535 2.548v2.181a1 1 0 001 1h22.67a1 1 0 001-1V2.548z"
                    fill="#fe724c"
                  />
                  <G data-name="Group 19" fill="#feb39e">
                    <Path
                      data-name="Path 2173"
                      d="M27.073 0H.67A.67.67 0 000 .67v1.208a.67.67 0 00.67.67h26.4a.67.67 0 00.67-.67V.67a.67.67 0 00-.667-.67z"
                    />
                    <Path
                      data-name="Path 2174"
                      d="M27.073 0h-2.215a.67.67 0 01.67.67v1.208a.67.67 0 01-.67.67h2.215a.67.67 0 00.67-.67V.67a.67.67 0 00-.67-.67z"
                    />
                  </G>
                  <Path
                    data-name="Path 2175"
                    d="M23.993 2.548v2.181a1 1 0 01-1 1h2.215a1 1 0 001-1V2.548z"
                    fill="#f85225"
                  />
                  <G data-name="Group 20" fill="#465a61">
                    <Path
                      data-name="Path 2176"
                      d="M3.876 7.316h2.372l.1-1.582H3.876z"
                    />
                    <Path
                      data-name="Path 2177"
                      d="M21.496 7.316h2.372V5.734h-2.471z"
                    />
                  </G>
                </Svg>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30.821}
                  height={18.408}
                  viewBox="0 0 30.821 18.408">
                  <G data-name="Group 52">
                    <G data-name="Group 43">
                      <Path
                        data-name="Path 2210"
                        d="M19.314 12.869a5.925 5.925 0 01-3.74 5.508.444.444 0 01-.327 0 5.926 5.926 0 01.163-11.078 5.926 5.926 0 013.904 5.57z"
                        fill="#fe724c"
                      />
                      <Path
                        data-name="Path 2211"
                        d="M19.314 12.869a5.925 5.925 0 01-3.74 5.508.447.447 0 01-.327 0 5.921 5.921 0 01-.8-.391 5.925 5.925 0 000-10.233 5.878 5.878 0 01.966-.454 5.926 5.926 0 013.901 5.57z"
                        fill="#feb39e"
                      />
                      <G data-name="Group 41">
                        <Path
                          data-name="Path 2212"
                          d="M15.411 5.836a.452.452 0 01-.384-.213 7.664 7.664 0 01-1.133-2.541 1.516 1.516 0 013.032 0 7.665 7.665 0 01-1.133 2.541.452.452 0 01-.382.213zm0-3.368a.614.614 0 00-.613.613 5.1 5.1 0 00.613 1.409 5.1 5.1 0 00.613-1.409.614.614 0 00-.613-.618z"
                          fill="#1475cb"
                        />
                      </G>
                      <G data-name="Group 42">
                        <Path
                          data-name="Path 2213"
                          d="M15.411 5.836a.452.452 0 01-.384-.213 7.664 7.664 0 01-1.133-2.541 1.516 1.516 0 013.032 0 7.665 7.665 0 01-1.133 2.541.452.452 0 01-.382.213zm0-3.368a.614.614 0 00-.613.613 5.1 5.1 0 00.613 1.409 5.1 5.1 0 00.613-1.409.614.614 0 00-.613-.618z"
                          fill="#1475cb"
                        />
                      </G>
                      <Path
                        data-name="Path 2214"
                        d="M16.669 8.176h-2.516a.439.439 0 01-.439-.439V6.263a.879.879 0 01.879-.879h1.637a.879.879 0 01.879.879v1.47a.439.439 0 01-.44.443z"
                        fill="#1475cb"
                      />
                      <Path
                        data-name="Path 2215"
                        d="M17.108 6.263v1.475a.439.439 0 01-.439.439h-1.7a.44.44 0 00.439-.439V6.263a.878.878 0 00-.849-.878h1.667a.878.878 0 01.882.878z"
                        fill="#0857a0"
                      />
                    </G>
                    <G data-name="Group 49">
                      <G data-name="Group 46">
                        <Path
                          data-name="Path 2216"
                          d="M29.827 11.529a5.925 5.925 0 01-3.74 5.508.444.444 0 01-.327 0 5.926 5.926 0 01.163-11.078 5.926 5.926 0 013.904 5.57z"
                          fill="#fe724c"
                        />
                        <Path
                          data-name="Path 2217"
                          d="M29.827 11.529a5.925 5.925 0 01-3.74 5.508.447.447 0 01-.327 0 5.922 5.922 0 01-.8-.391 5.925 5.925 0 000-10.233 3.585 3.585 0 014.87 5.116z"
                          fill="#fb6a3b"
                        />
                        <G data-name="Group 44">
                          <Path
                            data-name="Path 2218"
                            d="M25.924 4.496a.452.452 0 01-.384-.213 7.664 7.664 0 01-1.133-2.541 1.516 1.516 0 013.032 0 7.666 7.666 0 01-1.133 2.541.452.452 0 01-.382.213zm0-3.368a.614.614 0 00-.613.613 5.1 5.1 0 00.613 1.409 5.106 5.106 0 00.613-1.409.614.614 0 00-.613-.613z"
                            fill="#1475cb"
                          />
                        </G>
                        <G data-name="Group 45">
                          <Path
                            data-name="Path 2219"
                            d="M25.924 4.496a.452.452 0 01-.384-.213 7.664 7.664 0 01-1.133-2.541 1.516 1.516 0 013.032 0 7.666 7.666 0 01-1.133 2.541.452.452 0 01-.382.213zm0-3.368a.614.614 0 00-.613.613 5.1 5.1 0 00.613 1.409 5.106 5.106 0 00.613-1.409.614.614 0 00-.613-.613z"
                            fill="#1475cb"
                          />
                        </G>
                        <Path
                          data-name="Path 2220"
                          d="M27.182 6.836h-2.516a.439.439 0 01-.439-.439V4.922a.879.879 0 01.879-.879h1.637a.879.879 0 01.879.879v1.475a.439.439 0 01-.44.439z"
                          fill="#1475cb"
                        />
                        <Path
                          data-name="Path 2221"
                          d="M27.621 4.923v1.475a.439.439 0 01-.439.439h-1.7a.44.44 0 00.439-.439V4.923a.878.878 0 00-.849-.878h1.667a.878.878 0 01.882.878z"
                          fill="#0857a0"
                        />
                      </G>
                      <G data-name="Group 48">
                        <Path
                          data-name="Path 2222"
                          d="M8.799 11.529a5.925 5.925 0 01-3.74 5.508.444.444 0 01-.327 0 5.926 5.926 0 01.163-11.078 5.926 5.926 0 013.904 5.57z"
                          fill="#fb6a3b"
                        />
                        <Path
                          data-name="Path 2223"
                          d="M8.799 11.529a5.925 5.925 0 01-3.74 5.508.447.447 0 01-.327 0 5.922 5.922 0 01-.8-.391 5.925 5.925 0 000-10.233 5.877 5.877 0 01.967-.454 5.926 5.926 0 013.9 5.57z"
                          fill="#fb5532"
                        />
                        <G data-name="Group 47">
                          <Path
                            data-name="Path 2224"
                            d="M4.896 4.496a.451.451 0 01-.384-.213 7.665 7.665 0 01-1.133-2.541 1.516 1.516 0 013.032 0 7.666 7.666 0 01-1.133 2.541.452.452 0 01-.382.213zm0-3.368a.614.614 0 00-.613.613 5.1 5.1 0 00.613 1.409 5.108 5.108 0 00.613-1.409.614.614 0 00-.613-.613z"
                            fill="#1475cb"
                          />
                        </G>
                        <Path
                          data-name="Path 2225"
                          d="M6.155 6.836H3.638a.439.439 0 01-.439-.439V4.922a.879.879 0 01.879-.879h1.637a.879.879 0 01.879.879v1.475a.439.439 0 01-.439.439z"
                          fill="#1475cb"
                        />
                        <Path
                          data-name="Path 2226"
                          d="M6.593 4.923v1.475a.439.439 0 01-.439.439h-1.7a.44.44 0 00.439-.439V4.923a.878.878 0 00-.849-.878H5.71a.878.878 0 01.883.878z"
                          fill="#0857a0"
                        />
                      </G>
                    </G>
                    <G data-name="Group 50">
                      <Path
                        data-name="Path 2227"
                        d="M15.411 3.671A41.945 41.945 0 01.29.871.452.452 0 01.614.028a41.346 41.346 0 0029.593 0 .452.452 0 11.324.843 41.946 41.946 0 01-15.12 2.8z"
                        fill="#0857a0"
                      />
                    </G>
                    <G data-name="Group 51" fill="#596c76">
                      <Path
                        data-name="Path 2228"
                        d="M5.509 1.741a2.313 2.313 0 01-.249.7q-.414-.1-.826-.214-.519-.14-1.035-.293Q1.829 1.466.29.875A.452.452 0 01.614.032q1.456.56 2.941 1.006.457.137.916.264.5.139 1.012.265a.61.61 0 01.026.176z"
                      />
                      <Path
                        data-name="Path 2229"
                        d="M16.023 3.081a1.933 1.933 0 01-.2.588h-.834q-.489 0-.978-.02a41.964 41.964 0 01-7.86-1 2.8 2.8 0 00.255-.867 41.2 41.2 0 007.522.96q.476.016.952.023h1.052a.6.6 0 01.091.316z"
                      />
                      <Path
                        data-name="Path 2230"
                        d="M26.542 1.741a1.6 1.6 0 01-.151.485q-.412.111-.826.214-.447.11-.9.211a41.965 41.965 0 01-7.86 1 1.848 1.848 0 00.122-.568 1.494 1.494 0 00-.039-.338 41.2 41.2 0 007.522-.96q.465-.1.928-.219.508-.126 1.013-.265a.611.611 0 01.191.44z"
                      />
                      <Path
                        data-name="Path 2231"
                        d="M30.531.873q-1.538.591-3.109 1.059a1.126 1.126 0 00.019-.191 1.5 1.5 0 00-.175-.7Q28.751.595 30.207.035a.452.452 0 11.324.843z"
                      />
                    </G>
                  </G>
                  <G data-name="Group 53" fill="#1475cb">
                    <Path
                      data-name="Path 2232"
                      d="M4.283 1.741a2.44 2.44 0 00.264.733h-.984a2.213 2.213 0 01-.183-.733 1.5 1.5 0 01.327-.938l.923.386a.615.615 0 00-.347.552z"
                    />
                    <Path
                      data-name="Path 2233"
                      d="M14.797 3.081a2.6 2.6 0 00.284.775h-.987a2.308 2.308 0 01-.2-.775 1.5 1.5 0 01.3-.907l.9.378a.613.613 0 00-.297.529z"
                    />
                    <Path
                      data-name="Path 2234"
                      d="M25.311 1.741a2.934 2.934 0 00.329.867l-.819.386a3.463 3.463 0 01-.414-1.253 1.5 1.5 0 01.327-.938l.923.386a.614.614 0 00-.346.552z"
                    />
                  </G>
                </Svg>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28.062}
                  height={28.062}
                  viewBox="0 0 28.062 28.062">
                  <Path
                    data-name="Path 2235"
                    d="M14.908 23.946a.822.822 0 101.644 0v-9.24l-.75-1.43-.894 1.9z"
                    fill="#fe724c"
                  />
                  <Path
                    data-name="Path 2236"
                    d="M26.418 20.663a.822.822 0 001.644 0v-9.245l-.781-1.421-.863 1.891z"
                    fill="#fe724c"
                  />
                  <Path
                    data-name="Path 2237"
                    d="M13.264 9.153a4.112 4.112 0 01-4.111 4.111.822.822 0 110-1.644 2.469 2.469 0 001.463-4.456 20.453 20.453 0 01-3.985-3.639v13.027a.822.822 0 01-1.644 0V.822a.829.829 0 01.575-.789A1.275 1.275 0 015.81 0a.858.858 0 01.691.362l.937 1.43a17.255 17.255 0 004.15 4.04 4.143 4.143 0 011.676 3.321z"
                    fill="#feb39e"
                  />
                  <Path
                    data-name="Path 2238"
                    d="M13.264 9.153a4.112 4.112 0 01-4.111 4.111.822.822 0 110-1.644 2.469 2.469 0 001.463-4.456 20.454 20.454 0 01-3.985-3.639v13.027a.814.814 0 01-.822.822V0A.858.858 0 016.5.362l.937 1.43a17.256 17.256 0 004.149 4.039 4.143 4.143 0 011.678 3.322z"
                    fill="#fe724c"
                  />
                  <Path
                    data-name="Path 2239"
                    d="M13.264 28.062a3.288 3.288 0 113.288-3.289 3.292 3.292 0 01-3.288 3.289z"
                    fill="#feb39e"
                  />
                  <Path
                    data-name="Path 2240"
                    d="M5.81 14.399a3.248 3.248 0 00-2.467-1.135 3.289 3.289 0 100 6.577 3.248 3.248 0 002.466-1.135 3.233 3.233 0 000-4.308z"
                    fill="#fe724c"
                  />
                  <Path
                    data-name="Path 2241"
                    d="M24.773 24.773a3.289 3.289 0 113.289-3.289 3.292 3.292 0 01-3.289 3.289z"
                    fill="#feb39e"
                  />
                  <Path
                    data-name="Path 2242"
                    d="M6.632 16.552a3.166 3.166 0 01-.822 2.154v-4.308a3.165 3.165 0 01.822 2.154z"
                    fill="#feb39e"
                  />
                  <Path
                    data-name="Path 2243"
                    d="M27.733 6.851a.864.864 0 00-.724-.132l-5.525 1.579-5.985 1.71a.829.829 0 00-.592.789v4.374l1.644-.46 4.933-1.414 4.933-1.414 1.644-.46V7.514a.81.81 0 00-.328-.663z"
                    fill="#feb39e"
                  />
                  <Path
                    data-name="Path 2244"
                    d="M28.062 7.513v3.913l-1.644.46-4.933 1.411v-5l5.525-1.579a.864.864 0 01.724.132.81.81 0 01.328.663z"
                    fill="#fe724c"
                  />
                </Svg>
              </View>
              <CardText heading="People" text="250" />
              <CardText heading="Menu" text="Custom Menu" />
              <CardText heading="Date" text="9 - 12 - 2000" />
              <CardText heading="Time" text="6:00pm - 9:00pm" />
            </View>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            Payment Method
          </Text>
          <View style={{paddingHorizontal: 20}}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.cashMethod === true) {
                  this.setState({
                    modalVisibility: true,
                  });
                  this.setState({
                    cardMethod: true,
                  });
                  this.setState({
                    cashMethod: false,
                  });
                } else if (this.state.cashMethod === false) {
                  this.setState({
                    modalVisibility: true,
                  });
                  this.setState({
                    cardMethod: true,
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
                paddingHorizontal: 20,
                marginBottom: 20,
              }}>
              <View style={{marginRight: 20}}>
                <Svg
                  data-name={179457}
                  xmlns="http://www.w3.org/2000/svg"
                  width={68.077}
                  height={21.304}
                  viewBox="0 0 68.077 21.304">
                  <G data-name="Group 886">
                    <G data-name="Group 885">
                      <Path
                        data-name="Path 2249"
                        d="M27.827 0L24.41 21.261h5.461L33.286 0zm16.472 8.661c-1.908-.942-3.078-1.578-3.078-2.542.023-.876.989-1.774 3.146-1.774a9.5 9.5 0 014.068.787l.5.221.742-4.448a13.784 13.784 0 00-4.9-.876c-5.393 0-9.19 2.8-9.214 6.814-.045 2.959 2.719 4.6 4.787 5.587 2.113 1.011 2.832 1.666 2.832 2.564-.023 1.379-1.708 2.015-3.28 2.015a11.106 11.106 0 01-5.125-1.1l-.719-.328-.764 4.623a17.054 17.054 0 006.091 1.1c5.731 0 9.461-2.761 9.507-7.035.013-2.345-1.444-4.14-4.593-5.608zM63.673.07h-4.225a2.706 2.706 0 00-2.855 1.711l-8.112 19.485h5.731l1.578-4.219h6.409l.819 4.236h5.055zM57.38 12.79c.111.011 2.2-6.886 2.2-6.886l1.664 6.886zM19.847 0l-5.348 14.445-.583-2.849a15.873 15.873 0 00-7.552-8.633l4.9 18.277h5.775L25.625.002h-5.778z"
                        fill="#2394bc"
                      />
                    </G>
                  </G>
                  <Path
                    data-name="Path 2250"
                    d="M12.114 2.742A3.568 3.568 0 008.561.004H.087L0 .397c6.61 1.63 12.158 6.644 13.958 11.36z"
                    fill="#efc75e"
                  />
                </Svg>
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  **** **** **** 4502
                </Text>
              </View>
              {this.state.cardMethod ? (
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
            <Modal
              visible={this.state.modalVisibility}
              transparent={false}
              animationType="fade">
              <View
                style={{
                  height: '95%',
                  margin: 20,
                  backgroundColor: '#ffffff',
                  borderEndColor: THIRD,
                  borderWidth: 1,
                  borderColor: THIRD,
                  borderRadius: 10,
                }}>
                <ScrollView style={{flex: 1, padding: 20}}>
                  <CardOptions
                    onPress={() => {
                      this.setState({
                        modalVisibility: false,
                      });
                    }}
                    svg={
                      <Svg
                        data-name={179457}
                        xmlns="http://www.w3.org/2000/svg"
                        width={50.077}
                        height={21.304}
                        viewBox="0 0 68.077 21.304">
                        <G data-name="Group 886">
                          <G data-name="Group 885">
                            <Path
                              data-name="Path 2249"
                              d="M27.827 0L24.41 21.261h5.461L33.286 0zm16.472 8.661c-1.908-.942-3.078-1.578-3.078-2.542.023-.876.989-1.774 3.146-1.774a9.5 9.5 0 014.068.787l.5.221.742-4.448a13.784 13.784 0 00-4.9-.876c-5.393 0-9.19 2.8-9.214 6.814-.045 2.959 2.719 4.6 4.787 5.587 2.113 1.011 2.832 1.666 2.832 2.564-.023 1.379-1.708 2.015-3.28 2.015a11.106 11.106 0 01-5.125-1.1l-.719-.328-.764 4.623a17.054 17.054 0 006.091 1.1c5.731 0 9.461-2.761 9.507-7.035.013-2.345-1.444-4.14-4.593-5.608zM63.673.07h-4.225a2.706 2.706 0 00-2.855 1.711l-8.112 19.485h5.731l1.578-4.219h6.409l.819 4.236h5.055zM57.38 12.79c.111.011 2.2-6.886 2.2-6.886l1.664 6.886zM19.847 0l-5.348 14.445-.583-2.849a15.873 15.873 0 00-7.552-8.633l4.9 18.277h5.775L25.625.002h-5.778z"
                              fill="#2394bc"
                            />
                          </G>
                        </G>
                        <Path
                          data-name="Path 2250"
                          d="M12.114 2.742A3.568 3.568 0 008.561.004H.087L0 .397c6.61 1.63 12.158 6.644 13.958 11.36z"
                          fill="#efc75e"
                        />
                      </Svg>
                    }
                    text={'**** **** **** 4502'}
                  />
                  <CardOptions
                    onPress={() => {
                      this.setState({
                        modalVisibility: false,
                      });
                    }}
                    svg={
                      <Svg
                        data-name={179457}
                        xmlns="http://www.w3.org/2000/svg"
                        width={50.077}
                        height={21.304}
                        viewBox="0 0 68.077 21.304">
                        <G data-name="Group 886">
                          <G data-name="Group 885">
                            <Path
                              data-name="Path 2249"
                              d="M27.827 0L24.41 21.261h5.461L33.286 0zm16.472 8.661c-1.908-.942-3.078-1.578-3.078-2.542.023-.876.989-1.774 3.146-1.774a9.5 9.5 0 014.068.787l.5.221.742-4.448a13.784 13.784 0 00-4.9-.876c-5.393 0-9.19 2.8-9.214 6.814-.045 2.959 2.719 4.6 4.787 5.587 2.113 1.011 2.832 1.666 2.832 2.564-.023 1.379-1.708 2.015-3.28 2.015a11.106 11.106 0 01-5.125-1.1l-.719-.328-.764 4.623a17.054 17.054 0 006.091 1.1c5.731 0 9.461-2.761 9.507-7.035.013-2.345-1.444-4.14-4.593-5.608zM63.673.07h-4.225a2.706 2.706 0 00-2.855 1.711l-8.112 19.485h5.731l1.578-4.219h6.409l.819 4.236h5.055zM57.38 12.79c.111.011 2.2-6.886 2.2-6.886l1.664 6.886zM19.847 0l-5.348 14.445-.583-2.849a15.873 15.873 0 00-7.552-8.633l4.9 18.277h5.775L25.625.002h-5.778z"
                              fill="#2394bc"
                            />
                          </G>
                        </G>
                        <Path
                          data-name="Path 2250"
                          d="M12.114 2.742A3.568 3.568 0 008.561.004H.087L0 .397c6.61 1.63 12.158 6.644 13.958 11.36z"
                          fill="#efc75e"
                        />
                      </Svg>
                    }
                    text={'**** **** **** 4502'}
                  />
                  <CardOptions
                    onPress={() => {
                      this.setState({
                        modalVisibility: false,
                      });
                    }}
                    svg={
                      <Svg
                        data-name={179457}
                        xmlns="http://www.w3.org/2000/svg"
                        width={50.077}
                        height={21.304}
                        viewBox="0 0 68.077 21.304">
                        <G data-name="Group 886">
                          <G data-name="Group 885">
                            <Path
                              data-name="Path 2249"
                              d="M27.827 0L24.41 21.261h5.461L33.286 0zm16.472 8.661c-1.908-.942-3.078-1.578-3.078-2.542.023-.876.989-1.774 3.146-1.774a9.5 9.5 0 014.068.787l.5.221.742-4.448a13.784 13.784 0 00-4.9-.876c-5.393 0-9.19 2.8-9.214 6.814-.045 2.959 2.719 4.6 4.787 5.587 2.113 1.011 2.832 1.666 2.832 2.564-.023 1.379-1.708 2.015-3.28 2.015a11.106 11.106 0 01-5.125-1.1l-.719-.328-.764 4.623a17.054 17.054 0 006.091 1.1c5.731 0 9.461-2.761 9.507-7.035.013-2.345-1.444-4.14-4.593-5.608zM63.673.07h-4.225a2.706 2.706 0 00-2.855 1.711l-8.112 19.485h5.731l1.578-4.219h6.409l.819 4.236h5.055zM57.38 12.79c.111.011 2.2-6.886 2.2-6.886l1.664 6.886zM19.847 0l-5.348 14.445-.583-2.849a15.873 15.873 0 00-7.552-8.633l4.9 18.277h5.775L25.625.002h-5.778z"
                              fill="#2394bc"
                            />
                          </G>
                        </G>
                        <Path
                          data-name="Path 2250"
                          d="M12.114 2.742A3.568 3.568 0 008.561.004H.087L0 .397c6.61 1.63 12.158 6.644 13.958 11.36z"
                          fill="#efc75e"
                        />
                      </Svg>
                    }
                    text={'**** **** **** 4502'}
                  />
                  <CardOptions
                    onPress={() => {
                      this.setState({
                        modalVisibility: false,
                      });
                    }}
                    svg={
                      <Svg
                        data-name={179457}
                        xmlns="http://www.w3.org/2000/svg"
                        width={50.077}
                        height={21.304}
                        viewBox="0 0 68.077 21.304">
                        <G data-name="Group 886">
                          <G data-name="Group 885">
                            <Path
                              data-name="Path 2249"
                              d="M27.827 0L24.41 21.261h5.461L33.286 0zm16.472 8.661c-1.908-.942-3.078-1.578-3.078-2.542.023-.876.989-1.774 3.146-1.774a9.5 9.5 0 014.068.787l.5.221.742-4.448a13.784 13.784 0 00-4.9-.876c-5.393 0-9.19 2.8-9.214 6.814-.045 2.959 2.719 4.6 4.787 5.587 2.113 1.011 2.832 1.666 2.832 2.564-.023 1.379-1.708 2.015-3.28 2.015a11.106 11.106 0 01-5.125-1.1l-.719-.328-.764 4.623a17.054 17.054 0 006.091 1.1c5.731 0 9.461-2.761 9.507-7.035.013-2.345-1.444-4.14-4.593-5.608zM63.673.07h-4.225a2.706 2.706 0 00-2.855 1.711l-8.112 19.485h5.731l1.578-4.219h6.409l.819 4.236h5.055zM57.38 12.79c.111.011 2.2-6.886 2.2-6.886l1.664 6.886zM19.847 0l-5.348 14.445-.583-2.849a15.873 15.873 0 00-7.552-8.633l4.9 18.277h5.775L25.625.002h-5.778z"
                              fill="#2394bc"
                            />
                          </G>
                        </G>
                        <Path
                          data-name="Path 2250"
                          d="M12.114 2.742A3.568 3.568 0 008.561.004H.087L0 .397c6.61 1.63 12.158 6.644 13.958 11.36z"
                          fill="#efc75e"
                        />
                      </Svg>
                    }
                    text={'**** **** **** 4502'}
                  />
                  <CardOptions
                    onPress={() => {
                      this.setState({
                        modalVisibility: false,
                      });
                    }}
                    svg={
                      <Svg
                        data-name={179457}
                        xmlns="http://www.w3.org/2000/svg"
                        width={50.077}
                        height={21.304}
                        viewBox="0 0 68.077 21.304">
                        <G data-name="Group 886">
                          <G data-name="Group 885">
                            <Path
                              data-name="Path 2249"
                              d="M27.827 0L24.41 21.261h5.461L33.286 0zm16.472 8.661c-1.908-.942-3.078-1.578-3.078-2.542.023-.876.989-1.774 3.146-1.774a9.5 9.5 0 014.068.787l.5.221.742-4.448a13.784 13.784 0 00-4.9-.876c-5.393 0-9.19 2.8-9.214 6.814-.045 2.959 2.719 4.6 4.787 5.587 2.113 1.011 2.832 1.666 2.832 2.564-.023 1.379-1.708 2.015-3.28 2.015a11.106 11.106 0 01-5.125-1.1l-.719-.328-.764 4.623a17.054 17.054 0 006.091 1.1c5.731 0 9.461-2.761 9.507-7.035.013-2.345-1.444-4.14-4.593-5.608zM63.673.07h-4.225a2.706 2.706 0 00-2.855 1.711l-8.112 19.485h5.731l1.578-4.219h6.409l.819 4.236h5.055zM57.38 12.79c.111.011 2.2-6.886 2.2-6.886l1.664 6.886zM19.847 0l-5.348 14.445-.583-2.849a15.873 15.873 0 00-7.552-8.633l4.9 18.277h5.775L25.625.002h-5.778z"
                              fill="#2394bc"
                            />
                          </G>
                        </G>
                        <Path
                          data-name="Path 2250"
                          d="M12.114 2.742A3.568 3.568 0 008.561.004H.087L0 .397c6.61 1.63 12.158 6.644 13.958 11.36z"
                          fill="#efc75e"
                        />
                      </Svg>
                    }
                    text={'**** **** **** 4502'}
                  />
                  <CardOptions
                    onPress={() => {
                      this.setState({
                        modalVisibility: false,
                      });
                    }}
                    svg={
                      <Svg
                        data-name={179457}
                        xmlns="http://www.w3.org/2000/svg"
                        width={50.077}
                        height={21.304}
                        viewBox="0 0 68.077 21.304">
                        <G data-name="Group 886">
                          <G data-name="Group 885">
                            <Path
                              data-name="Path 2249"
                              d="M27.827 0L24.41 21.261h5.461L33.286 0zm16.472 8.661c-1.908-.942-3.078-1.578-3.078-2.542.023-.876.989-1.774 3.146-1.774a9.5 9.5 0 014.068.787l.5.221.742-4.448a13.784 13.784 0 00-4.9-.876c-5.393 0-9.19 2.8-9.214 6.814-.045 2.959 2.719 4.6 4.787 5.587 2.113 1.011 2.832 1.666 2.832 2.564-.023 1.379-1.708 2.015-3.28 2.015a11.106 11.106 0 01-5.125-1.1l-.719-.328-.764 4.623a17.054 17.054 0 006.091 1.1c5.731 0 9.461-2.761 9.507-7.035.013-2.345-1.444-4.14-4.593-5.608zM63.673.07h-4.225a2.706 2.706 0 00-2.855 1.711l-8.112 19.485h5.731l1.578-4.219h6.409l.819 4.236h5.055zM57.38 12.79c.111.011 2.2-6.886 2.2-6.886l1.664 6.886zM19.847 0l-5.348 14.445-.583-2.849a15.873 15.873 0 00-7.552-8.633l4.9 18.277h5.775L25.625.002h-5.778z"
                              fill="#2394bc"
                            />
                          </G>
                        </G>
                        <Path
                          data-name="Path 2250"
                          d="M12.114 2.742A3.568 3.568 0 008.561.004H.087L0 .397c6.61 1.63 12.158 6.644 13.958 11.36z"
                          fill="#efc75e"
                        />
                      </Svg>
                    }
                    text={'**** **** **** 4502'}
                  />
                  <CardOptions
                    onPress={() => {
                      this.setState({
                        modalVisibility: false,
                      });
                    }}
                    svg={
                      <Svg
                        data-name={179457}
                        xmlns="http://www.w3.org/2000/svg"
                        width={50.077}
                        height={21.304}
                        viewBox="0 0 68.077 21.304">
                        <G data-name="Group 886">
                          <G data-name="Group 885">
                            <Path
                              data-name="Path 2249"
                              d="M27.827 0L24.41 21.261h5.461L33.286 0zm16.472 8.661c-1.908-.942-3.078-1.578-3.078-2.542.023-.876.989-1.774 3.146-1.774a9.5 9.5 0 014.068.787l.5.221.742-4.448a13.784 13.784 0 00-4.9-.876c-5.393 0-9.19 2.8-9.214 6.814-.045 2.959 2.719 4.6 4.787 5.587 2.113 1.011 2.832 1.666 2.832 2.564-.023 1.379-1.708 2.015-3.28 2.015a11.106 11.106 0 01-5.125-1.1l-.719-.328-.764 4.623a17.054 17.054 0 006.091 1.1c5.731 0 9.461-2.761 9.507-7.035.013-2.345-1.444-4.14-4.593-5.608zM63.673.07h-4.225a2.706 2.706 0 00-2.855 1.711l-8.112 19.485h5.731l1.578-4.219h6.409l.819 4.236h5.055zM57.38 12.79c.111.011 2.2-6.886 2.2-6.886l1.664 6.886zM19.847 0l-5.348 14.445-.583-2.849a15.873 15.873 0 00-7.552-8.633l4.9 18.277h5.775L25.625.002h-5.778z"
                              fill="#2394bc"
                            />
                          </G>
                        </G>
                        <Path
                          data-name="Path 2250"
                          d="M12.114 2.742A3.568 3.568 0 008.561.004H.087L0 .397c6.61 1.63 12.158 6.644 13.958 11.36z"
                          fill="#efc75e"
                        />
                      </Svg>
                    }
                    text={'**** **** **** 4502'}
                  />
                </ScrollView>
                <View
                  style={{
                    display: 'flex',
                    height: 60,
                    paddingHorizontal: 20,
                    marginBottom: 10,
                  }}>
                  <Button
                    veriant="primary"
                    placeholder="Add Card"
                    onPress={() => {
                      NavigateTo('AddCard', navigation);
                    }}
                  />
                </View>
              </View>
            </Modal>
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
