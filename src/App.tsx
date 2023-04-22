import React from 'react';
// @ts-ignore
import {Helmet} from "react-helmet";
import Loading from "./components/FullLoading";
import {WEB_EXPERIENCE_YEAR} from "./dateExp";


const AboutMe = React.lazy(()=>import("./components/AboutMe"));
const Main = React.lazy(()=>import("./components/Main"));
function App() {
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
          <React.Suspense fallback={<Loading/>}>
              <AboutMe/>
              <Main/>
          </React.Suspense>

      </>
  );
}

export default App;
