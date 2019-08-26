import { Alert } from 'react-native';
import {ACTION_TYPE_SECRVICE_CALL,REFRESH_SCREEN} from '../Actions/ActionType2.js';

const initialState={
  isLoading:true,
  responseGenre:null,
  error:null,
  isRefresh:false
}

const getGenereReducer = (state = initialState, action) =>{
  switch (action.type) {
    case ACTION_TYPE_SECRVICE_CALL.LOADING:
      return {...state,isLoading:true,error:null};
    case ACTION_TYPE_SECRVICE_CALL.SUCCESS:
        return {...state,isLoading:false,responseGenre:action.responseGenre,error:null};
    case ACTION_TYPE_SECRVICE_CALL.ERROR:
        return {...state, isLoading:false,responseGenre: null,error:action.console.error};
    case REFRESH_SCREEN:
      return{...state,isRefresh:true};
    default:
      return state;
  }
}

export default getGenereReducer;


// <FlatList
//   horizontal={true}
//   data={this.props.data}
//   extraData={this.state}
//   keyExtractor={this._keyExtractor}
//   renderItem={this._renderItem}
// />
