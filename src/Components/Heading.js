import React from 'react';
import {Text} from 'react-native';
import {PRIMARY, THIRD, WHITE} from '../Constants/Colors';

export default function Heading({varinat, placeholder}) {
  if (varinat === 'white') {
    return (
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: WHITE,
          marginBottom: 10,
        }}>
        {placeholder}
      </Text>
    );
  } else if (varinat === 'yellow') {
    return (
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: THIRD,
          marginBottom: 10,
        }}>
        {placeholder}
      </Text>
    );
  } else if (varinat === 'primary') {
    return (
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: PRIMARY,
          marginBottom: 10,
        }}>
        {placeholder}
      </Text>
    );
  }
}
