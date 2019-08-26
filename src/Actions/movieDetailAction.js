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

export  function getdetailaction(movieID){
    return(dispatch,state) =>{
      dispatch({type:ACTION_TYPE_SECRVICE_CALL.LOADING});
      let url = API.MOVIE_DETAIL +movieID + '?' +  API.KEY;

      https://api.themoviedb.org/3/movie/399579?api_key=f17e9c5e6c34ad9dc2bf6aab852c0cc7
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

                                        dispatch(MoviedetailSuccess(data[1]));

                                    //}
                              }
                              else{
                                    dispatch(MoviedetailError(data))
                              }

                            })
                          .catch((error) => {
                              console.error(error);
                              alert(error);
                              //dispatch(activeProfileActionError(error))
                        });
        }
}



export const MoviedetailSuccess = (response) =>({
  type:ACTION_TYPE_SECRVICE_CALL.SUCCESS,
  responseDetail:response
})

export const MoviedetailError = (error) =>({
  type: ACTION_TYPE_SECRVICE_CALL.ERROR,
  error: error
})
