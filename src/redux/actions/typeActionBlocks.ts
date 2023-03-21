import { Block, UpdateBlockI } from "./interface";

export enum ActionTypesBlocks {
  ADD_BLOCK = "ADD_BLOCK",
  UPDATE_BLOCK = "UPDATE_BLOCK",
}

export type Action<T, P> = { type: T; payload: P };

export type AddNewBlock = Action<ActionTypesBlocks.ADD_BLOCK, Block>;
export const addNewBlock = (payload: Block): AddNewBlock => ({
  type: ActionTypesBlocks.ADD_BLOCK,
  payload,
});

export type UpdateBlock = Action<ActionTypesBlocks.UPDATE_BLOCK, UpdateBlockI>;
export const updateInfo = (payload: UpdateBlockI): UpdateBlock => ({
  type: ActionTypesBlocks.UPDATE_BLOCK,
  payload,
});
