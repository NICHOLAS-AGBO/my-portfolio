import React from 'react';
// @ts-ignore
import {Helmet} from "react-helmet";
import {WEB_EXPERIENCE_YEAR} from "./dateExp";


const AboutMe = React.lazy(()=>import("./components/AboutMe"));
const Main = React.lazy(()=>import("./components/Main"));

export function Component() {
  return (
      <>
          <Helmet>
              <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name={"description"} content={`
              NICHOLAS AGBO is a professional fullstack web developer, a graphics designer and a UI/UX designer, 
              with ${WEB_EXPERIENCE_YEAR} years experience as a developer and 8years experience as a designer.
              `}/>
              <meta name={"author"} content={"NICHOLAS AGBO"}/>
              <title>NICHOLAS AGBO | Web Developer</title>
          </Helmet>
              <AboutMe/>
              <Main/>
      </>
  );
}
Component.displayName = "Home";


