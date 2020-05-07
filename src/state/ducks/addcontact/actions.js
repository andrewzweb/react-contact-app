import * as types from "./types";

export const startLoading = () => ({
  type: types.START_LOADING
  	
});

export const stopLoading = () => ({
  type: types.STOP_LOADING
});

export const addContactActions = (name, number) => ({
  type: types.ADD_CONTACT, 
  name: name,
  number: number
});

