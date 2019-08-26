
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions,Alert,TouchableWithoutFeedback} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { width, height } = Dimensions.get("window");
import { percentageOfDeviceWidth, percentageOfDeviceHeight } from "../Constant/constant";
import COLORS from "../Constant/color.js";

const options = {};

type Props = {};
export default class GeneralButton extends Component<Props> {

  constructor(props){
      super(props);
  }

  render() {
    const {onPress,backgroundColor,title,borderRadius,titleColor} = this.props;
    return (
       <TouchableWithoutFeedback
           onPress={onPress}>
           <View style={[styles.button,{backgroundColor:backgroundColor,borderRadius:borderRadius}]}>
               <Text style={[styles.buttonTitle,{color:titleColor}]}>{title}</Text>
           </View>
       </TouchableWithoutFeedback>
   );
  }
}

const styles = StyleSheet.create({
  button:{
      marginTop:percentageOfDeviceHeight(3),
      width:percentageOfDeviceWidth(75),
      height:percentageOfDeviceHeight(6),
      justifyContent:'center',
      alignItems:'center',
      borderColor:COLORS.BLACK,
      borderWidth:1.0
    },
  buttonTitle:{
    fontSize:20,
  },

});
