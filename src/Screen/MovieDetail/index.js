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
  AsyncStorage,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import styles from "./styles";
import GeneralTextfield from '../../Helper/Components/GeneralTextfield'
import GeneralButton from '../../Helper/Components/GeneralButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { percentageOfDeviceWidth, percentageOfDeviceHeight } from "../../Helper/Constant/constant";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as MovieDetailAction from "../../Actions/movieDetailAction";

import COLORS from "../../Helper/Constant/color.js";
import {ASYNCKEYS,API} from "../../Helper/Constant/constant";
type Props = {};
var userDataArr;
var mID;





class MovieDetail extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {txtEmail:'',txtPass:'',coverImage:'',posterImage:'',description:'',language:'',popularity:'',release:'',revenue:''}
    mID = this.props.navigation.state.params.movieID;
    console.log('movie ID='+mID);
  }

  /* ------------ Lifecycle methods ------------  */
  async componentDidMount() {

  }

  componentWillMount() {
    // calling Popular API
    this.props.actions.MovieDetailAction.getdetailaction(mID)
      .then(() => {
        this.handleMoviedetailResponse();
      })
      .catch(e => {

      });
  }

  componentWillUnmount() {

  }


  /* ------------- Custom methods -------------  */
  async handleMoviedetailResponse() {
    var Resoponse_GET = this.props.responseDetail;
    console.log('response ='+JSON.stringify(Resoponse_GET));

    this.setState({coverImage:Resoponse_GET.backdrop_path,posterImage:Resoponse_GET.poster_path,description:Resoponse_GET.overview,language:Resoponse_GET.spoken_languages[0].name,popularity:Resoponse_GET.popularity, release:Resoponse_GET.release_date,revenue:Resoponse_GET.revenue })
  }

  /* ------------- Click Events -------------  */
  backPress(){
      this.props.navigation.navigate('Popular');
  }

  /* ------------ render Event ------------  */
  render() {
      return (
          <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity style={{marginLeft:10}} onPress={() => this.backPress()}>
                  <Text>Back</Text>
              </TouchableOpacity>
              <Text style={styles.title}>movie detail</Text>
          </View>


          <View style={{height:percentageOfDeviceHeight(25),width:percentageOfDeviceWidth(100)}}>
              <ImageBackground style={{height:'100%',width:'100%',resizeMode: 'cover',alignItems:'center'}}
                source = {{uri: API.IMAGE_BASE+this.state.coverImage}}>
                  <Image style={{height:70,width:70,position:'absolute',bottom:0}}
                      source = {{uri: API.IMAGE_BASE+this.state.posterImage}}>
                  </Image>
              </ImageBackground>
          </View>

          <Text>OverView</Text>
          <Text style={{width:percentageOfDeviceWidth(80),marginLeft:percentageOfDeviceWidth(10),height:percentageOfDeviceHeight(35)}}>{this.state.description}</Text>

          <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:17,fontWeight:'bold',marginTop:5}}>Language: </Text>
              <Text style={{marginTop:5}}>{this.state.language}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:17,fontWeight:'bold',marginTop:5}}>Release Date: </Text>
              <Text style={{marginTop:5}}>{this.state.release}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:17,fontWeight:'bold',marginTop:5}}>Popularity: </Text>
              <Text style={{marginTop:5}}>{this.state.popularity}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:17,fontWeight:'bold',marginTop:5}}>Revenue: </Text>
              <Text style={{marginTop:5}}>{this.state.revenue}</Text>
          </View>

          </View>
      );
    }
}


/* --------- Redux  Methods ---------  */
const mapStateToProps = state => ({
  responseDetail: state.getMovieReducer.responseDetail

});

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      MovieDetailAction: bindActionCreators(MovieDetailAction, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
