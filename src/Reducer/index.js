// Wherever you build your reducers
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import getGenereReducer from './getGenreReducer.js';
import getGenereMovieReducer from './genreMovieReducer.js';
import getPopularMovieReducer from './getPopularReducer.js';
import getMovieReducer from './movieDetailReducer.js';

const AppReducers = combineReducers({
    getGenereReducer,
    getGenereMovieReducer,
    getPopularMovieReducer,
    getMovieReducer
});

const rootReducer = (state, action) => {
	   return AppReducers(state,action);
}

let store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
