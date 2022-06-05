import React from 'react';
import {View} from 'react-native';
import {THIRD} from '../Constants/Colors';

export default function Features({svg, selected}) {
  return (
    <>
      {selected ? (
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: THIRD,
            borderRadius: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
          }}>
          {svg}
        </View>
      ) : null}
    </>
  );
}
