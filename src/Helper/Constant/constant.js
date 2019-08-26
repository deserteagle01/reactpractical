
import { Dimensions, Platform, PixelRatio, View,NetInfo,Alert } from 'react-native';
const { width, height } = Dimensions.get("window");




export const API = {
    ALBUMS : 'albums',
    GENRE : 'https://api.themoviedb.org/3/genre/movie/list?',
    KEY : 'api_key=f17e9c5e6c34ad9dc2bf6aab852c0cc7',
    GENRE_MOVIE : 'https://api.themoviedb.org/3/genre/',
    POPULAR_MOVIE : 'https://api.themoviedb.org/3/discover/movie?',
    SORT_BY : 'sort_by=popularity.desc&',
    IMAGE_BASE : 'https://image.tmdb.org/t/p/w500/',
    MOVIE_DETAIL : 'https://api.themoviedb.org/3/movie/',



}


export const REGEX = {
  EMAIL : '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/',
}

export const percentageOfDeviceWidth = (f) =>{
        return (f*width / 100);
}

export const percentageOfDeviceHeight = (f) =>{
        return (f*height / 100);
}


export const ASYNCKEYS = {
    IS_LOGIN : 'is_login',
    USER_DATA : 'user_data',
}
