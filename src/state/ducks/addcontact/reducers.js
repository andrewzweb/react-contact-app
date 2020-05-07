import * as types from "./types";
import createReducer from "../../../utils/createReducer";

const initialState = {
  isLoad: false, 
  contacts: []
};

const loaderReducer = createReducer(initialState)({
  [types.START_LOADING]: () => ({
    isLoad: true
  }),

  [types.STOP_LOADING]: () => ({
    isLoad: false
  }),

  [types.ADD_CONTACT]: (state, action) => ({
	  ...state, 
	  contacts: state.contacts.concat({
		  id: Date.now(),
		  name: action.name,
		  phone: action.number,
		  show: true,
	  })
  })
});


export default loaderReducer;
