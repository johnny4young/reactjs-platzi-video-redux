import data from "./data"
import modal from './modal'

import { CombineReducers, combineReducers} from 'redux'

const rootReducer = combineReducers({
	data, 
	modal
})

export default rootReducer;