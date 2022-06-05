import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';

export default function Button({placeholder, onPress, veriant}) {
  if (veriant === 'primary') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          minHeight: 50,
          backgroundColor: PRIMARY,
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 8,
        }}
        onPress={onPress}>
        <Text style={{color: WHITE, fontSize: 16}}>{placeholder}</Text>
      </TouchableOpacity>
    );
  } else if (veriant === 'skip') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          minHeight: 45,
          backgroundColor: WHITE,
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 8,
        }}
        onPress={onPress}>
        <Text style={{color: TEXT_COLOR, fontSize: 16}}>{placeholder}</Text>
      </TouchableOpacity>
    );
  } else if (veriant === 'secondary') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          minHeight: 45,
          backgroundColor: '#7D7D7D',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 8,
        }}
        onPress={onPress}>
        <Text style={{color: WHITE, fontSize: 16}}>{placeholder}</Text>
      </TouchableOpacity>
    );
  } else if (veriant === 'primary_outlined') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          minHeight: 50,
          backgroundColor: PRIMARY,
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 8,
          borderWidth: 1,
          borderColor: WHITE,
        }}
        onPress={onPress}>
        <Text style={{color: WHITE, fontSize: 16}}>{placeholder}</Text>
      </TouchableOpacity>
    );
  } else if (veriant === 'third') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          minHeight: 50,
          backgroundColor: WHITE,
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 8,
        }}
        onPress={onPress}>
        <Text style={{color: PRIMARY, fontSize: 16}}>{placeholder}</Text>
      </TouchableOpacity>
    );
  }
}
