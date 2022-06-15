import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeAxios, loadDetailAxios, loadBookAxios } from "./redux/modules/book";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import ReactDOM from "react-dom";

import Thumb from "./image/hand-thumbs-up.svg";
import Cover01 from "./image/book_sample.jpeg";
import Close from "./image/closeButton.svg";

function Detail(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const CloseModal = () => { 
    props.close(false)
  }
  const nicknameInfo = useSelector((state) => state.user.userinfo.nickname);
  const loginInfo = useSelector((state) => state.user.userinfo.is_login);
  const cardLists = useSelector((state) => state.book.list.rank);  
  const postInfo = useSelector((state) => state.book.post);
  // const nameofuser = useSelector((state) => state.user.userinfo.username);
  
  console.log(postInfo)

  React.useEffect(() => {
    dispatch(loadDetailAxios(props.id));
  }, [1]);

  const saveLike = async () => {
    if ( postInfo.userLikeStatus === true) {
      await dispatch(likeAxios(props.id))
      document.getElementById('LikeBtn').disabled = true
    }else if (loginInfo) {
      alert('이미 추천을 누르셨습니다')
    }else{
      alert('로그인한 유저만 추천할 수 있습니다')
    }
  }

  const deleteText = () => {
    if(window.confirm('게시물을 삭제 하시겠습니까? \n 삭제 된 데이터는 복구할 수 없습니다.')){}
  }

  return(
      <div className="Info_allwrap" tabIndex={0} style={{display: postInfo === null ? "none" : ""}}>
        <div className="Info_topWrap">
          <div className="ImageInfo_wrap">
            <div className="ImageInfo_wrap_Guide"> <img style={{ width: '260px' }} src={Cover01}/> </div>
          </div>
          <div className="Info_TitleWrap">
            <img src={Close} className="Xclose" onClick={() => {CloseModal()}}/> 
            <div className="Info_User_Wrap">
              <div className="Info_user_1"> {nicknameInfo}</div>
              <div className="Info_user_2"> 2022-06-10 </div>
              <button className="Info_user_3" id="LikeBtn" onClick={saveLike}><img src={Thumb}/> 추천!!</button>
              <div className="Info_user_4"> {cardLists} </div>
            </div>
            <div>
              <div className="Info_Title">원피스 100권</div>
              <div className="Info_Text">
                            "주역급이 한데 모인 옥상에서, 카이도 & 빅 맘에게 도전하는 루피 일행.<br />
                            최강 동맹을 상대로, 이길 방도는 있는 것일까?!
                            정면승부의 극한에 이른 싸움 끝에 기다리는 미래란?!
                            오니가시마에서 초격진!! <br />
                            '원피스'를 둘러싼 해양 모험 로망!!"
              </div>
            </div>
            <div className="EditWrap">
              <span className="Edit_Body" onClick={() => {navigate(`/edit/:postId`);}}>수정하기 </span>
              <span>| </span>
              <span className="DeleteText" onClick={deleteText}>삭제하기 </span>
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