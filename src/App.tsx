import React from 'react';
// @ts-ignore
import {Helmet} from "react-helmet";

import AboutMe from "./components/AboutMe";
import Main from "./components/Main";

function App() {
  return (
      <>
          <Helmet>
              <meta name={"author"} content={"NICHOLAS AGBO"}/>
              <title>NICHOLAS AGBO | Web Developer</title>
          </Helmet>
          <AboutMe/>
          <Main/>
      </>
  );
}

export default App;
