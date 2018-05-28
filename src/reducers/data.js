

function data (state, action ){
	switch (action.type) {
		case 'SEARCH_VIDEO': 
			//action.payload.query
			let results = [];
			if( action.payload.query){
				//looking for text case-insensitive
				const regexSearch = new RegExp( action.payload.query.trim(), 'i');

				state.data.categories.forEach((category) => {
					const itemsFounded = category.playlist.filter( (item) => {
						return item.author.search(regexSearch) >= 0
					})
					results = [...results, ...itemsFounded];
				});
				
			}
			
			return {
				...state,
				search: results

			}
		default:
			return state
	}
}

export default data;