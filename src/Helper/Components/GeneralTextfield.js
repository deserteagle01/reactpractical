
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions,TextInput} from 'react-native';
import { percentageOfDeviceWidth, percentageOfDeviceHeight } from "../Constant/constant";
import COLORS from "../Constant/color.js";


const options = {};

type Props = {};
export default class GeneralTextfield extends Component<Props> {

  constructor(props){
      super(props);
  }

  render() {
    const {onChangeText,value,secureTextEntry,keyboardType,returnKeyType,marginTop,placeholder,widthprop,multiline} = this.props;
    return (

            <TextInput
              style={[styles.container,{width:widthprop,marginTop:marginTop}]}
              onChangeText={onChangeText}
              value={value}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              returnKeyType={returnKeyType}
              placeholder={placeholder}
              placeholderTextColor={COLORS.GRAY}
              multiline = {multiline}
            />

    );
  }

}

const styles = StyleSheet.create({
  container: {
    height:percentageOfDeviceHeight(6),
    borderRadius:10,
    borderColor:COLORS.BLACK,
    borderWidth:1,
    fontSize:17,
    color:COLORS.BLACK,
    paddingLeft:10,
  },

});
