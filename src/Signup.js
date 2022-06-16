import React from "react";
import { signupAxios } from "./redux/modules/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Signup() {
  const usernameRef = React.useRef(null);
  const nicknameRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const confirmPasswordRef = React.useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      await dispatch(
        signupAxios(
          usernameRef.current.value,
          nicknameRef.current.value,
          passwordRef.current.value,
          confirmPasswordRef.current.value
        )
      ).then((res) => {
        if (res === true) {
          console.log(res);
          navigate("/login");
          alert("회원가입되었습니다!");
        } else {
          if (res.response.data.message === "the username already exists.") {
            alert("이미 가입된 ID입니다!");
            document.getElementById("SigninBtn").disabled = false;
          } else if (
            res.response.data.message === "the nickname already exists."
          ) {
            alert("이미 가입된 닉네임입니다!");
            document.getElementById("SigninBtn").disabled = false;
          } else if (res.response.data.errors[0] === undefined) {
            alert("입력한 내용을 다시 확인해주세요!");
            document.getElementById("SigninBtn").disabled = false;
          } else {
            alert(
              res.response.data.errors[0].field +
                "에 " +
                res.response.data.errors[0].reason
            );
            document.getElementById("SigninBtn").disabled = false;
          }
        }
      });
    } catch (err) {
      alert("에러입니다!" + err);
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
                <input className="Join_Input" ref={usernameRef} placeholder="ID를 입력해 주세요"/>
              </div>
              <br />
              <div className="PW_JoinWrap">
                <span className="Join_Label">닉네임</span>
                <input className="Join_Input" ref={nicknameRef} placeholder="닉네임을 입력해 주세요"/>
              </div>
              <br />
              <div className="PW_JoinWrap">
                <span className="Join_Label">PW</span>
                <input className="Join_Input" ref={passwordRef} type="password" placeholder="비밀번호를 입력해 주세요"/>
              </div>
              <div className="Guide_PW">
              <span >Tip) 비밀번호는 8자리 이상 입력해 주세요</span>
            </div>
              <div className="PW_JoinWrap">
                <span className="Join_Label">PW 재입력</span>
                <input className="Join_Input" ref={confirmPasswordRef} type="password" placeholder="비밀번호를 다시 입력해 주세요" />
              </div>
            </div>
          </div>
          <div className="Join_Bottom">
            <button className="JoinButton" id="SigninBtn" onClick={signupFunction}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
