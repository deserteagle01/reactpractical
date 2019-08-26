import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  Touchable,
  Button,
  ImageBackground,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableHighlight,
  AppState,
  AsyncStorage,
  Linking,
  NetInfo,
  FlatList
} from "react-native";
import styles from "./styles";
import ProfileView from "../../Helper/Components/ProfileView"
import { percentageOfDeviceWidth, percentageOfDeviceHeight } from "../../Helper/Constant/constant";
import COLORS from "../../Helper/Constant/color.js";
import {ASYNCKEYS} from "../../Helper/Constant/constant";
const { width, height } = Dimensions.get("window");
type Props = {};

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as GetGenereAction from "../../Actions/getGenreAction";
import * as GetGenereMovAction from "../../Actions/getGenerMovieAction";

var arrGenere;
var arrGenerMovie;
class Profile extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {txtName:'',txtEmail:'',txtGender:'FEMALE',txtAddress:'',txtMobile:'',txtZipcode:'',geners:[], genreMovie:[]}
  }

  /* --------- Lifecycle methods ---------  */
  async componentDidMount() {

        // calling Genere API
        this.props.actions.GetGenereAction.getGenreaction()
          .then(() => {
            this.handleGenreResponse();
          })
          .catch(e => {

          });
  }


  componentWillUnmount() {

  }

  componentWillMount() {

  }

/* --------- handle API events ---------  */
  async handleGenreResponse() {
    var Resoponse_GET = this.props.responseGenre;
    arrGenere = Resoponse_GET['genres'];
    this.setState({geners:arrGenere})
    console.log('response ='+JSON.stringify(arrGenere));
  }



  getGenereMovieList(genreid) {
    this.props.actions.GetGenereMovAction.getGenreMovieaction(genreid)
      .then(() => {
          this.handleGenreMovieResponse();
      })
     .catch(e => {

     });
  }

  async handleGenreMovieResponse() {
    var Resoponse_GET = this.props.responseGenreMovie;
    arrGenerMovie = Resoponse_GET['results'];
   this.setState({genreMovie:arrGenerMovie})

  }



/* --------- render event ---------  */
  render() {
      return (
          <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Genre</Text>
                </View>

                <FlatList
                  data={this.state.geners}
                  extraData={this.state}
                  showsVerticalScrollIndicator={true}
                  renderItem={this._renderItem}
                  keyExtractor={this._keyExtractor}
               />

        </View>
      );
    }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({ item, index }) => {
    let constReturn = (
      <View style={styles.flatview}>
        <Text style={styles.genrename}>{item.name}</Text>
        <View style={styles.slidingview}>
            {this.renderhorizontalList(item, index)}
        </View>
      </View>
    );
    return constReturn;
  };



  renderhorizontalList(item,index) {
    return (
    <FlatList
      data={this.state.geners}
      horizontal={true}
      extraData={this.state}
      renderItem={this._renderItem2}
      keyExtractor={this._keyExtractor2}
   />

 )
}

  _renderItem2 = ({ item, index }) => {
    let constReturn = (
      <View style={{marginLeft:percentageOfDeviceWidth(10),height:'100%',width:percentageOfDeviceWidth(60),backgroundColor:'lightgray'}}>

        <View style={{position:'absolute',bottom:2,height:percentageOfDeviceHeight(10),backgroundColor:'white',marginLeft:'1%',width:'98%'}}>
            <Text style={styles.genrename}>{item.name}</Text>
        </View>

      </View>
    );
    return constReturn;
  };

_keyExtractor2 = (item, index) => index.toString();

}

/* --------- Redux  Methods ---------  */
const mapStateToProps = state => ({
  responseGenre: state.getGenereReducer.responseGenre,
  responseGenreMovie: state.getGenereMovieReducer.responseGenreMovie
});

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      GetGenereAction: bindActionCreators(GetGenereAction, dispatch),
      GetGenereMovAction: bindActionCreators(GetGenereMovAction, dispatch),

    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
