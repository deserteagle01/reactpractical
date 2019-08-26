import { ACTION_TYPE_SECRVICE_CALL, REFRESH_SCREEN } from './ActionType2';
import { connect } from 'react-redux';
import {API} from '../Helper/Constant/constant';
import {Alert,Linking,AsyncStorage} from 'react-native';




export function showAlertmessage(strMEssage){
  Alert.alert(
         'Failure',
          strMEssage,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
  { cancelable: false }
  )
}

export function showinternetAlertmessage(){
  Alert.alert(
         'Connection',
          'Network request failed',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
  { cancelable: false }
  )
}

export  function getGenreaction(){
    return(dispatch,state) =>{
      dispatch({type:ACTION_TYPE_SECRVICE_CALL.LOADING});
      let url = API.GENRE + API.KEY;
      console.log(url);
                  return  fetch(url,{
                           method:'GET',
                          /* headers:{
                             'Content-Type': 'application/x-www-form-urlencoded',
                             'Authorization': 'Bearer '+strAccessToken,
                          }
                          ,
                            body:''
                            */
                        })
                        .then(response => {
                                const status = response.status;
                                const data = response.json();
                                console.log('http server status=+',status);
                                return Promise.all([status, data]);
                          })
                          .then((data) => {

                              if (data[0] === 200){
                                    //if(data[1].status == RESPONSE_CODE.SUCEESS){

                                          dispatch(activeProfileSuccess(data[1]));
                                          
                                    //}
                              }
                              else{
                                    dispatch(activeProfileActionError(data))
                              }

                            })
                          .catch((error) => {
                              console.error(error);
                              alert(error);
                              //dispatch(activeProfileActionError(error))
                        });
        }
}



export const activeProfileSuccess = (response) =>({
  type:ACTION_TYPE_SECRVICE_CALL.SUCCESS,
  responseGenre:response
})

export const activeProfileActionError = (error) =>({
  type: ACTION_TYPE_SECRVICE_CALL.ERROR,
  error: error
})
