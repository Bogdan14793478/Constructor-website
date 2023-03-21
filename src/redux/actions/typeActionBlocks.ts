import { Block, UpdateBlockI } from "./interface";

export enum ActionTypesBlocks {
  ADD_BLOCK = "ADD_BLOCK",
  UPDATE_BLOCK = "UPDATE_BLOCK",
  DECREASE_POINT = "DECREASE_POINT",
  INCREASE_POINT = "INCREASE_POINT",
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

export type DecreasePoint = Action<ActionTypesBlocks.DECREASE_POINT, number>;
export const decreasePoint = (payload: number) => ({
  type: ActionTypesBlocks.DECREASE_POINT,
  payload,
});

export type IncreasePoint = Action<ActionTypesBlocks.INCREASE_POINT, number>;
export const increasePoint = (payload: number): IncreasePoint => ({
  type: ActionTypesBlocks.INCREASE_POINT,
  payload,
});
