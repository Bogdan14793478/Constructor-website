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
  const [valueInputP, setValueInputP] = useState(info);
  const inputRef = useRef<HTMLInputElement>(null); // создаем ссылку на инпут

  const dispatch = useDispatch();

  const changeInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.target.value;
    setValueInputP(updatedValue);
    dispatch(updateInfo({ id, valueInput: updatedValue }));
  };

  useEffect(() => {
    if (activeCard === id && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeCard, id]);

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
          ref={inputRef}
          value={valueInputP}
          onChange={(e) => changeInfo(e)}
          className={classes.input}
        />
      )}
    </div>
  );
};
