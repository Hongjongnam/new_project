import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import counter from "./counter";
import user from "./user";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persist = {
  key: "user",
  storage,
  whitelsit: ["user"],
};


const rootReducer = combineReducers({
  persist,
  counter, 
  user,
});

export default persistReducer(persist, rootReducer);
