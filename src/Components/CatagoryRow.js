import React from 'react';
import {View, Text} from 'react-native';
import {PRIMARY} from '../Constants/Colors';
import ItemCarousel from './ItemCarousel';

export default function CatagoryRow({catagoryName, navigation}) {
  return (
    <View style={{width: '100%', marginBottom: 10}}>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 18,
          fontWeight: 'bold',
          color: PRIMARY,
        }}>
        {catagoryName}
      </Text>
      <ItemCarousel navigation={navigation} />
    </View>
  );
}
