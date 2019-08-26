import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

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
    fontWeight:'bold'
  },
  viewSeprator: {
    height:2,
    backgroundColor:'gray'
    ,marginTop:height*0.05,
    width:width
  }

});

export default styles;
