import { Alert } from 'react-native';
import {ACTION_TYPE_SECRVICE_CALL,REFRESH_SCREEN} from '../Actions/ActionType2.js';

const initialState={
  isLoading:true,
  responsePopular:null,
  error:null,
  isRefresh:false
}

const getPopularMovieReducer = (state = initialState, action) =>{
  switch (action.type) {
    case ACTION_TYPE_SECRVICE_CALL.LOADING:
      return {...state,isLoading:true,error:null};
    case ACTION_TYPE_SECRVICE_CALL.SUCCESS:
        return {...state,isLoading:false,responsePopular:action.responsePopular,error:null};
    case ACTION_TYPE_SECRVICE_CALL.ERROR:
        return {...state, isLoading:false,responsePopular: null,error:action.console.error};
    case REFRESH_SCREEN:
      return{...state,isRefresh:true};
    default:
      return state;
  }
}

export default getPopularMovieReducer;


// <FlatList
//   horizontal={true}
//   data={this.props.data}
//   extraData={this.state}
//   keyExtractor={this._keyExtractor}
//   renderItem={this._renderItem}
// />
