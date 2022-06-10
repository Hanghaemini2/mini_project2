import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Signup from './Signup'
import Login from './Login'
import Add from './Add'
import Detail from './Detail'
import PleaseLogin from './PleaseLogin'
import NotFound from './NotFound'

function App() {
  return (
    <div className="App">
      <div>
        <h1>This is App.js</h1>
      </div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/pleaselogin" element={<PleaseLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
