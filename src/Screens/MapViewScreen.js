import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import {Height, Width} from '../Constants/Constants';
import Svg, {G, Path} from 'react-native-svg';
import Button from '../Components/Button';
import {WHITE} from '../Constants/Colors';

const MapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];

export default function MapViewScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapStyle}
      />
      <View style={{position: 'absolute', width: Width, height: Height}}>
        <Header
          light={false}
          placeholder=""
          backPath="Addresses"
          navigation={navigation}
        />
        <View
          style={{
            paddingHorizontal: 20,
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: 50,
          }}>
          <View style={{height: 60, display: 'flex', flexDirection: 'row'}}>
            <ScrollView style={{flex: 1}}>
              <InputBox variant="searchWhite" placeholder="Search" />
            </ScrollView>
            <TouchableOpacity
              style={{
                height: 45,
                width: 45,
                backgroundColor: WHITE,
                marginVertical: 8,
                marginLeft: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={23}
                viewBox="0 0 23 23">
                <Path
                  data-name="Icon material-my-location"
                  d="M11.5 7.318a4.182 4.182 0 104.182 4.182A4.181 4.181 0 0011.5 7.318zm9.346 3.136a9.4 9.4 0 00-8.3-8.3V0h-2.091v2.154a9.4 9.4 0 00-8.3 8.3H0v2.091h2.154a9.4 9.4 0 008.3 8.3V23h2.091v-2.154a9.4 9.4 0 008.3-8.3H23v-2.091zM11.5 18.818a7.318 7.318 0 117.318-7.318 7.313 7.313 0 01-7.318 7.318z"
                  fill="#fe724c"
                />
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={{height: 60}}>
            <Button veriant="primary" placeholder="Save Location" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Width,
    height: Height,
  },
});
