import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {ASYNCKEYS} from "../Helper/Constant/constant";
import COLORS from "../Helper/Constant/color.js";

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.setNavigation();
  }

  setNavigation = async () => {
      const userToken = await AsyncStorage.getItem(ASYNCKEYS.IS_LOGIN);
      this.props.navigation.navigate(userToken ? 'Profile' : 'Login');
  };

  render() {
    return (
      <View style={{flex:1,backgroundColor:COLORS.WHITE}}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
