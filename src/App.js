import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Banner01 from "./image/Banner_01.jpeg";
import Banner02 from "./image/banner_02.jpeg";
import Banner03 from "./image/banner_03.jpeg";
import LeftArrow from "./image/arrow-left-fill.svg";
import RightArrow from "./image/arrow-right-fill.svg";

import "./App.css";

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
  const navigate = useNavigate();
  const [bannerState, setBannerState] = useState(1);

  return (
    <div className="App">
      <div className="TopWrap">
        <div className="Wrap">
          <div className="HeadHeader">
            <div className="HomeWrap">
              <span
                className="LOGONAME"
                onClick={() => {
                  navigate(`/`);
                }}
              >
                <i>책크잇!!</i>
              </span>
            </div>
            <div className="Button_headWrap">
              <button
                className="HeadButton"
                onClick={() => {
                  navigate(`/signup`);
                }}
              >
                회원가입
              </button>
              |
              <button
                className="HeadButton"
                onClick={() => {
                  navigate(`/login`);
                }}
              >
                로그인
              </button>
              <button
                className="HeadButton"
                onClick={() => {
                  navigate(`/add`);
                }}
              >
                게시물 작성
              </button>
            </div>
          </div>
          <div className="Divide_wrap">
            <div className="Wing_left"></div>
            <div className="DivideBar"></div>
            <div className="Wing_right"></div>
          </div>

          <div className="HeadBody">
            <div className="LeftArrow">
              <img
                src={LeftArrow}
                onClick={() => {
                  setBannerState(bannerState === 3 ? 1 : bannerState + 1);
                }}
              />
            </div>
            <div className="BannerWrap">
              <div className="Center_image">
                <img
                  src={Banner01}
                  className="ImgAnimation"
                  style={{ display: bannerState === 1 ? "" : "none" }}
                />
              </div>
              <div className="Center_image">
                <img
                  src={Banner02}
                  className="ImgAnimation"
                  style={{ display: bannerState === 2 ? "" : "none" }}
                />
              </div>
              <div className="Center_image">
                <img
                  src={Banner03}
                  className="ImgAnimation"
                  style={{ display: bannerState === 3 ? "" : "none" }}
                />
              </div>
            </div>
            <div className="RightArrow">
              <img
                src={RightArrow}
                onClick={() => {
                  setBannerState(bannerState === 1 ? 3 : bannerState - 1);
                }}
              />
            </div>
          </div>
          <div className="HeadFooter"></div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<Add />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/edit/:postId" element={<Edit />} />
            <Route path="/mypage/:userId" element={<MyPage />} />
            <Route path="/pleaselogin" element={<PleaseLogin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
