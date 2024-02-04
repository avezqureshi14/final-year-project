import { ADD_CONTACTS} from "../constants/actionTypes";

export default (contacts = [], action) => {
  switch (action.type) {
    case ADD_CONTACTS:
      return [...contacts, action.payload];
    default:
      return contacts;
  }
};
