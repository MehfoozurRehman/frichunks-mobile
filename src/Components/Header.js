import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';

export default function Header({light, placeholder, backPath, navigation}) {
  return (
    <View
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(backPath);
        }}
        style={{
          width: 50,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={20.562}
          height={15.501}
          fill={light ? WHITE : TEXT_COLOR}
          viewBox="0 0 17.562 13.501">
          <Path
            data-name="Icon ionic-ios-arrow-round-back"
            d="M7.334.258a.919.919 0 01.007 1.294L3.073 5.834l13.693.143a.715.715 0 01.8.779.818.818 0 01-.8.907H3.073l4.275 4.285a.925.925 0 01-.007 1.294.91.91 0 01-1.287-.007L.26 7.395a1.026 1.026 0 01-.19-.288.872.872 0 01-.07-.352.916.916 0 01.26-.64L6.054.279a.9.9 0 011.28-.021z"
          />
        </Svg>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: light ? WHITE : PRIMARY,
        }}>
        {placeholder}
      </Text>
    </View>
  );
}
