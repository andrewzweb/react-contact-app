import * as types from "./types";
import createReducer from "../../../utils/createReducer";

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

  [types.DEL_CONTACT]: (state, {contact_id}) => {
    return{
    ...state,
    contactList: [...state.contactList.filter(el=> el.id !== contact_id)]
  }
}

});


export default loaderReducer;
