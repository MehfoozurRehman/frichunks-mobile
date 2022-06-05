import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MenuCard from '../Components/MenuCard';
import {ScrollView, View} from 'react-native';
import Button from '../Components/Button';
import {WHITE} from '../Constants/Colors';

const Tab = createMaterialTopTabNavigator();

function BookedOrder({navigation}) {
  return (
    <>
      <ScrollView
        style={{flex: 1, backgroundColor: WHITE, paddingVertical: 30}}>
        <View style={{marginVertical: 20, marginHorizontal: 20}}>
          <MenuCard
            chairs={true}
            music={true}
            ballons={true}
            lights={true}
            table={true}
          />
          <MenuCard
            chairs={true}
            music={true}
            ballons={false}
            lights={true}
            table={true}
          />
          <MenuCard
            chairs={true}
            music={false}
            ballons={false}
            lights={true}
            table={true}
          />
          <MenuCard
            chairs={true}
            music={false}
            ballons={true}
            lights={true}
            table={true}
          />
          <MenuCard
            chairs={true}
            music={false}
            ballons={false}
            lights={true}
            table={true}
          />
          <MenuCard
            chairs={true}
            music={true}
            ballons={true}
            lights={true}
            table={true}
          />
        </View>
      </ScrollView>
      <View style={{height: 60, marginHorizontal: 20, marginBottom: 20}}>
        <Button
          veriant="primary"
          placeholder="Place Order"
          onPress={() => {
            navigation.navigate('NewOrder');
          }}
        />
      </View>
    </>
  );
}

function OrdersCompleted({navigation}) {
  return (
    <>
      <ScrollView
        style={{flex: 1, backgroundColor: WHITE, paddingVertical: 30}}>
        <View style={{marginVertical: 20, marginHorizontal: 20}}>
          <MenuCard
            chairs={true}
            music={true}
            ballons={true}
            lights={true}
            table={true}
          />
          <MenuCard
            chairs={true}
            music={true}
            ballons={false}
            lights={true}
            table={true}
          />
          <MenuCard
            chairs={true}
            music={false}
            ballons={false}
            lights={true}
            table={true}
          />
          <MenuCard
            chairs={true}
            music={false}
            ballons={true}
            lights={true}
            table={true}
          />
          <MenuCard
            chairs={true}
            music={false}
            ballons={false}
            lights={true}
            table={true}
          />
          <MenuCard
            chairs={true}
            music={true}
            ballons={true}
            lights={true}
            table={true}
          />
        </View>
      </ScrollView>
      {/* <View style={{height: 60, marginHorizontal: 20}}>
        <Button
          veriant="primary"
          placeholder="Place Order"
          onPress={() => {
            navigation.navigate('NewOrder');
          }}
        />
      </View> */}
    </>
  );
}
export default function TopTabNavigation() {
  return (
    <Tab.Navigator
      //   tabBarOptions={{
      //     activeTintColor: TEXT_COLOR,
      //     inactiveTintColor: TEXT_COLOR,
      //     tabStyle: {borderColor: TEXT_COLOR},
      //     style: {elevation: 0},

      //   }}
      tabBarOptions={{
        style: {
          backgroundColor: WHITE,
          elevation: 0,
          marginHorizontal: 20,
        },
        indicatorStyle: {
          borderBottomColor: WHITE,
          borderBottomWidth: 2,
        },
        // tabStyle: {
        //   fontSize: 13,
        // },
      }}>
      <Tab.Screen name="Booked Order" component={BookedOrder} />
      <Tab.Screen name="Orders Completed" component={OrdersCompleted} />
    </Tab.Navigator>
  );
}
