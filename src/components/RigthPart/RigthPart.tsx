import React from "react";
import { useSelector } from "react-redux";
import { Block } from "../../redux/actions/interface";
import { RootState } from "../../store";
import classes from "./styles.module.css";

export const RigthPart = () => {
  const { blocks } = useSelector((state: RootState) => state.blocks);

  return (
    <div className={classes.container_right}>
      {blocks.map((item: Block) => {
        return (
          <div key={item.id}>
            {item.name === "Paragraph" && item.info !== "" && (
              <p className={classes.paragraph}>{item.info}</p>
            )}
            {item.name === "Headline" && item.info !== "" && (
              <div className={classes.headline}>{item.info}</div>
            )}
            {item.name === "Button" && item.info !== "" && (
              <button className={classes.button}>{item.info}</button>
            )}
            {item.name === "Image" && item.info !== "" && (
              <img className={classes.img} src={item.info} alt={item.name} />
            )}
          </div>
        );
      })}
    </div>
  );
};
