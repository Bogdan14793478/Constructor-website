import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addNewBlock } from "../../redux/actions/typeActionBlocks";
import { Card } from "./components/Card";
import classes from "./styles.module.css";

interface BlockI {
  id: number;
  name: string;
}

const block: BlockI[] = [
  { id: 1, name: "Headline" },
  { id: 2, name: "Paragraph" },
  { id: 3, name: "Button" },
  { id: 4, name: "Image" },
];
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
