import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBookAxios } from "./redux/modules/book";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const text_Title = React.useRef(null);
  const text_Body = React.useRef(null);
  const text_URL = React.useRef(null);

  const postInfo = useSelector((state) => state.book.post);
  const [rate, setRate] = React.useState(postInfo.rank);

  const editPost = async () => {
    await dispatch(
      postBookAxios(
        text_Title.current.value,
        text_Body.current.value,
        rate,
        text_URL.current.value
      )
    ).then(() => {
      navigate(`/`);
    });
  };

  return (
    <div className="Info_allwrap" tabIndex={0}>
      <div className="Info_topWrap">
        <div className="ImageEdit_wrap">
          <div
            className="ImageInfo_wrap_Guide"
            style={{ backgroundImage: `url(${postInfo.bookImageUrl})` }}
          >
            {" "}
          </div>
        </div>
        <div className="Edit_TitleWrap">
          <div className="Edit_User_Wrap">
            <div className="Edit_user_1"> {postInfo.nickname}</div>
            <div className="Info_user_2">
              {postInfo.createdDate === undefined
                ? ""
                : postInfo.createdDate.split("T")[0]}
            </div>
            {Array.from({ length: 5 }, (item, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setRate(i + 1);
                  }}
                  className="Edit_User4"
                  style={{ color: rate < i + 1 ? "#E4D5D3" : "#F4DA40" }}
                >
                  ★
                </div>
              );
            })}
          </div>
          <div>
            <div className="Edit_Title">{postInfo.title}</div>
            <div className="Info_Text">{postInfo.content}</div>
          </div>
          <div className="EditWrap">
            <button
              className="FixButton"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              수정 취소{" "}
            </button>
            <button className="FixButton" onClick={editPost}>
              {" "}
              수정 완료{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
