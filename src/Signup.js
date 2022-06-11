function Signup() {
  return (
    <div>
      <div>
        <div className="Join_Wrap">
          <div className="Join_Top">
            <div className="GuideBanner_join">
              <p className="Join_text_1"> 책크잇 회원 가입 </p>
              <p className="Join_text_2"> 책크잇의 회원이 되시고 읽고 싶었던 책의 다양한 리뷰를 읽어 보세요 </p>
            </div>
            <div className="Join_inputWrap">
              <div className="ID_JoinWrap">
                <label className="Join_Label">ID</label>
                <input className="Join_Input" placeholder="ID를 입력해 주세요" />
              </div>
              <br/>
              <div className="PW_JoinWrap">
                <span className="Join_Label">닉네임</span>
                <input className="Join_Input" placeholder="닉네임을 입력해 주세요" />
              </div>
              <br />
              <div className="PW_JoinWrap">
                <span className="Join_Label">PW</span>
                <input className="Join_Input" placeholder="비밀번호를 입력해 주세요" />
              </div>
              <div className="PW_JoinWrap">
                <span className="Join_Label">PW 재입력</span>
                <input className="Join_Input" placeholder="비밀번호를 다시 입력해 주세요" />
              </div>
            </div>
          </div>
          <div className="Join_Bottom">
            <button className="JoinButton">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
