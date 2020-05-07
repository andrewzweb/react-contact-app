export const ADD_CONTACT_NAME_CHANGE = 'ADD_CONTACT_NAME_CHANGE'
export const ADD_CONTACT_NUMBER_CHANGE = 'ADD_CONTACT_NUMBER_CHANGE'

export const setNameText = (name) => ({
	type: ADD_CONTACT_NAME_CHANGE, 
	payload: name
})

export const setNumberText = (number) => ({
	type: ADD_CONTACT_NUMBER_CHANGE, 
	payload: number
})
