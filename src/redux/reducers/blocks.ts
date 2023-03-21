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
      const copyBlocks2 = [...state.blocks];
      const index = copyBlocks2.findIndex(
        (item) => item.id === action.payload.id
      );
      const changeBlock = copyBlocks2[index];
      changeBlock.info = action.payload.valueInput;
      return { ...state, blocks: copyBlocks2 };
    case ActionTypesBlocks.DECREASE_POINT:
      const idElemDecrease = action.payload;
      const copyBlocks3 = [...state.blocks];
      const indexBlock = copyBlocks3.findIndex(
        (item) => idElemDecrease === item.id
      );
      const firstBlock = copyBlocks3[indexBlock + 1];
      copyBlocks3[indexBlock + 1] = copyBlocks3[indexBlock];
      copyBlocks3[indexBlock] = firstBlock;

      return { ...state, blocks: copyBlocks3 };

    case ActionTypesBlocks.INCREASE_POINT:
      const idElemIncrease = action.payload;
      const copyBlocks4 = [...state.blocks];
      const indexBlock2 = copyBlocks4.findIndex(
        (item) => idElemIncrease === item.id
      );
      const firstBlock2 = copyBlocks4[indexBlock2 - 1];
      copyBlocks4[indexBlock2 - 1] = copyBlocks4[indexBlock2];
      copyBlocks4[indexBlock2] = firstBlock2;
      return { ...state, blocks: copyBlocks4 };

    case ActionTypesBlocks.COPY_BLOCK:
      const newObj = { ...action.payload };
      const copyBlocks5 = [...state.blocks];
      const indexEl = copyBlocks5.findIndex((item) => item.id === newObj);
      newObj.id = Date.now();
      copyBlocks5.splice(indexEl, 0, newObj);
      return { ...state, blocks: copyBlocks5 };

    case ActionTypesBlocks.REMOVE_BLOCK:
      const removeId = action.payload;
      const copyBlocks6 = [...state.blocks];
      const resultBlock = copyBlocks6.filter((item) => item.id !== removeId);
      return { ...state, blocks: resultBlock };

    default:
      return state;
  }
};
