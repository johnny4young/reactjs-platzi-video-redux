import normalizedData  from "../schemas/index";
import { fromJS } from "immutable";

const initialState = fromJS({
		entities: normalizedData.entities,
		categories: normalizedData.result.categories,
		search: '',
})


function data (state = initialState, action ){
	switch (action.type) {
		case 'SEARCH_ENTITIES': 
			//action.payload.query
			// let results = [];
			// if( action.payload.query){
			// 	//looking for text case-insensitive
			// 	const regexSearch = new RegExp( action.payload.query.trim(), 'i');

			// 	state.data.categories.forEach((category) => {
			// 		const itemsFounded = category.playlist.filter( (item) => {
			// 			return item.author.search(regexSearch) >= 0
			// 		})
			// 		results = [...results, ...itemsFounded];
			// 	});
				
			// }
			
			// return {
			// 	...state,
			// 	search: results

			// }

			return state.set('search', action.payload.query)

		default:
			return state
	}
}

export default data;