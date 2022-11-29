import React from "react";

import Scroller from "@enact/sandstone/Scroller";
import { ImageItem, ImageItemBase } from "@enact/sandstone/ImageItem";
import { scaleToRem } from "@enact/ui/resolution";

import "../css/CCTV.css";

const images = new Array(20).fill().map((_, i) => (
  <ImageItem
    inline
    key={`image${i}`}
    label="ImageItem label"
    src="https://placeimg.com/150/200/any"
    style={{
      width: 384,
      // 192,
      height: 294,
      // 147,
    }}
  >
    {`ImageItem ${i + 1}`}
  </ImageItem>
));

const CCTV = () => {
  return <Scroller>{images}</Scroller>;
};

export default CCTV;
