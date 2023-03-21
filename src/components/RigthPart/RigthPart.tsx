import React from "react";
import { useSelector } from "react-redux";
import { Block } from "../../redux/actions/interface";
import { RootState } from "../../store";
import classes from "./styles.module.css";

const renderBlock = (item: Block) => {
  switch (item.name) {
    case "Paragraph":
      return item.info !== "" ? (
        <p className={classes.paragraph}>{item.info}</p>
      ) : null;
    case "Headline":
      return item.info !== "" ? (
        <div className={classes.headline}>{item.info}</div>
      ) : null;
    case "Button":
      return item.info !== "" ? (
        <button className={classes.button}>{item.info}</button>
      ) : null;
    case "Image":
      return item.info !== "" ? (
        <img className={classes.img} src={item.info} alt={item.name} />
      ) : null;
    default:
      return null;
  }
};

export const RigthPart = () => {
  const { blocks } = useSelector((state: RootState) => state.blocks);

  return (
    <div className={classes.container_right}>
      {blocks.map((item: Block) => {
        return <div key={item.id}>{renderBlock(item)}</div>;
      })}
    </div>
  );
};
