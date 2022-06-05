import React from 'react';
import {View, Text} from 'react-native';
import {TEXT_COLOR} from '../Constants/Colors';

export default function NewOrderRow({placeholder, svg, input}) {
  return (
    <View>
      <Text
        style={{
          marginBottom: 3,
          marginTop: 10,
          fontSize: 14,
          color: TEXT_COLOR,
        }}>
        {placeholder}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {svg}
        {input}
      </View>
    </View>
  );
}
