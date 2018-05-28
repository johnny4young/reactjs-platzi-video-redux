import React from 'react';
import ReactDOM from 'react-dom';
// import Playlist from '../../src/playlist/components/playlist';
import Home from '../pages/containers/home';
import data from '../api.json'
import { Provider } from "react-redux";

import { createStore } from 'redux';
import Reducer from '../reducers/data'
import normalizedDate  from "../schemas/index";

console.log('normalizedDate', normalizedDate);

const initialState = {
	data: {
		...data
	},
	search: []
}

const store = createStore(
	Reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

const homeContainer =  document.getElementById('home-container');


// const holaMundo = <h1>Hola Curso</h1>;

ReactDOM.render( 
	<Provider store={store}>
	<Home  />
</Provider> , 
homeContainer);