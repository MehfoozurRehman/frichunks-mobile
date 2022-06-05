import React from 'react';
import {Image} from 'react-native';

export default function Logo({light}) {
  return (
    <Image
      source={
        light
          ? require('../Assets/logo_light.png')
          : require('../Assets/logo.png')
      }
      style={{
        width: 175,
        height: 80,
        marginVertical: 50,
        alignSelf: 'center',
      }}
    />
  );
}
