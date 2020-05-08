import * as types from "./types";
import api from '../../../api';

export const startLoading = () => ({
  type: types.START_LOADING,  	
});

export const stopLoading = () => ({
  type: types.STOP_LOADING,
});

export const getContacts = () => dispatch => 
  api.contacts.getContacts().then(data => data ? dispatch({ data, type: types.GET_CONTACTS}): null);

export const addContact = (contact) =>({type: types.ADD_CONTACT, contact});

export const delContact = (contact_id) =>({type: types.DEL_CONTACT, contact_id});

