import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import {
  withNavigationHandlers,
  withNavigationContext,
} from "react-awesome-slider/dist/navigation";
import "react-awesome-slider/dist/styles.css";
import { media } from "./media";
import Startup from "../startup/startup";

import "./fullpage.css";
const Slider = withNavigationHandlers(AwesomeSlider);

const animations = [
  "cubeAnimation",
  "fallAnimation",
  //   "foldOutAnimation",
  //   "scaleOutAnimation",
  "openAnimation",
];

export default withNavigationContext(({ fullpage }) => {
  const isFirstLoad = useRef(true);
  const animation = animations[Math.floor(Math.random() * 3)];

  return (
    <Slider
      startupScreen={<Startup />}
      startupDelay={275}
      animation={animation}
      className="awesome-slider"
      onTransitionEnd={() => {
        // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
        if (isFirstLoad.current === true) {
          document.querySelector("body").classList.add("animated");
          document.querySelector("body").classList.add("visible");
        }
      }}
      media={media}
    />
  );
});
