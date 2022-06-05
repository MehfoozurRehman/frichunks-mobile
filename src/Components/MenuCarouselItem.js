import React from 'react';
import {Text, View} from 'react-native';
import {FORTH, PRIMARY, TEXT_COLOR} from '../Constants/Colors';
import Button from './Button';
import MenuItem from './MenuItem';
import {useNavigation} from '@react-navigation/native';

export default function MenuCarouselItem({
  item,
  index,
  button,
  title,
  istitle,
}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#f6f6f6',
        borderRadius: 5,
        marginVertical: 10,
        padding: 20,
        position: 'relative',
        marginBottom: button ? 50 : 10,
      }}>
      <Text
        style={{
          textAlign: 'right',
          fontSize: 18,
          fontWeight: 'bold',
          color: PRIMARY,
          marginBottom: 20,
        }}>
        {istitle ? title : item.title}
      </Text>
      <MenuItem variant="primary" />
      <MenuItem variant="primary" />
      <MenuItem variant="primary" />
      <MenuItem variant="primary" />
      <MenuItem variant="primary" />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: button ? 30 : 0,
          marginTop: button ? 0 : 20,
        }}>
        <Text style={{fontSize: 15, color: TEXT_COLOR, fontWeight: 'bold'}}>
          Price
        </Text>
        <Text style={{fontSize: 15, color: FORTH, fontWeight: 'bold'}}>
          Rs 43,00,000
        </Text>
      </View>
      {button ? (
        <View
          style={{
            position: 'absolute',
            bottom: -30,
            width: '100%',
            alignSelf: 'center',
            paddingHorizontal: 30,
          }}>
          <Button
            placeholder="Select"
            veriant="primary_outlined"
            onPress={() => {
              navigation.navigate('Cart');
            }}
          />
        </View>
      ) : null}
    </View>
  );
}
