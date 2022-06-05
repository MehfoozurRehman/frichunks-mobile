import React, {Component} from 'react';
import {Text, ScrollView, View, TouchableOpacity, Image} from 'react-native';
import {TEXT_COLOR, WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import Svg, {G, Path, Ellipse} from 'react-native-svg';
import Navigate from '../Navigation/Navigate';

function EditProfileHeadings({svg, text}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: 1,
      }}>
      <View
        style={{
          marginRight: 20,
          marginHorizontal: 10,
          marginVertical: 20,
        }}>
        {svg}
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 13, color: TEXT_COLOR}}>{text}</Text>
      </View>
    </View>
  );
}

function EditProfileHeadingsTouchAble({text, svg, lastItem, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#DBDBDB',
        borderBottomWidth: lastItem ? 0 : 1,
      }}>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
          marginRight: 24,
        }}>
        {svg}
      </View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 14, color: TEXT_COLOR}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default class ProfileScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <View style={{backgroundColor: WHITE, height: Height, width: Width}}>
        <Header
          light={false}
          placeholder="Edit Profile"
          backPath="Dashboard"
          navigation={navigation}
        />
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#FFCA40',
              borderRadius: 12,
              marginHorizontal: 20,
              marginVertical: 16,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginHorizontal: 20,
                alignItems: 'center',
                borderBottomColor: '#DBDBDB',
                borderBottomWidth: 1,
              }}>
              <Image
                source={require('../Assets/userPic.png')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginRight: 24,
                  marginVertical: 14,
                }}
              />
              <View style={{flex: 1}}>
                <Text style={{fontSize: 16, color: TEXT_COLOR}}>Item Name</Text>
              </View>
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => {
                  NavigateTo('EditProfile', navigation);
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.306}
                  height={21.199}
                  fill="#000000"
                  viewBox="0 0 21.306 21.199">
                  <Path
                    data-name="Path 1393"
                    d="M19.664 13.304a.531.531 0 00-.531.531v4.711a1.593 1.593 0 01-1.592 1.592H2.653a1.593 1.593 0 01-1.592-1.592V4.718a1.594 1.594 0 011.592-1.592h4.711a.531.531 0 100-1.061H2.653A2.656 2.656 0 000 4.718v13.828a2.656 2.656 0 002.653 2.653h14.889a2.656 2.656 0 002.658-2.653v-4.712a.531.531 0 00-.536-.53zm0 0"
                  />
                  <Path
                    data-name="Path 1394"
                    d="M19.985.699a2.388 2.388 0 00-3.377 0l-9.467 9.467a.531.531 0 00-.136.234L5.76 14.894a.531.531 0 00.653.653l4.494-1.245a.53.53 0 00.234-.136l9.466-9.467a2.39 2.39 0 000-3.377zM8.298 10.511l7.748-7.748 2.5 2.5-7.748 7.748zm-.5 1l2 2-2.761.765zm12.059-7.564l-.563.563-2.5-2.5.563-.563a1.326 1.326 0 011.876 0l.623.623a1.328 1.328 0 01.002 1.878zm0 0"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
            <EditProfileHeadings
              text={'adam@gmail.com'}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.671}
                  height={21.671}
                  fill={TEXT_COLOR}
                  viewBox="0 0 25.671 25.671">
                  <G data-name="025---Mail-Chat">
                    <Path d="M20.537 0H5.134A5.14 5.14 0 000 5.134v11.124a5.14 5.14 0 005.134 5.134h12.041l3.592 4.008a.848.848 0 00.621.273.863.863 0 00.391-.095.843.843 0 00.455-.91l-.55-3.426a5.2 5.2 0 003.987-4.982V5.134A5.14 5.14 0 0020.537 0zm0 .856a4.257 4.257 0 012.669.941l-8.918 8.592-.265.257a1.719 1.719 0 01-2.374 0L2.465 1.8A4.257 4.257 0 015.134.856zM.856 16.258V5.134a4.258 4.258 0 011-2.738l8.617 8.3L1.852 19a4.26 4.26 0 01-1-2.738zm20.618 4.15a.853.853 0 00-.636.964l.56 3.446-3.586-4a.856.856 0 00-.637-.282H5.134a4.255 4.255 0 01-2.67-.941l8.624-8.307a2.534 2.534 0 003.495 0l8.6 8.284a4.357 4.357 0 01-1.708.839zm3.341-4.15a4.21 4.21 0 01-1.015 2.717L15.2 10.7l8.616-8.3a4.257 4.257 0 011 2.738z" />
                    <Path
                      data-name="Shape"
                      d="M6.418 2.567h5.99a.428.428 0 100-.856h-5.99a.428.428 0 000 .856z"
                    />
                    <Ellipse
                      cx={1.113}
                      cy={0.556}
                      rx={1.113}
                      ry={0.556}
                      transform="translate(3.533 2.017)"
                    />
                  </G>
                </Svg>
              }
            />
            <EditProfileHeadings
              text={'5454 54 65 232'}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21}
                  height={21.823}
                  fill={TEXT_COLOR}
                  viewBox="0 0 19 33.823">
                  <Path
                    data-name="Path 1395"
                    d="M3.555 4.575H3.54a.43.43 0 000 .86h.015a.43.43 0 100-.86z"
                  />
                  <Path
                    data-name="Path 1396"
                    d="M5.29 19.628a.429.429 0 00.306-.128l5.945-6.015a.43.43 0 10-.612-.6L4.984 18.9a.43.43 0 00.306.732z"
                  />
                  <Path
                    data-name="Path 1397"
                    d="M8.934 18.79a.43.43 0 00.608 0l3.039-3.039a.43.43 0 10-.608-.608l-3.039 3.039a.43.43 0 000 .608z"
                  />
                  <Path
                    data-name="Path 1398"
                    d="M9.5 31.137a1.186 1.186 0 10-1.186-1.186A1.186 1.186 0 009.5 31.137zm0-1.512a.326.326 0 11-.326.326.326.326 0 01.326-.326z"
                  />
                  <Path
                    data-name="Path 1399"
                    d="M15.546 0H3.453A3.457 3.457 0 000 3.453V30.37a3.457 3.457 0 003.453 3.453h12.093a3.457 3.457 0 003.453-3.453V3.453A3.457 3.457 0 0015.546 0zm2.593 30.37a2.6 2.6 0 01-2.593 2.593H3.453A2.6 2.6 0 01.86 30.37v-3.122h17.28zm0-25.8H5.093a.43.43 0 100 .86h13.046v20.958H.859V5.435h1.179a.43.43 0 000-.86H.859V3.453A2.6 2.6 0 013.452.86h12.093a2.6 2.6 0 012.593 2.593z"
                  />
                </Svg>
              }
            />
          </View>
          <View
            style={{
              marginVertical: 24,
              borderRadius: 12,
              backgroundColor: WHITE,
              padding: 10,
              marginHorizontal: 20,
              shadowColor: '#828282',
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              marginBottom: 50,
            }}>
            <EditProfileHeadingsTouchAble
              onPress={() => {
                NavigateTo('Addresses', navigation);
              }}
              text={'Addresses'}
              svg={
                <Svg
                  data-name="location (1)"
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.084}
                  height={21.083}
                  fill="#000000"
                  viewBox="0 0 31.084 31.083">
                  <Path
                    data-name="Path 1400"
                    d="M19.405 8.487a3.864 3.864 0 10-3.864 3.864 3.863 3.863 0 003.864-3.864zm-6.812 0a2.948 2.948 0 112.949 2.949 2.948 2.948 0 01-2.949-2.949z"
                  />
                  <Path
                    data-name="Path 1401"
                    d="M31.053 30.462l-3.73-9.778a.458.458 0 00-.427-.294h-7.059l.129-.209c2.716-4.5 4.083-8.431 4.064-11.691a8.488 8.488 0 10-16.976 0c-.02 3.261 1.347 7.2 4.064 11.692l.129.209h-7.06a.458.458 0 00-.427.294L.03 30.462a.457.457 0 00.427.621h30.169a.457.457 0 00.427-.621zM7.969 8.488a7.573 7.573 0 0115.145 0c.039 6.5-6.037 14.516-7.573 16.439-1.535-1.921-7.611-9.935-7.572-16.439zm7.224 17.46a.458.458 0 00.7 0 48.555 48.555 0 003.373-4.643h7.317l.586 1.536-14.3 5.086-5.1-6.622h4.05a48.557 48.557 0 003.373 4.644zm-2.342 2.954l8.53-3.033 3.309 4.3H9.29zm-8.348-7.6h2.113l5.345 6.945-5.4 1.92H1.122zm21.341 8.866l-3.553-4.627 5.2-1.85 2.469 6.473z"
                  />
                </Svg>
              }
            />

            <EditProfileHeadingsTouchAble
              onPress={() => {
                NavigateTo('FavoriteMenu', navigation);
              }}
              text={'Favorite Menus '}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.444}
                  height={21.858}
                  fill="#000000"
                  viewBox="0 0 23.444 20.858">
                  <Path d="M11.722 20.858a1.375 1.375 0 01-.906-.341c-.947-.828-1.86-1.606-2.666-2.293a49.578 49.578 0 01-5.821-5.463A8.726 8.726 0 010 7.046a7.328 7.328 0 011.86-5A6.3 6.3 0 016.549 0a5.9 5.9 0 013.684 1.272 7.536 7.536 0 011.489 1.555 7.537 7.537 0 011.489-1.555A5.9 5.9 0 0116.9 0a6.3 6.3 0 014.69 2.041 7.327 7.327 0 011.86 5 8.725 8.725 0 01-2.325 5.712 49.573 49.573 0 01-5.82 5.463c-.807.688-1.722 1.467-2.671 2.3a1.376 1.376 0 01-.906.34zM6.549 1.373a4.946 4.946 0 00-3.68 1.6 5.961 5.961 0 00-1.5 4.074 7.342 7.342 0 002.009 4.836 48.788 48.788 0 005.654 5.294c.809.689 1.725 1.47 2.679 2.3.96-.836 1.878-1.618 2.688-2.309a48.8 48.8 0 005.654-5.294 7.343 7.343 0 002.009-4.836 5.961 5.961 0 00-1.5-4.074 4.946 4.946 0 00-3.68-1.6 4.555 4.555 0 00-2.844.984 6.664 6.664 0 00-1.585 1.834.867.867 0 01-1.489 0 6.658 6.658 0 00-1.571-1.824 4.555 4.555 0 00-2.843-.984zm0 0" />
                </Svg>
              }
            />
            {/* <EditProfileHeadingsTouchAble
              onPress={() => {
                NavigateTo('Payment', navigation);
              }}
              text={'Payment Options'}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.768}
                  height={21.737}
                  fill="#000000"
                  viewBox="0 0 30.768 30.737">
                  <G data-name="Group 365">
                    <G data-name="Group 364">
                      <Path
                        data-name="Path 1402"
                        d="M30.553 11.037L27.116 2.1A3.279 3.279 0 0022.877.22L22.8.249 5.626 7.37a3.263 3.263 0 00-1.813 4.176l.472 1.261H3.2a3.205 3.205 0 00-3.2 3.2v11.528a3.205 3.205 0 003.2 3.2h21.774a3.205 3.205 0 003.2-3.2V16.008a3.148 3.148 0 00-.046-.518l.595-.241a3.291 3.291 0 001.83-4.212zM3.2 13.831h21.774a2.174 2.174 0 012.164 2.049H1.037A2.174 2.174 0 013.2 13.831zm5.149-3.086l3.424-1.713.7 1.761-3.418 1.712zm18.8 16.79a2.18 2.18 0 01-2.177 2.177H3.2a2.18 2.18 0 01-2.177-2.177v-6.532h26.128zm0-7.556H1.025v-3.074h26.126zm1.189-5.676l-.535.217a3.2 3.2 0 00-2.831-1.713H10.744l2.615-1.308a.512.512 0 00.247-.649l-1.087-2.715a.512.512 0 00-.666-.285l-.039.018-4.343 2.172a.512.512 0 00-.246.649l.847 2.118H5.379l-.607-1.618A2.243 2.243 0 016.018 8.32L23.2 1.199a2.251 2.251 0 012.942 1.217l.022.054 3.436 8.938a2.262 2.262 0 01-1.26 2.894z"
                      />
                      <Path
                        data-name="Path 1403"
                        d="M18.427 28.272a3.074 3.074 0 003.088 0 3.074 3.074 0 100-5.316 3.074 3.074 0 10-3.088 5.316zm3.945-4.582a2.028 2.028 0 01.68-.125 2.049 2.049 0 11-.68 3.973 3.062 3.062 0 000-3.848zm-.857.583a2.012 2.012 0 010 2.682 2.012 2.012 0 01.003-2.682zm-1.537-.708a2.027 2.027 0 01.68.125 3.061 3.061 0 000 3.848 2.046 2.046 0 11-.68-3.973z"
                      />
                      <Path
                        data-name="Rectangle 1598"
                        d="M22.026 11.509l-.416-.937L26.497 8.4l.416.937z"
                      />
                      <Path
                        data-name="Rectangle 1599"
                        d="M18.347 9.489l7.059-3.257.429.93-7.059 3.257z"
                      />
                    </G>
                  </G>
                </Svg>
              }
            /> */}
            <EditProfileHeadingsTouchAble
              text={'Change Password'}
              lastItem={true}
              onPress={() => {
                NavigateTo('ChangePassword', navigation);
              }}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.487}
                  height={21.951}
                  fill="#000000"
                  viewBox="0 0 21.487 28.951">
                  <Path
                    data-name="Path 1404"
                    d="M19.225 11.14V8.482a8.482 8.482 0 10-16.963 0v2.658A2.832 2.832 0 000 13.91v3.21a.566.566 0 101.131 0v-3.21a1.7 1.7 0 011.7-1.7H18.66a1.7 1.7 0 011.7 1.7v12.214a1.7 1.7 0 01-1.131 1.6v-3.41a.566.566 0 00-1.131 0v3.506H2.827a1.7 1.7 0 01-1.7-1.7v-4.464a.566.566 0 10-1.131 0v4.467a2.83 2.83 0 002.827 2.827H18.66a2.83 2.83 0 002.827-2.827V13.91a2.832 2.832 0 00-2.262-2.77zm-12.779-.057v-2.6a4.3 4.3 0 118.595 0v2.6zm9.726 0v-2.6a5.428 5.428 0 10-10.857 0v2.6H3.393v-2.6a7.351 7.351 0 1114.7 0v2.6zm0 0"
                  />
                  <Path
                    data-name="Path 1405"
                    d="M.565 19.931A.565.565 0 100 19.365a.565.565 0 00.565.565zm0 0"
                  />
                  <Path
                    data-name="Path 1406"
                    d="M10.743 25.897a1.7 1.7 0 001.7-1.7v-3a3.053 3.053 0 10-3.393-.01v3.012a1.7 1.7 0 001.693 1.698zm-1.915-7.243a1.923 1.923 0 112.79 1.715.565.565 0 00-.31.5v3.327a.566.566 0 11-1.131 0v-3.334a.565.565 0 00-.306-.5 1.917 1.917 0 01-1.043-1.708zm0 0"
                  />
                  <Path
                    data-name="Path 1407"
                    d="M18.659 22.561a.566.566 0 10-.4-.166.568.568 0 00.4.166zm0 0"
                  />
                </Svg>
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
