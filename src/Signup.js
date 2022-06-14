import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const usernameRef = React.useRef(null);
  const nicknameRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const confirmPasswordRef = React.useRef(null);

  const navigate = useNavigate();

  window.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      signupFunction();
    }
  });

  const signupFunction = async () => {
    if (
      usernameRef.current.value === "" ||
      nicknameRef.current.value === "" ||
      passwordRef.current.value === "" ||
      confirmPasswordRef.current.value === "" ||
      usernameRef.current.value === " " ||
      nicknameRef.current.value === " " ||
      passwordRef.current.value === " " ||
      confirmPasswordRef.current.value === " " ||
      usernameRef.current.value === null ||
      nicknameRef.current.value === null ||
      passwordRef.current.value === null ||
      confirmPasswordRef.current.value === null
    ) {
      alert("아이디, 닉네임, 비밀번호를 채워주세요!");
      return false;
    }
    document.getElementById("SigninBtn").disabled = true;
    try {
      await signupAxios(
        usernameRef.current.value,
        nicknameRef.current.value,
        passwordRef.current.value,
        confirmPasswordRef.current.value
      );
      navigate("/login");
      alert("회원가입되었습니다!");
    } catch (err) {
      console.log("Error >>", err);
      document.getElementById("SigninBtn").disabled = false;
    }
  };

  return (
    <div>
      <div>
        <div className="Join_Wrap">
          <div className="Join_Top">
            <div className="GuideBanner_join">
              <p className="Join_text_1"> 책크잇 회원 가입 </p>
              <p className="Join_text_2">
                책크잇의 회원이 되시고 읽고 싶었던 책의 다양한 리뷰를 읽어
                보세요
              </p>
            </div>
            <div className="Join_inputWrap">
              <div className="ID_JoinWrap">
                <label className="Join_Label">ID</label>
                <input
                  className="Join_Input"
                  ref={usernameRef}
                  placeholder="ID를 입력해 주세요"
                />
              </div>
              <br />
              <div className="PW_JoinWrap">
                <span className="Join_Label">닉네임</span>
                <input
                  className="Join_Input"
                  ref={nicknameRef}
                  placeholder="닉네임을 입력해 주세요"
                />
              </div>
              <br />
              <div className="PW_JoinWrap">
                <span className="Join_Label">PW</span>
                <input
                  className="Join_Input"
                  ref={passwordRef}
                  type="password"
                  placeholder="비밀번호를 입력해 주세요"
                />
              </div>
              <div className="PW_JoinWrap">
                <span className="Join_Label">PW 재입력</span>
                <input
                  className="Join_Input"
                  ref={confirmPasswordRef}
                  type="password"
                  placeholder="비밀번호를 다시 입력해 주세요"
                />
              </div>
            </div>
          </div>
          <div className="Join_Bottom">
            <button
              className="JoinButton"
              id="SigninBtn"
              onClick={signupFunction}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
