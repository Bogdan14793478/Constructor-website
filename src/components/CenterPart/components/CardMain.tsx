import React from "react";
import { Block } from "../../../redux/actions/interface";
import { Card } from "../../LeftBar/components/Card";
import { ButtonBlock } from "./ButtonBlock";

import classes from "./styles.module.css";
interface CardMainProps {
  item: Block;
  activeCard?: number;
  setActiveCard: React.Dispatch<React.SetStateAction<number>>;
}

export const CardMain: React.FC<CardMainProps> = ({
  item,
  activeCard,
  setActiveCard,
}) => {
  const chooseBackground = activeCard === item.id ? true : false;
  const chooseCard = () => {
    setActiveCard(item.id);
  };
  return (
    <div className={classes.container_main_card} onClick={chooseCard}>
      {chooseBackground && <ButtonBlock item={item} />}
      <Card
        activeCard={activeCard}
        isActive={chooseBackground}
        id={item.id}
        name={item.name}
        info={item.info}
      />
    </div>
  );
};
