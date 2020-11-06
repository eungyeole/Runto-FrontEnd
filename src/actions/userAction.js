import { CREATE_GROUP, GET_GROUP } from "./ActionTypes";
import { request } from "../utils/axios";
const USER_URL = "";
export function CreateGroup(Token, Data) {
    const data = request("POST", USER_URL + "/room/create/",Token,Data);
    return {
      type: CREATE_GROUP,
      payload: data,
    };
}
export function GetGroup(Token, Data) {
    const data = request("GET", USER_URL + "/room/list/", Token,Data);
    return {
      type: GET_GROUP,
      payload: data,
    };
} //안녕 은결아 나는 너의 마니또야