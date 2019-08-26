import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator,createAppContainer } from 'react-navigation';

import LoginScreen from '../Screen/Login';
import ProfileScreen from '../Screen/ProfileView';
import AuthLoading from './AuthRedirection.js';
import PopularScreen from '../Screen/Popular';
import MovieDetail from '../Screen/MovieDetail';

const LoginStack = createStackNavigator({
  LoginScreen: { screen: LoginScreen , navigationOptions: { header: null } },
},
{
   initialRouteName : 'LoginScreen',
   navigationOptions: {
      gesturesEnabled: false
   }
},{
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'black'},
    title: 'First',
    headerTintColor: 'black',
    gesturesEnabled: false,
  })
}
)

const ProfileStack = createBottomTabNavigator({
  Genre: { screen: ProfileScreen, navigationOptions: { header: null } },
  Popular: { screen: PopularScreen, navigationOptions: { header: null } },

},
{
   initialRouteName : 'Genre',
   navigationOptions: {
      gesturesEnabled: false
   }
},{
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'black'},
    title: 'First',
    headerTintColor: 'black',
    gesturesEnabled: false,
  })
}
)


export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Login: LoginStack,
    Profile: ProfileStack,
    Detail: MovieDetail,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
