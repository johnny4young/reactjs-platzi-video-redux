import React from 'react';
import ReactDOM from 'react-dom';
// import Playlist from '../../src/playlist/components/playlist';
import Home from '../pages/containers/home';
//import data from '../api.json'
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from 'redux';
import Index from '../reducers/index'
import normalizedData  from "../schemas/index";
import { Map } from "immutable";

// create a middleware for redux
function logger ({getState, dispatch}){
	return (next) => {
		return (action) => {
			console.log('action to execute', action);
			console.log('old state ', getState().toJS());

			const rslt = next(action);

			console.log('new state ', getState().toJS());

			return rslt;
		}
	}
}

console.log('normalizedDate', normalizedData);

// const initialState = {
// 	data: {
// 		entities: normalizedData.entities,
// 		categories: normalizedData.result.categories,
// 		search: [],
// 	},
// 	modal: {
// 		visibility: false,
// 		mediaId: null
// 	}
// }

const store = createStore(
	Index,
	Map({}),
	applyMiddleware(logger)
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//console.log(store.getState());

const homeContainer =  document.getElementById('home-container');


// const holaMundo = <h1>Hola Curso</h1>;

ReactDOM.render( 
	<Provider store={store}>
	<Home  />
</Provider> , 
homeContainer);