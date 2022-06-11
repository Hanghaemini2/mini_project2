import React from "react";

function Add() {
  return (
    <div>
      <p className="PageTitle">게시물 작성</p>
      <div className="Add_allwrap">
        <div className="Add_topWrap">
          <div className="ImageAdd_wrap">
            <div className="ImageAdd_wrap_Guide">
              도서 이미지
            </div>
          </div>
          <div className="Add_TitleWrap">
            <div className="Add_BuylinkText">

            </div>
            <div className="Add_StarPoint">

            </div>
            <button className="Add_PicButton">도서 이미지 추가</button>
          </div>
        </div>
        <div className="Add_bottomWrap">
          <div className="Add_TitleText">
            <span className="Add_Title_sub1"> 글 제목 </span>
            <input className="Add_Title_Input"></input>
          </div>
          <div className="Add_TitleText">
            <span className="Add_Title_sub1"> 글 내용 </span>
            <input className="Add_Title_Input"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
