import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <div></div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/edit/:postId" element={<Edit />} />
        <Route path="/mypage/:userId" element={<MyPage />} />
        <Route path="/pleaselogin" element={<PleaseLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
