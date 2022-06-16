import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeAxios, loadDetailAxios, deleteAxios } from "./redux/modules/book";
import { loadUserAxios } from "./redux/modules/user";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

import Thumb from "./image/hand-thumbs-up.svg";
import Close from "./image/closeButton.svg";

function Detail(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CloseModal = () => {
    props.close(false);
  };
  const loginInfo = useSelector((state) => state.user.userinfo.is_login);
  const postInfo = useSelector((state) => state.book.post);
  const loginUserNick = useSelector((state) => state.user.userinfo.nickname);

  React.useEffect(() => {
    dispatch(loadUserAxios());
  }, [1]);

  React.useEffect(() => {
    dispatch(loadDetailAxios(props.id));
    console.log(postInfo.rank);
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
    dispatch(deleteAxios(props.id))
      .then((success) => {
        if (success === true) {
          navigate("/")
          alert("게시물이 삭제 되었습니다");
        } else {
          alert("게시물 작성자만 삭제할 수 있습니다");
        }
      })
      .catch(() => {
        alert('삭제 도중 에러가 발생했습니다')
      });
  };

  const starRank = postInfo.rank;

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
          ></div>
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
              {postInfo.createdDate === undefined
                ? ""
                : postInfo.createdDate.split("T")[0]}{" "}
            </div>
            <button className="Info_user_3" id="LikeBtn" onClick={saveLike}>
              <img src={Thumb} /> 추천!!
            </button>
            <div className="Info_user_4"> {starRank} </div>
          </div>
          <div>
            <div className="Info_Title_wrap">
              <div className="Info_Title">{postInfo.title}</div>
            </div>
            <div className="Info_Text">{postInfo.content}</div>
          </div>
          <div
            className="EditWrap"
            style={{
              display: loginUserNick === postInfo.nickname ? "" : "none",
            }}
          >
            <button
              className="Edit_Body"
              onClick={() => {
                navigate("/edit");
              }}
            >
              게시물 수정{" "}
            </button>
            <button className="DeleteText" onClick={delBook}>
              게시물 삭제{" "}
            </button>
          </div>
          <div className="LinkWrap">
            <div className="Link_Bar">
              <span>도서 구매 링크</span>
            </div>
            <div className="Link_Text">
              <a href={postInfo.bookBuyUrl}>{postInfo.bookBuyUrl}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
