import { combineReducers } from "redux";
import { blocksReducer } from "./blocks";

export const rootReducer = combineReducers({
  blocks: blocksReducer,
});
