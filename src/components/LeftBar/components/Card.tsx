import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  headline as Headline,
  paragraph as Paragraph,
  button as Button,
  image as Image,
} from "../../../assets";
import clsx from "clsx";

import classes from "./styles.module.css";
import { useDispatch } from "react-redux";
import { updateInfo } from "../../../redux/actions/typeActionBlocks";

interface CardProps {
  id: number;
  name: string;
  isActive?: boolean;
  activeCard?: number;
  info?: string;
}

export const Card: React.FC<CardProps> = ({
  id,
  name,
  isActive = null,
  activeCard,
  info,
}) => {
  const [valueInput, setValueInput] = useState(info);

  const dispatch = useDispatch();

  const changeInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };

  useEffect(() => {
    if (valueInput) {
      dispatch(updateInfo({ id, valueInput }));
    }
  }, [valueInput]);

  return (
    <div
      className={clsx(classes.container_card, {
        [classes.backgroundWhite]: !isActive && typeof isActive !== "object",
        [classes.backgroundBlue]: !!isActive,
      })}
    >
      {name === "Headline" && <Headline fill="#97AACD" />}
      {name === "Paragraph" && <Paragraph fill="#97AACD" />}
      {name === "Button" && <Button fill="#97AACD" />}
      {name === "Image" && <Image fill="#97AACD" />}

      <img src={name} alt="" />
      <div className={classes.text}>{name}</div>
      {activeCard === id && (
        <input
          value={valueInput}
          onChange={(e) => changeInfo(e)}
          className={classes.input}
        />
      )}
    </div>
  );
};
