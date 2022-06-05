import React from 'react';
import {View, Text, Image} from 'react-native';
import {TEXT_COLOR} from '../Constants/Colors';
import RadioBtn from './RadioBtn';

export default function AddOn({}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 1,
        marginVertical: 8,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../Assets/menu_item_image.png')}
          style={{width: 40, height: 40, borderRadius: 5}}
        />
        <Text
          style={{
            fontSize: 15,
            color: TEXT_COLOR,
            fontWeight: 'bold',
            marginLeft: 15,
          }}>
          Choice 1
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            color: '#BFBFBF',
            marginRight: 15,
          }}>
          $3
        </Text>
        <RadioBtn />
      </View>
    </View>
  );
}
