import React, {Component, useState} from 'react';
import {Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import {PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';

function SelectableMenuItem({
  name,
  catagory,
  img,
  // onPress,
  toPath,
  navigation,
}) {
  const [selected, setSelected] = useState(false);
  const [badgeValue, setBadgeValue] = useState(0);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(toPath);
      }}
      style={{
        width: 160,
        marginRight: 20,
        backgroundColor: WHITE,
        borderRadius: 5,
        marginVertical: 10,
        padding: 20,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: {
          width: 3,
          height: 0,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: selected ? 0 : 3,
        display: 'flex',
        alignItems: 'center',
        borderWidth: selected ? 1 : 0,
        borderColor: PRIMARY,
        position: 'relative',
      }}>
      {selected ? (
        <Text
          style={{
            position: 'absolute',
            top: 0,
            right: -10,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderColor: PRIMARY,
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: PRIMARY,
            color: WHITE,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {badgeValue}
        </Text>
      ) : null}
      <Image source={img} style={{width: 65, height: 65, borderRadius: 65}} />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: PRIMARY,
          marginTop: 8,
          marginBottom: 5,
          textTransform: 'capitalize',
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: TEXT_COLOR,
          textTransform: 'capitalize',
        }}>
        {catagory}
      </Text>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          setSelected(true);
          setBadgeValue(badgeValue + 1);
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={20.559}
          height={20.559}
          viewBox="0 0 16.559 16.559">
          <G data-name="Icon ionic-md-add-circle-outline" fill="#fe724c">
            <Path
              data-name="Path 2254"
              d="M12.539 9.116H9.116v3.423H7.444V9.116H4.021V7.444h3.423V4.021h1.672v3.423h3.423z"
            />
            <Path
              data-name="Path 2255"
              d="M8.279 1.672a6.6 6.6 0 11-4.673 1.934 6.58 6.58 0 014.673-1.934m0-1.672a8.279 8.279 0 108.279 8.279A8.278 8.278 0 008.279 0z"
            />
          </G>
        </Svg>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default class ItemCarousel extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <SelectableMenuItem
          name="item name"
          catagory="catagory"
          img={require('../Assets/menu_item_icon.png')}
          toPath="ItemDetails"
          onPress={() => {}}
          navigation={navigation}
        />
        <SelectableMenuItem
          name="item name"
          catagory="catagory"
          img={require('../Assets/menu_item_icon.png')}
          toPath="ItemDetails"
          onPress={() => {}}
          navigation={navigation}
        />
        <SelectableMenuItem
          name="item name"
          catagory="catagory"
          img={require('../Assets/menu_item_icon.png')}
          toPath="ItemDetails"
          onPress={() => {}}
          navigation={navigation}
        />
        <SelectableMenuItem
          name="item name"
          catagory="catagory"
          img={require('../Assets/menu_item_icon.png')}
          toPath="ItemDetails"
          onPress={() => {}}
          navigation={navigation}
        />
      </ScrollView>
    );
  }
}
