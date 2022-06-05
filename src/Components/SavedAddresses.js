import React, {useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {SECONDARY} from '../Constants/Colors';
import Navigate from '../Navigation/Navigate';
import Svg, {G, Path, Image} from 'react-native-svg';

export default function SavedAddresses({navigation, path}) {
  const {NavigateTo} = Navigate();
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        NavigateTo(path ? 'Addresses' : 'CheckOut', navigation);
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 18,
        marginHorizontal: 20,
        borderWidth: path ? 1 : 0,
        borderRadius: 8,
        borderColor: '#FF6F00',
        marginVertical: 10,
        backgroundColor: path ? '#ffffff' : '#f9f9f9',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Plot # 43 , Phase 5, DHA</Text>
        {path ? (
          <TouchableOpacity
            onPress={() => {
              NavigateTo('Addresses', navigation);
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={21.306}
              height={21.199}
              fill="#000000"
              viewBox="0 0 21.306 21.199">
              <Path
                data-name="Path 1393"
                d="M19.664 13.304a.531.531 0 00-.531.531v4.711a1.593 1.593 0 01-1.592 1.592H2.653a1.593 1.593 0 01-1.592-1.592V4.718a1.594 1.594 0 011.592-1.592h4.711a.531.531 0 100-1.061H2.653A2.656 2.656 0 000 4.718v13.828a2.656 2.656 0 002.653 2.653h14.889a2.656 2.656 0 002.658-2.653v-4.712a.531.531 0 00-.536-.53zm0 0"
              />
              <Path
                data-name="Path 1394"
                d="M19.985.699a2.388 2.388 0 00-3.377 0l-9.467 9.467a.531.531 0 00-.136.234L5.76 14.894a.531.531 0 00.653.653l4.494-1.245a.53.53 0 00.234-.136l9.466-9.467a2.39 2.39 0 000-3.377zM8.298 10.511l7.748-7.748 2.5 2.5-7.748 7.748zm-.5 1l2 2-2.761.765zm12.059-7.564l-.563.563-2.5-2.5.563-.563a1.326 1.326 0 011.876 0l.623.623a1.328 1.328 0 01.002 1.878zm0 0"
              />
            </Svg>
          </TouchableOpacity>
        ) : null}
      </View>

      <Text style={{color: SECONDARY}}>Lahore</Text>
    </TouchableOpacity>
  );
}
