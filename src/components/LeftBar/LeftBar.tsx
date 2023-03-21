import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { BlockI } from "../../redux/actions/interface";
import { addNewBlock } from "../../redux/actions/typeActionBlocks";
import { block } from "../helpers/consts";
import { Card } from "./components/Card";
import classes from "./styles.module.css";

export const LeftBar = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback((name: string): void => {
    const paramBlock = {
      id: Date.now(),
      info: "",
      name,
    };
    dispatch(addNewBlock(paramBlock));
  }, []);

  return (
    <div className={classes.container_left}>
      <div className={classes.wrapper}>
        {block.map((item: BlockI) => (
          <div key={item.id} onClick={() => handleClick(item.name)}>
            <div className={classes.wrapper_card}>
              <Card id={item.id} name={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
