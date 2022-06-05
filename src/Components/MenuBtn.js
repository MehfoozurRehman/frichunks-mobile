import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FORTH, WHITE} from '../Constants/Colors';

export default function MenuBtn({placeholder, svg, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 150,
        height: 140,
        backgroundColor: WHITE,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: FORTH,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      {svg}
      <Text style={{marginTop: 15}}>{placeholder}</Text>
    </TouchableOpacity>
  );
}
