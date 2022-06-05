import React, {useState} from 'react';
import RadioButton from 'react-native-radio-button';
import {PRIMARY} from '../Constants/Colors';

export default function RadioBtn() {
  const [radioBtnSelected, setRadioBtnSelected] = useState(false);
  return (
    <RadioButton
      animation={'bounceIn'}
      isSelected={radioBtnSelected}
      onPress={() => {
        if (radioBtnSelected === true) {
          setRadioBtnSelected(false);
        } else if (radioBtnSelected === false) {
          setRadioBtnSelected(true);
        }
      }}
      size={14}
      innerColor={PRIMARY}
      outerColor={PRIMARY}
    />
  );
}
