import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import './App.css';
import axios from "axios";

import "./App.css";

function Login() {
  const usernameRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const navigate = useNavigate();

  window.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      loginAxios();
    }
  });

  const loginAxios = async () => {
    if (
      usernameRef.current.value === "" ||
      passwordRef.current.value === "" ||
      usernameRef.current.value === " " ||
      passwordRef.current.value === " " ||
      usernameRef.current.value === null ||
      passwordRef.current.value === null
    ) {
      alert("아이디, 비밀번호를 채워주세요!");
      return false;
    }
    document.getElementById("LoginBtn").disabled = true;
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5001/login",
        data: {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        },
      });
      console.log(response);
      navigate("/");
      alert("로그인되었습니다!");
    } catch (err) {
      console.log("Error >>", err);
      document.getElementById("LoginBtn").disabled = false;
    }
  };

  return (
    <div>
      <div className="Login_Wrap">
        <div className="Login_Top">
          <div className="GuideBanner">
            <p className="Log_text_1">나만 알기 아까운 책 이야기, 책크잇!!</p>
            <p className="Log_text_2">
              책크잇의 모든 서비스를 이용하시려면 로그인 해주세요.
            </p>
          </div>
          <div className="Login_inputWrap">
            <div className="ID_Wrap">
              <label className="Login_Label">ID</label>
              <input
                className="Login_Input"
                ref={usernameRef}
                placeholder="ID를 입력해 주세요"
              />
            </div>
            <br />
            <div className="PW_Wrap">
              <span className="Login_Label">PW</span>
              <input
                ref={passwordRef}
                className="Login_Input"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
              />
            </div>
          </div>
          <span>아직 책크잇의 회원이 아니시라면 책크잇의 회원이 되어 보세요. <b className="LogintoJoin" 
          onClick={() => {navigate(`/signup`)}}>회원가입 바로 가기</b></span>
        </div>
        <div className="Login_Bottom">
          <button className="LoginButton" id="LoginBtn" onClick={loginAxios}>
            로그인
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Login;
