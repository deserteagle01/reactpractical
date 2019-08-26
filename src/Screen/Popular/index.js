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
import {ASYNCKEYS,API} from "../../Helper/Constant/constant";
const { width, height } = Dimensions.get("window");
type Props = {};

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as GetPopularAction from "../../Actions/getPopularMovie";

var arrPopular;
class Popular extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {txtName:'',txtEmail:'',txtGender:'FEMALE',txtAddress:'',txtMobile:'',txtZipcode:'',popular:[]}
  }

  /* --------- Lifecycle methods ---------  */
  async componentDidMount() {
    // calling Popular API
    this.props.actions.GetPopularAction.getPopularaction()
      .then(() => {
        this.handlePopularResponse();
      })
      .catch(e => {

      });
  }

  componentWillUnmount() {

  }

  componentWillMount() {

  }


async handlePopularResponse(){
  var Resoponse_GET = this.props.responsePopular;
  arrPopular = Resoponse_GET['results'];
  this.setState({popular:arrPopular})
  console.log('response ='+JSON.stringify(arrPopular));
}
  /* --------- clicks events ---------  */




/* --------- render event ---------  */
  render() {
      return (
          <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Popular</Text>
                </View>

                <FlatList
                  data={this.state.popular}
                  numColumns={2}
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
      <TouchableHighlight onPress={() => this.movieDetailPress(item)}>
      <View style={styles.flatview}>

        <View style={{height:'75%',width:'100%',backgroundColor:'black'}}>
        <Image source = {{uri: API.IMAGE_BASE+item.poster_path}}
              style = {{height:'100%',  width: '100%',resizeMode: 'cover'}}
        />
        </View>

        <Text style={styles.genrename}>{item.title}</Text>
      </View>
      </TouchableHighlight>
    );
    return constReturn;
  };

movieDetailPress(item) {
  this.props.navigation.navigate("Detail", {
      movieID: item.id
  });
}

}


/* --------- Redux  Methods ---------  */
const mapStateToProps = state => ({
  responsePopular: state.getPopularMovieReducer.responsePopular

});

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      GetPopularAction: bindActionCreators(GetPopularAction, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popular);
