import React from "react";

import Scroller from "@enact/sandstone/Scroller";
import { ImageItem, ImageItemBase } from "@enact/sandstone/ImageItem";
import { scaleToRem } from "@enact/ui/resolution";
import MediaOverlay from "@enact/sandstone/MediaOverlay";

import cryvideo from "../../resources/울음.mp4";

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
  return (
    <Scroller>
      {
        <MediaOverlay
          style={{
            width: 400,
            height: 400,
          }}
          muted={true}
          title="2022.12.07 05:15"
        >
          <source type="" src={cryvideo} />
        </MediaOverlay>
      }
    </Scroller>
  );
};

export default CCTV;
