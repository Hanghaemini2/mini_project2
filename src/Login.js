import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import './App.css';


function Login() {

  
  return (
    <div>
      <div className="Login_Wrap">
        <div className="Login_Top">
          <div className="GuideBanner">
            <span>로그인</span>
          </div>
          <div className="Login_inputWrap">
            <input className="Login_Input" placeholder="ID를 입력해 주세요"/>
            <input className="Login_Input" placeholder="비밀번호를 입력해 주세요"/>
          </div>
        </div>
        <div className="Login_Bottom">

        </div>

      </div>
    </div>
  );
}

export default Login;
