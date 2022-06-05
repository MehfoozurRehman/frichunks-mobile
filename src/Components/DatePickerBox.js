import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {PRIMARY, TEXT_COLOR} from '../Constants/Colors';
import DatePicker from 'react-native-date-picker';
import Button from './Button';

export default function DatePickerBox() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <TouchableOpacity
        style={{
          flex: 1,
          height: 45,
          borderRadius: 5,
          backgroundColor: '#f6f6f6',
          paddingHorizontal: 15,
          borderWidth: 0,
          borderColor: PRIMARY,
          marginVertical: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
        onPress={() => {
          setShow(true);
        }}>
        <Text style={{fontSize: 14, color: TEXT_COLOR}}>
          {date.toUTCString()}
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
          <DatePicker mode="date" date={date} onDateChange={setDate} />
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
