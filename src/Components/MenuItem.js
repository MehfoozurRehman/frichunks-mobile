import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';

export default function MenuItem({lastItem, variant, onPress}) {
  if (variant === 'primary') {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#DBDBDB',
          borderBottomWidth: lastItem ? 0 : 1,
          marginBottom: lastItem ? 0 : 15,
          paddingBottom: lastItem ? 0 : 15,
        }}>
        <Image
          source={require('../Assets/menu_item_icon.png')}
          style={{width: 50, height: 50, borderRadius: 50, marginRight: 10}}
        />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: PRIMARY}}>
            Item Name
          </Text>
          <Text style={{fontSize: 11, color: TEXT_COLOR}}>Catagory</Text>
        </View>
      </View>
    );
  } else if (variant === 'secondary') {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#DBDBDB',
          borderBottomWidth: lastItem ? 0 : 1,
          marginBottom: lastItem ? 0 : 15,
          paddingBottom: lastItem ? 0 : 15,
        }}>
        <Image
          source={require('../Assets/menu_item_icon.png')}
          style={{width: 50, height: 50, borderRadius: 50, marginRight: 10}}
        />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: WHITE}}>
            Item Name
          </Text>
          <Text style={{fontSize: 11, color: PRIMARY}}>Catagory</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={28.36}
            height={28.36}
            viewBox="0 0 28.36 28.36">
            <G data-name="Icon ionic-md-add-circle-outline" fill="#fdfdfe">
              <Path
                data-name="Path 2254"
                d="M17.112 18.543l-2.932-2.932-2.932 2.932-1.432-1.432 2.932-2.931-2.93-2.931 1.431-1.432 2.932 2.931 2.93-2.93 1.433 1.431-2.932 2.932 2.932 2.932z"
              />
              <Path
                data-name="Path 2255"
                d="M19.837 8.52a8 8 0 11-5.657-2.344 7.969 7.969 0 015.657 2.345m1.432-1.432a10.027 10.027 0 10.003 14.18 10.025 10.025 0 00-.003-14.18z"
              />
            </G>
          </Svg>
        </TouchableOpacity>
      </View>
    );
  }
}
