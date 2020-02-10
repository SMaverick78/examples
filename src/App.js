import React from "react";
import "./styles.css";
import CardHower1 from "./cardHower1";
import CardHower2 from "./cardHower2";
import HoverEffect1 from "./hoverEffect1";

const testData = {
  header: "Design",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
  blandit est augue, sit amet imperdiet risus placerat id. Integer
  facilisis pulvinar ligula, non tincidunt dolor. Etiam a ornare odio.
  Duis pretium pharetra venenatis. Mauris a dui sed purus semper
  vulputate ac eu libero.`
};

export default function App() {
  return (
    <div className="App">
      <div className={"container"}>
        <CardHower1 {...testData} />
        <CardHower2 {...testData} />
        <HoverEffect1 {...testData} />
      </div>
    </div>
  );
}
