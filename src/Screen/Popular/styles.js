import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
import { percentageOfDeviceWidth, percentageOfDeviceHeight } from "../../Helper/Constant/constant";
import COLORS from "../../Helper/Constant/color.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems:'center'
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
  marginLeft:percentageOfDeviceWidth(40)
},
subview:{
  marginTop:percentageOfDeviceHeight(2),
  borderColor:COLORS.BLACK,
  borderWidth:1,
  width:percentageOfDeviceWidth(90)
},
logout:{
  marginTop:percentageOfDeviceHeight(2),
  backgroundColor:COLORS.RED,
  width:percentageOfDeviceWidth(90),
  height:percentageOfDeviceHeight(5),
  alignItems:'center',
  justifyContent:'center'
},
flatview:{
  width:percentageOfDeviceWidth(40),
  marginLeft:percentageOfDeviceWidth(5),
  height:percentageOfDeviceHeight(25),
  marginTop:percentageOfDeviceHeight(2),
  backgroundColor:'lightgray',
},
genrename:{
  fontSize:16,
  height:'25%',
  fontWeight:'bold',
  alignSelf:'center'
},
});

export default styles;
