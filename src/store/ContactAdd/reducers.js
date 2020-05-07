import { ADD_CONTACT_NAME_CHANGE } from './actions'
import { ADD_CONTACT_NUMBER_CHANGE } from './actions'

const defaultState = {
	name: '',
	number: ''
}

export const addContactReducer = (state = defaultState, action) => {
	switch(action.type){
	case ADD_CONTACT_NAME_CHANGE:
		return {
			...state, 
			name: action.payload
		};
	case ADD_CONTACT_NUMBER_CHANGE:
		return {
			...state, 
			number: action.payload
		};
		
	}
	return state;
};

