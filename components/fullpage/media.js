import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";

import Home from "../Home/Home";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

import Page from "../page/page";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";

export const media = [
  {
    slug: "",
    className: "slide",
    children: <Home />,
  },
  {
    slug: "about",
    className: "slide",
    children: (
      <Page>
        <About />
        <Skills />
      </Page>
    ),
  },
  {
    slug: "portfolio",
    className: "unlimited",
    children: (
      <Page>
        <Portfolio />
      </Page>

    ),
  },
  {
    slug: "contact",
    className: "slide",
    children: <Contact />,
  },
];
