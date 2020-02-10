import React from "react";
import "./cover.css";

type PropsTypes = {
  srcImg?: string;
};

const Cover = (props: PropsTypes) => {
  const {
    srcImg = "https://avatars.mds.yandex.net/get-zen_doc/198002/pub_5d434bd092414d00adc62f89_5d434fa3f8ea6700acbac06f/scale_1200"
  } = props;
  return (
    <div className={"imjBox"}>
      <img src={srcImg} />
    </div>
  );
};

export default Cover;
