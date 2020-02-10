import React from "react";
import "./card.css";

type PropsTypes = {
  header: string,
  description?: string
};

const Card = (props: PropsTypes) => {
  const { header, description } = props;

  return (
    <div className={"card"}>
      <div>
        <h2>{header}</h2>
        <p>{description}</p>
        <a href="#">Read more</a>
      </div>
    </div>
  );
};

export default Card;
