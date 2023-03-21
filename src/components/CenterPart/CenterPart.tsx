import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Block } from "../../redux/actions/interface";
import { RootState } from "../../store";
import { CardMain } from "./components/CardMain";
import classes from "./styles.module.css";

export const CenterPart = () => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const { blocks } = useSelector((state: RootState) => state.blocks);

  return (
    <div className={classes.container_center}>
      {blocks?.map((item: Block) => {
        return (
          <div key={item.id} className={classes.wrapper_card}>
            <CardMain
              activeCard={activeCard}
              setActiveCard={setActiveCard}
              item={item}
            />
          </div>
        );
      })}
    </div>
  );
};
