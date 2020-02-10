import React from "react";

import Styles from "./styled";

type PropsTypes = {
  header: string;
  description?: string;
};

const Card = (props: PropsTypes) => {
  const { header, description } = props;

  return (
    <Styles>
      <div className={"icon"} />
      <div className={"content"}>
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    </Styles>
  );
};

export default Card;
