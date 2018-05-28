
export function openModal(id){
	return {
		type: 'OPEN_MODAL',
		payload : {
			mediaId: id
		}
	}
}


export function closeModal(){
	return {
		type: 'CLOSE_MODAL'
	}
}


export function searchEntities(query){
	return {
		type: 'SEARCH_ENTITIES',
		payload : {
			query
		}
	}
}