import * as types from "./types";
import createReducer from "../../../utils/createReducer";

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
  })
});


export default loaderReducer;
