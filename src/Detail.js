import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadBookAxios } from "./redux/modules/book";


import ReactDOM from "react-dom";

import Thumb from "./image/hand-thumbs-up.svg";
import Cover01 from "./image/book_sample.jpeg";
import Close from "./image/closeButton.svg";

function Detail(props) {
  const dispatch = useDispatch()

  const CloseModal = () => { 
    props.close(false)
  }

  React.useEffect(() => {
    dispatch(loadBookAxios());
  }, []);


  return(
      <div className="Info_allwrap" tabIndex={0}>
        <div className="Info_topWrap">
          <div className="ImageInfo_wrap">
            <div className="ImageInfo_wrap_Guide"> <img style={{ width: '260px' }} src={Cover01}/> </div>
          </div>
          <div className="Info_TitleWrap">
            <img src={Close} className="Xclose" onClick={() => {CloseModal()}}/> 
            <div className="Info_User_Wrap">
              <div className="Info_user_1"> 르탄이</div>
              <div className="Info_user_2"> 2022-06-10 </div>
              <button className="Info_user_3"><img src={Thumb}/> 추천!!</button>
              <div className="Info_user_4"> ★★★★★ </div>
            </div>
            <div>
              <div className="Info_Title">원피스 100권</div>
              <div className="Info_Text">
                            "주역급이 한데 모인 옥상에서, 카이도 & 빅 맘에게 도전하는 루피 일행.<br />
                            최강 동맹을 상대로, 이길 방도는 있는 것일까?!
                            정면승부의 극한에 이른 싸움 끝에 기다리는 미래란?!
                            오니가시마에서 초격진!! <br />
                            '원피스'를 둘러싼 해양 모험 로망!!"</div>
            </div>
            <div className="EditWrap">
              <span className="Edit_Body">수정하기 </span>
              <span>| </span>
              <span className="DeleteText">삭제하기 </span>
            </div>
          </div>
        </div>
        {/* <div className="Info_bottomWrap">
            <ul>댓글 
              <li>르탄이 | 벌써 100권이나 나왔네요</li>
              <li>르탄이 | 벌써 100권이나 나왔네요</li>
              <li>르탄이 | 벌써 100권이나 나왔네요</li>
              <li>르탄이 | 벌써 100권이나 나왔네요</li>
              <li>르탄이 | 벌써 100권이나 나왔네요</li>
              <li>르탄이 | 벌써 100권이나 나왔네요</li>
              <li>르탄이 | 벌써 100권이나 나왔네요</li>
              <li>르탄이 | 벌써 100권이나 나왔네요</li>
              <li>르탄이 | 벌써 100권이나 나왔네요</li>
            </ul>
        </div> */}
      </div>
  );
}

export default Detail;


// onClick={console.log('X 버튼을 눌렀구만 자네')} 