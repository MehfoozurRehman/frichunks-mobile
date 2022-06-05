import React from 'react';
import {View, Text} from 'react-native';

export default function HeaderDashboard({NavigateTo, navigation}) {
  return (
    <View
      style={{
        paddingVertical: 20,
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        onPress={() => {
          NavigateTo('Profile', navigation);
        }}>
        <Image
          source={require('../Assets/userPic.png')}
          style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
      <Image
        source={require('../Assets/logo.png')}
        style={{width: 110, height: 50}}
      />
    </View>
  );
}
