import { ActionTypesBlocks } from "../actions/typeActionBlocks";

export interface InitI {
  blocks: any[];
}

const initial: InitI = {
  blocks: [],
};

export const blocksReducer = (state = initial, action: any) => {
  switch (action.type) {
    case ActionTypesBlocks.ADD_BLOCK:
      const copyBlocks = [...state.blocks];
      copyBlocks.push(action.payload);
      return { ...state, blocks: copyBlocks };
    case ActionTypesBlocks.UPDATE_BLOCK:
      console.log(action.payload, "action.payload");
      const copyBlocks2 = [...state.blocks];
      const index = copyBlocks2.findIndex(
        (item) => item.id === action.payload.id
      );
      const changeBlock = copyBlocks2[index];
      changeBlock.info = action.payload.valueInput;
      return { ...state, blocks: copyBlocks2 };
    default:
      return state;
  }
};
