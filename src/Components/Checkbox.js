import React from 'react';
import {View} from 'react-native';
import {PRIMARY, TEXT_COLOR} from '../Constants/Colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function Checkbox({placeholder}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <BouncyCheckbox
        size={25}
        fillColor={PRIMARY}
        unfillColor="#FFFFFF"
        onPress={() => {}}
        text={placeholder}
        textStyle={{
          fontSize: 16,
          color: TEXT_COLOR,
          textDecorationLine: 'none',
        }}
      />
    </View>
  );
}
