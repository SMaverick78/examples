import React from "react";
import "./card.css";

const Card = props => {
  return (
    <div className={"card"}>
      <div>
        <h2>Design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          blandit est augue, sit amet imperdiet risus placerat id. Integer
          facilisis pulvinar ligula, non tincidunt dolor. Etiam a ornare odio.
          Duis pretium pharetra venenatis. Mauris a dui sed purus semper
          vulputate ac eu libero.
        </p>
        <a href="#">Read more</a>
      </div>
    </div>
  );
};

export default Card;
