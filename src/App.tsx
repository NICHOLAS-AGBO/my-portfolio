import React from 'react';
// @ts-ignore
import {Helmet} from "react-helmet";
import Loading from "./components/FullLoading";


const AboutMe = React.lazy(()=>import("./components/AboutMe"));
const Main = React.lazy(()=>import("./components/Main"));
function App() {
  return (
      <>
          <Helmet>
              <meta name={"author"} content={"NICHOLAS AGBO"}/>
              <title>NICHOLAS AGBO | Web Developer</title>
          </Helmet>
          <React.Suspense fallback={<Loading/>}>
              <AboutMe/>
              <Main/>
          </React.Suspense>

      </>
  );
}

export default App;
