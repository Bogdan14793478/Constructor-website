import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  arrowUp as ArrowUp,
  arrowDown as ArrowDown,
  removeIcon as RemoveIcon,
  copyIcon as CopyIcon,
} from "../../../assets";
import { Block } from "../../../redux/actions/interface";
import {
  copyBlock,
  decreasePoint,
  increasePoint,
  removeChooseBlock,
} from "../../../redux/actions/typeActionBlocks";
import { RootState } from "../../../store";

import classes from "./styles.module.css";

interface ButtonBlockProps {
  item: Block;
}

export const ButtonBlock: React.FC<ButtonBlockProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { blocks } = useSelector((state: RootState) => state.blocks);

  const findLength = (id: number, param: string): boolean => {
    const index = blocks.findIndex((item) => item.id === id);
    if (param === "down") {
      return index + 1 < blocks.length;
    }
    if (param === "up") {
      return index > 0;
    }
    return false;
  };
  const handleClickArrowDown = (): void => {
    const result = findLength(item.id, "down");
    if (result) dispatch(decreasePoint(item.id));
  };

  const handleClickArrowUp = (): void => {
    const result = findLength(item.id, "up");
    if (result) dispatch(increasePoint(item.id));
  };

  const handleClickCopyBlock = (): void => {
    dispatch(copyBlock(item));
  };

  const removeBlock = () => {
    dispatch(removeChooseBlock(item.id));
  };

  return (
    <div className={classes.container_button_block}>
      <div className={classes.arrow_field}>
        <ArrowDown onClick={handleClickArrowDown} />
        <ArrowUp onClick={handleClickArrowUp} />
      </div>
      <div className={classes.functional_field}>
        <CopyIcon onClick={handleClickCopyBlock} />
        <RemoveIcon onClick={removeBlock} />
      </div>
    </div>
  );
};
