
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions,Alert} from 'react-native';

import { percentageOfDeviceWidth, percentageOfDeviceHeight } from "../Constant/constant";
import COLORS from "../Constant/color.js";

const options = {};

type Props = {};
export default class ProfileView extends Component<Props> {

  constructor(props){
      super(props);
  }

  render() {
    const {marginTop,widthprop,title,value} = this.props;
    return (
      <View style={[styles.container,{width:widthprop,marginTop:marginTop}]}>
          <Text style={[styles.fontstyle,{width:'30%'}]}> {title}</Text>
          <Text style={[styles.fontstyle,{width:'70%'}]}> {value}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height:percentageOfDeviceHeight(5),
    flexDirection:'row',
    alignItems:'center'
  },
  fontstyle:{
    fontSize:18
  },
});
