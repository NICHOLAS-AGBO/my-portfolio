import React, {FC, ReactNode} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';
import Footer from "./components/Footer";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider as Router, Outlet, ScrollRestoration} from "react-router-dom";
import Header from "./components/Header";
import useTheme from "./hooks/useTheme";
import Loading from "./components/FullLoading";
import {Component as App} from "./App";


const Theme:FC<{children: ReactNode}> = ({children})=>{
    const {UI} = useTheme()
    return <UI>{children}</UI>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>

            <Route element={
                    <React.Suspense fallback={<Loading/>}>
                        <Header/>
                        <Outlet/>
                        <ScrollRestoration getKey={(location)=> location.state}/>
                        <Footer/>
                    </React.Suspense>
            }>
                <Route path={"/"} Component={App}/>
                <Route path={"home"} lazy={()=>import('./App')}/>
                <Route path={"about-me"} lazy={()=>import('./routes/about')}/>
                <Route path={"portfolio"} lazy={()=>import('./routes/myportfolio')}/>
                <Route path={"contact"} lazy={()=>import('./routes/contact')}/>
                <Route path={"*"} lazy={()=>import('./routes/404')}/>
            </Route>

            <Route element={
                    <React.Suspense fallback={<Loading/>}>
                        <Outlet/>
                        <ScrollRestoration getKey={(location)=> location.state}/>
                    </React.Suspense>
            }>
                <Route path={"admin/login"} lazy={()=>import('./routes/admin/login')}/>
                <Route path={"admin/dashboard"} lazy={()=>import('./routes/myportfolio')}/>
            </Route>


        </>
    )
);

root.render(
  <React.StrictMode>
      <Theme>
          <Router router={routes} fallbackElement={<Loading/>}/>
      </Theme>
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
