import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Height, USER_NAME} from '../Constants/Constants';
import Heading from '../Components/Heading';
import {TEXT_COLOR} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import TopTabNavigation from '../Navigation/TopTabNavigation';
import Navigate from '../Navigation/Navigate';

function HeaderDashboard({NavigateTo, navigation, path}) {
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
          NavigateTo(path, navigation);
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

export default class DashboardScreen extends Component {
  constructor() {
    super();
    this.state = {
      isOrdered: true,
      // please change this for showing which part of component
    };
  }
  componentDidMount() {
    const {ordered} = this.props.route.params;
    this.setState({
      isOrdered: ordered,
    });
  }
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <>
        {this.state.isOrdered ? (
          <View style={{height: Height, flex: 1, backgroundColor: '#FFFFFF'}}>
            <HeaderDashboard
              NavigateTo={NavigateTo}
              navigation={navigation}
              path={'Profile'}
            />
            <TopTabNavigation />
          </View>
        ) : (
          <ImageBackground
            source={require('../Assets/dashboard_background.png')}
            style={{height: Height, flex: 1}}>
            <HeaderDashboard
              NavigateTo={NavigateTo}
              navigation={navigation}
              path={'Register'}
            />
            <View style={{marginVertical: 20, paddingHorizontal: 20}}>
              <Text style={{fontSize: 14, color: TEXT_COLOR}}>
                Hi {USER_NAME}
              </Text>
              <Heading varinat="yellow" placeholder="Let's Order" />
              <TouchableOpacity
                style={{
                  backgroundColor: '#F6F6F6',
                  borderRadius: 5,
                  height: 120,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  NavigateTo('NewOrder', navigation);
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33.359}
                  height={33.359}
                  viewBox="0 0 33.359 33.359">
                  <G
                    data-name="Icon ionic-md-add-circle-outline"
                    fill="#ffca40">
                    <Path
                      data-name="Path 2254"
                      d="M14.995 25.26v-6.9h-6.9v-3.364h6.9v-6.9h3.368v6.9h6.9v3.368h-6.9v6.9z"
                    />
                    <Path
                      data-name="Path 2255"
                      d="M29.991 16.679a13.306 13.306 0 11-3.9-9.414 13.256 13.256 0 013.9 9.414m3.368 0a16.679 16.679 0 10-16.679 16.68 16.677 16.677 0 0016.679-16.68z"
                    />
                  </G>
                </Svg>
                <Text style={{fontSize: 14, color: TEXT_COLOR, marginTop: 10}}>
                  Place your First Order
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )}
      </>
    );
  }
}
