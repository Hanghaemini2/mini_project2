import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Banner01 from './image/Banner_01.jpeg';
import LeftArrow from './image/arrow-left-fill.svg';
import RightArrow from './image/arrow-right-fill.svg';

import './App.css';

import Main from "./Main";
import Signup from "./Signup";
import Login from "./Login";
import Add from "./Add";
import Detail from "./Detail";
import Edit from "./Edit";
import MyPage from "./MyPage";
import PleaseLogin from "./PleaseLogin";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <div className="TopWrap"> 
        <div className="Wrap">
          <div className="HeadHeader">
            <div className="HomeWrap">

            </div>
            <div className="Button_headWrap">
              <button className="HeadButton">회원가입</button> |
              <button className="HeadButton">로그인</button>
            </div>

          </div>
          <div className="HeadBody">
              <div className="LeftArrow"> <img src={LeftArrow} /> </div>
              <img src={Banner01} />
              <div className="RightArrow"> <img src={RightArrow} />  </div>
          </div>
          <div className="HeadFooter">

          </div>
        </div>
      </div>
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
