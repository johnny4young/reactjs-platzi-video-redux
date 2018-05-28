
import { createStore } from 'redux'

const $form = document.getElementById('form');

$form.addEventListener( 'submit', handleSubmit);

function handleSubmit(event){
	event.preventDefault();
	const data = new FormData($form);
	const title = data.get('title');
	console.log(title);
	store.dispatch({
		type : 'ADD_SONG',
		payload:  {
			title
		}
	})
}

const initialState = [
	{
		"title" : "Despacito"
	},{
		"title" : "One more thing"
	},{
		"title" : "Echame la culpa"
	}
]

const reducer = function( state, action){
	switch(action.type){
		case 'ADD_SONG':
		return [...state, {title: action.payload.title}]
		default:
			return state;
	}
}

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render (){
	const $container  = document.getElementById('playlist')
	const playlist = store.getState()
	$container.innerHTML = ''; //borrando el contenedor
	playlist.forEach(element => {
		const template = document.createElement('p')
		template.textContent = element.title
		$container.appendChild(template)
	})
}

render()

function handleChange(){
	render()
}

store.subscribe(handleChange)