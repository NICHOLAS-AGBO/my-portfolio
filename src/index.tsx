import React, {FC, ReactNode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./routes/about";
import Notfound from "./routes/404";
import Header from "./components/Header";
import MyPortfolio from "./routes/myportfolio";
import Contact from "./routes/contact";
import useTheme from "./hooks/useTheme";

const Theme:FC<{children: ReactNode}> = ({children})=>{
    const {UI} = useTheme()
    return <UI>{children}</UI>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Router>
          <Theme>
              <Header/>
              <Routes>
                  <Route path={"/"} element={<App/>}/>
                  <Route path={"home"} element={<App/>}/>
                  <Route path={"about-me"} element={<About/>}/>
                  <Route path={"portfolio"} element={<MyPortfolio/>}/>
                  <Route path={"contact"} element={<Contact/>}/>
                  <Route path={"*"} element={<Notfound/>}/>
              </Routes>
              <Footer/>
          </Theme>
      </Router>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
if (process.env.NODE_ENV === "production"){
    serviceWorkerRegistration.register();
}else {
    serviceWorkerRegistration.unregister();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.dir);
