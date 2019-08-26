import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Dimensions,
  StatusBar,
  AsyncStorage
} from "react-native";
import styles from "./styles";
import GeneralTextfield from '../../Helper/Components/GeneralTextfield'
import GeneralButton from '../../Helper/Components/GeneralButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { percentageOfDeviceWidth, percentageOfDeviceHeight } from "../../Helper/Constant/constant";



import COLORS from "../../Helper/Constant/color.js";
import {ASYNCKEYS} from "../../Helper/Constant/constant";
type Props = {};
var userDataArr;

 export default class Login extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {txtEmail:'',txtPass:''}
  }

  /* ------------ Lifecycle methods ------------  */
  async componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }


/* ------------- Custom methods -------------  */
  validateEmail = (text) => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(text) === false){
          return false;
      }
      else {
          return true;
      }
  }

  /* ------------- Click Events -------------  */
  async loginPress(){
      this.props.navigation.navigate('Profile');
  }

  /* ------------ render Event ------------  */
  render() {
      return (

          <View style={styles.container}>

                <Text style={styles.titleLogin}>Login</Text>

                <GeneralTextfield
                    placeholder={'Email'}
                    onChangeText={(txtEmail) => this.setState({txtEmail})}
                    marginTop={percentageOfDeviceHeight(12)}
                    widthprop={percentageOfDeviceWidth(75)}
                    value={this.state.txtEmail}/>

                <GeneralTextfield
                    placeholder={'Password'}
                    onChangeText={(txtPass) => this.setState({txtPass})}
                    marginTop={percentageOfDeviceHeight(3)}
                    widthprop={percentageOfDeviceWidth(75)}
                    value={this.state.txtPass}
                    secureTextEntry={true}/>

                <GeneralButton
                    onPress={() => this.loginPress()}
                    backgroundColor={COLORS.GREEN}
                    title={'Login'}
                    borderRadius={10}
                    titleColor={COLORS.WHITE}
                />

          </View>

      );
    }
}
