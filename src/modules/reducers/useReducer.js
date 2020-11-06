import { CREATE_GROUP } from "../../actions/ActionTypes";
export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_GROUP:
      return { ...state, success: action.payload };
    default:
      return state;
  }
}