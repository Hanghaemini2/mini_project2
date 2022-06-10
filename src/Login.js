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
            <div>
              <span className="Login_Label">ID</span>
              <input className="Login_Input" placeholder="ID를 입력해 주세요"/>
            </div>
            <div>
              <span className="Login_Label">PW</span>
              <input className="Login_Input" placeholder="비밀번호를 입력해 주세요"/>
            </div>
          </div>
        </div>
        <div className="Login_Bottom">
          <button>로그인</button>
        </div>

      </div>
    </div>
  );
}

export default Login;
