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
  decreasePoint,
  increasePoint,
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
    if (param === "down") {
      const index = blocks.findIndex((item) => item.id === id);
      return index + 1 < blocks.length ? true : false;
    }
    if (param === "up") {
      console.log("work");
      const index = blocks.findIndex((item) => item.id === id);
      return index > 0 ? true : false;
    }
    // console.log(index, "index");
    // console.log(blocks.length, "length");
    return false;
  };
  const handleClickArrowDown = () => {
    const result = findLength(item.id, "down");
    if (result) dispatch(decreasePoint(item.id));
  };

  const handleClickArrowUp = () => {
    const result = findLength(item.id, "up");
    console.log(result, "result");
    if (result) dispatch(increasePoint(item.id));
  };

  return (
    <div className={classes.container_button_block}>
      <div className={classes.arrow_field}>
        <ArrowDown onClick={handleClickArrowDown} />
        <ArrowUp onClick={handleClickArrowUp} />
      </div>
      <div className={classes.functional_field}>
        <CopyIcon />
        <RemoveIcon />
      </div>
    </div>
  );
};
