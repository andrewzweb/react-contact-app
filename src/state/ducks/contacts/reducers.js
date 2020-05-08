import * as types from "./types";
import createReducer from "../../../utils/createReducer";
import contacts from "../../../api/contacts";

const initialState = {
  contactList:[]
};

const loaderReducer = createReducer(initialState)({
  [types.START_LOADING]: () => ({
    isLoad: true
  }),

  [types.STOP_LOADING]: () => ({
    isLoad: false
  }),

  [types.GET_CONTACTS]: (state, {data}) => ({
	  contactList: [...data]
  }),

  [types.ADD_CONTACT]: (state, {contact}) => ({
    ...state,
    contactList: [...state.contactList, contact]
  }),

  [types.DEL_CONTACT]: (state, {contact_id}) => ({
    ...state,
    contactList: [...state.contactList, {name:contact_id, phone:contact_id}]
  }),


});


export default loaderReducer;
