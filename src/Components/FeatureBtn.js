import React from 'react';
import {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {FORTH, PRIMARY, WHITE} from '../Constants/Colors';

export default function FeatureBtn({svg}) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        if (selected === true) {
          setSelected(false);
        } else if (selected === false) {
          setSelected(true);
        }
      }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: WHITE,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: FORTH,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      {selected ? (
        <View
          style={{
            width: 25,
            height: 25,
            backgroundColor: PRIMARY,
            borderRadius: 25,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={13.224}
            height={9.595}
            viewBox="0 0 16.224 12.595">
            <Path
              data-name="Icon ionic-ios-checkmark"
              d="M15.612 1.857L14.375.584a.266.266 0 00-.2-.084h0a.255.255 0 00-.2.084L5.397 9.225 2.276 6.104a.272.272 0 00-.394 0L.63 7.356a.28.28 0 000 .4l3.938 3.938a1.245 1.245 0 00.823.4 1.3 1.3 0 00.816-.387h.005l9.4-9.45a.3.3 0 000-.4z"
              fill="#fff"
              stroke="#fff"
            />
          </Svg>
        </View>
      ) : null}
      {svg}
    </TouchableOpacity>
  );
}
