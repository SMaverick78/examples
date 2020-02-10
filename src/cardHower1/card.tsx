import React from "react";
import "./card.css";
import Cover from "../cover";

type PropsTypes = {
  header: string;
  description?: string;
};

const Card = (props: PropsTypes) => {
  const { header, description } = props;

  return (
    <div className={"box"}>
      <Cover />
      <div className={"content"}>
        <h2>{header}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
