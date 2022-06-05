import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import Svg, {Path} from 'react-native-svg';

export default function InputBox({placeholder, variant, secureTextEntry, svg}) {
  const [focuse, setFocuse] = useState(false);
  if (variant === 'light') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 45,
          borderRadius: 5,
          backgroundColor: WHITE,
          paddingHorizontal: 15,
          borderWidth: focuse ? 1 : 0,
          borderColor: PRIMARY,
          marginVertical: 8,
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#707070"
          secureTextEntry={secureTextEntry}
          style={{color: TEXT_COLOR}}
          onPressIn={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
      </TouchableOpacity>
    );
  } else if (variant === 'primary') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 45,
          borderRadius: 5,
          backgroundColor: 'rgba(255,255,255,.9)',
          paddingHorizontal: 15,
          borderWidth: focuse ? 1 : 0,
          borderColor: PRIMARY,
          marginVertical: 8,
        }}
        onFocus={() => {
          setFocuse(true);
        }}
        onBlur={() => {
          setFocuse(false);
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#707070"
          secureTextEntry={secureTextEntry}
          style={{color: TEXT_COLOR}}
          onFocus={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
      </TouchableOpacity>
    );
  } else if (variant === 'gray') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          maxHeight: 45,
          borderRadius: 5,
          backgroundColor: '#f6f6f6',
          paddingHorizontal: 15,
          borderWidth: focuse ? 1 : 0,
          borderColor: PRIMARY,
          marginVertical: 8,
        }}
        onFocus={() => {
          setFocuse(true);
        }}
        onBlur={() => {
          setFocuse(false);
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#707070"
          secureTextEntry={secureTextEntry}
          style={{color: TEXT_COLOR}}
          onFocus={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
      </TouchableOpacity>
    );
  } else if (variant === 'search') {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          flex: 1,
          height: 45,
          borderRadius: 5,
          backgroundColor: '#f6f6f6',
          paddingHorizontal: 15,
          borderWidth: focuse ? 1 : 0,
          borderColor: PRIMARY,
          marginVertical: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={18.354}
          height={18.358}
          style={{marginRight: 10}}
          viewBox="0 0 18.354 18.358">
          <Path
            data-name="Icon ionic-ios-search"
            d="M18.138 17.029l-5.1-5.152a7.274 7.274 0 10-1.1 1.118L17 18.114a.786.786 0 001.109.029.791.791 0 00.029-1.114zM7.317 13.058a5.744 5.744 0 114.063-1.682 5.709 5.709 0 01-4.063 1.682z"
            fill="#fe724c"
          />
        </Svg>
        <TextInput
          style={{width: '100%'}}
          placeholder={placeholder}
          placeholderTextColor="#707070"
          secureTextEntry={secureTextEntry}
          style={{color: TEXT_COLOR}}
          onFocus={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
      </TouchableOpacity>
    );
  } else if (variant === 'GrayWithSvg') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          maxHeight: 45,
          borderRadius: 5,
          backgroundColor: '#f6f6f6',
          paddingHorizontal: 15,
          borderWidth: focuse ? 1 : 0,
          borderColor: PRIMARY,
          marginVertical: 8,
        }}
        onFocus={() => {
          setFocuse(true);
        }}
        onBlur={() => {
          setFocuse(false);
        }}>
        {svg}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#707070"
          secureTextEntry={secureTextEntry}
          style={{marginLeft: 20, flex: 1, color: TEXT_COLOR}}
          onFocus={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
      </TouchableOpacity>
    );
  } else if (variant === 'searchWhite') {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          flex: 1,
          height: 45,
          borderRadius: 5,
          backgroundColor: WHITE,
          paddingHorizontal: 15,
          borderWidth: focuse ? 1 : 0,
          borderColor: PRIMARY,
          marginVertical: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={18.354}
          height={18.358}
          style={{marginRight: 10}}
          viewBox="0 0 18.354 18.358">
          <Path
            data-name="Icon ionic-ios-search"
            d="M18.138 17.029l-5.1-5.152a7.274 7.274 0 10-1.1 1.118L17 18.114a.786.786 0 001.109.029.791.791 0 00.029-1.114zM7.317 13.058a5.744 5.744 0 114.063-1.682 5.709 5.709 0 01-4.063 1.682z"
            fill="#fe724c"
          />
        </Svg>
        <TextInput
          style={{width: '100%'}}
          placeholder={placeholder}
          placeholderTextColor="#707070"
          secureTextEntry={secureTextEntry}
          onFocus={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
      </TouchableOpacity>
    );
  }
}
