import {OPEN_MODAL, CLOSE_MODAL, SEARCH_ENTITIES, IS_LOADING} from '../action-types/index'

export function openModal(id){
	return {
		type: OPEN_MODAL,
		payload : {
			mediaId: id
		}
	}
}
export function closeModal(){
	return {
		type: CLOSE_MODAL
	}
}
export function searchEntities(query){
	return {
		type: SEARCH_ENTITIES,
		payload : {
			query
		}
	}
}
export function searchAsyncEntities(query){
	return (dispatch) => {
		dispatch(isLoading(true))
		setTimeout( ()=> {
			dispatch(isLoading(false))
			dispatch(searchEntities(query))
		}, 3000)
		
	}
}

export function isLoading(value){
	return {
		type: IS_LOADING,
		payload: {
			value
		}
	}
}