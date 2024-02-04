import * as api from "../api";
import { ADD_CONTACTS } from "../constants/actionTypes";

export const addContacts = (contact) => async(dispatch) =>{
  try {
    const {data} = await api.addContacts(contact);
    dispatch({type:ADD_CONTACTS,payload:data});
  } catch (error) {
    console.log(error);   
  }
}
