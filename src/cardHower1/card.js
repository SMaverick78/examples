import React from "react";
import "./card.css";

const Card = props => {
  return (
    <div className={"box"}>
      <div className={"imjBox"}>
        <img src="https://avatars.mds.yandex.net/get-zen_doc/198002/pub_5d434bd092414d00adc62f89_5d434fa3f8ea6700acbac06f/scale_1200" />
      </div>
      <div className={"content"}>
        <h2>Design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          blandit est augue, sit amet imperdiet risus placerat id. Integer
          facilisis pulvinar ligula, non tincidunt dolor. Etiam a ornare odio.
          Duis pretium pharetra venenatis. Mauris a dui sed purus semper
          vulputate ac eu libero.
        </p>
      </div>
    </div>
  );
};

export default Card;
