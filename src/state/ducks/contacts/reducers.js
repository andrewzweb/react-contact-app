import * as types from "./types";
import createReducer from "../../../utils/createReducer";
import contacts from "../../../api/contacts";

const initialState = {
  isLoad: false, 
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
  })
});


export default loaderReducer;
