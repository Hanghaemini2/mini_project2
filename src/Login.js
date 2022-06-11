import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Logo from './image/Logo.svg';

import './App.css';


function Login() {

  
  return (
    <div>
      <div className="Login_Wrap">
        <div className="Login_Top">
          <div className="GuideBanner">
            <p className="Log_text_1">나만 알기 아까운 책 이야기, 책크잇!!</p>
            <p className="Log_text_2">책크잇의 모든 서비스를 이용하시려면 로그인 해주세요.</p>
          </div>
          <div className="Login_inputWrap">
            <div className="ID_Wrap">
              <label className="Login_Label">ID</label>
              <input className="Login_Input" placeholder="ID를 입력해 주세요"/>
            </div>
            <br />
            <div className="PW_Wrap">
              <span className="Login_Label">PW</span>
              <input className="Login_Input" placeholder="비밀번호를 입력해 주세요"/>
            </div>
          </div>
        </div>
        <div className="Login_Bottom">
          <button className="LoginButton">로그인</button>
        </div>
      </div>

    <div>
    </div>
    </div>
  );
}

export default Login;
