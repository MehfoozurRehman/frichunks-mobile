import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {PRIMARY, THIRD, WHITE} from '../Constants/Colors';
import DatePicker from 'react-native-date-picker';
import Button from './Button';
import Svg, {Path} from 'react-native-svg';

export default function TimePickerBox() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <TouchableOpacity
        style={{
          flex: 1,
          height: 45,
          borderRadius: 5,
          // backgroundColor: '#f6f6f6',
          paddingHorizontal: 15,
          borderWidth: 1,
          borderColor: PRIMARY,
          marginVertical: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          setShow(true);
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          style={{marginRight: 15}}
          viewBox="0 0 18 18">
          <Path
            data-name="Icon material-access-time"
            d="M8.991 0A9 9 0 1018 9a9 9 0 00-9.009-9zM9 16.2A7.2 7.2 0 1116.2 9 7.2 7.2 0 019 16.2zm.45-11.7H8.1v5.4l4.725 2.835.675-1.107-4.05-2.4z"
            fill="#ca4041"
          />
        </Svg>
        <Text style={{fontSize: 14, color: PRIMARY}}>
          {date.toLocaleTimeString()}
        </Text>
      </TouchableOpacity>
      {show ? (
        <View
          style={{
            backgroundColor: '#ffffff',
            position: 'absolute',
            borderRadius: 5,
            zIndex: 1,
            alignItems: 'center',
            width: '100%',
          }}>
          <DatePicker mode="time" date={date} onDateChange={setDate} />
          <View style={{width: '60%'}}>
            <Button
              veriant="primary"
              placeholder="Save"
              onPress={() => {
                setShow(false);
              }}
            />
          </View>
        </View>
      ) : null}
    </>
  );
}
