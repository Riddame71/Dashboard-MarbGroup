import React, { Suspense } from "react";
import Sidebar from "./component/Layout/Sidebar/Sidebar";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Overview = React.lazy(() => import("./page/overview"));
const Content = React.lazy(() => import("./page/content"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route element={<Content />} path={"/content"} exact />
            <Route element={<Overview />} path={"/"} exact />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
