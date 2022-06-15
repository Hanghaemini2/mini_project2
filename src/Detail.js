import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeAxios, loadDetailAxios, deleteAxios } from "./redux/modules/book";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import ReactDOM from "react-dom";

import Thumb from "./image/hand-thumbs-up.svg";
import Cover01 from "./image/book_sample.jpeg";
import Close from "./image/closeButton.svg";

function Detail(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CloseModal = () => {
    props.close(false);
  };
  const loginInfo = useSelector((state) => state.user.userinfo.is_login);
  const postInfo = useSelector((state) => state.book.post);
  // const nameofuser = useSelector((state) => state.user.userinfo.username);

  console.log(postInfo.rank);

  React.useEffect(() => {
    dispatch(loadDetailAxios(props.id));
  }, [1]);

  const saveLike = async () => {
    if (postInfo.userLikeStatus === true) {
      await dispatch(likeAxios(props.id));
      document.getElementById("LikeBtn").disabled = true;
    } else if (loginInfo) {
      alert("이미 추천을 누르셨습니다");
    } else {
      alert("로그인한 유저만 추천할 수 있습니다");
    }
  };

  const delBook = async () => {
    window.confirm(
      "게시물을 삭제 하시겠습니까? \n삭제 된 데이터는 복구할 수 없습니다."
    );
    await dispatch(deleteAxios(props.id))
      .then(() => {
        alert("게시물이 삭제 되었습니다");
      })
      .catch(() => {
        alert("게시물 작성자만 삭제할 수 있습니다");
      });
  };

  return (
    <div
      className="Info_allwrap"
      tabIndex={0}
      style={{ display: postInfo === null ? "none" : "" }}
    >
      <div className="Info_topWrap">
        <div className="ImageInfo_wrap">
          <div
            className="ImageInfo_wrap_Guide"
            style={{ backgroundImage: `url(${postInfo.bookImageUrl})` }}
          >
            {" "}
          </div>
        </div>
        <div className="Info_TitleWrap">
          <img
            src={Close}
            className="Xclose"
            onClick={() => {
              CloseModal();
            }}
          />
          <div className="Info_User_Wrap">
            <div className="Info_user_1"> {postInfo.nickname}</div>
            <div className="Info_user_2">
              {" "}
              {postInfo.createdDate === undefined
                ? ""
                : postInfo.createdDate.split("T")[0]}{" "}
            </div>
            <button className="Info_user_3" id="LikeBtn" onClick={saveLike}>
              <img src={Thumb} /> 추천!!
            </button>
            <div className="Info_user_4"> {postInfo.rank} </div>
          </div>
          <div>
            <div className="Info_Title">{postInfo.title}</div>
            <div className="Info_Text">{postInfo.content}</div>
          </div>
          <div className="EditWrap">
            <span
              className="Edit_Body"
              onClick={() => {
                navigate(`/edit/:postId`);
              }}
            >
              수정하기{" "}
            </span>
            <span>| </span>
            <span className="DeleteText" onClick={delBook}>
              삭제하기{" "}
            </span>
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
