import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
import { percentageOfDeviceWidth, percentageOfDeviceHeight } from "../../Helper/Constant/constant";
import COLORS from "../../Helper/Constant/color.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems:'center'
  },
  titleLogin: {
    marginTop:height*0.12,
    fontSize:22,
    color:'black',
    fontWeight:'bold',
  },
  viewSeprator: {
    height:2,
    backgroundColor:'gray'
    ,marginTop:height*0.05,
    width:width
  },
  header: {
    height: percentageOfDeviceHeight(8),
    flexDirection: "row",
    width:'100%',
    borderWidth:1.0,
    borderColor:COLORS.BLACK,
    alignItems:'center',
},
backbt:{
  height:'80%',
  width:percentageOfDeviceWidth(20),
  justifyContent:'center',
  alignItems:'center',
  marginLeft:percentageOfDeviceWidth(15)
},
title:{
  fontSize:22,
  color:COLORS.BLACK,
  fontWeight:'bold',
  justifyContent: 'center',
  alignSelf:'center',
  marginLeft:percentageOfDeviceWidth(20)
},

});

export default styles;
