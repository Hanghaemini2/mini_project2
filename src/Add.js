import React from "react";

function Add() {

  const [rate, setRate] = React.useState(0);


  return (
    <div>
      <div className="Add_allwrap">
        <div className="Add_topWrap">
          <div className="ImageAdd_wrap">
            <div className="ImageAdd_wrap_Guide">
              도서 이미지
            </div>
            <input type='file' id='Add_img' accept='img/*' style={{ display: 'none' }}></input>
            <label htmlFor='Add_img' className="Add_PicButton">도서 이미지 추가</label>
          </div>
          <div className="Add_TitleWrap">
            <p className="PageTitle">게시물 작성</p>
            <div className="Add_BuylinkText">
              <span className="Add_URL_Sub1"> 구매 링크 </span>
              <input className="Add_inputIURL"></input>
            </div>
            <div className="Add_StarPoint">
              <span className="Add_URL_Sub1"> 도서 평점 </span>
              {Array.from({ length: 5 }, (item, i) => {
                 return (<div key={i} onClick={() => { setRate(i + 1);}} className="StarPoint"
                  style={{color: rate < i + 1 ? "#D0C4C5" : "#823B34" }}>★</div> ); })}
            </div>
            <div className="Add_TitleText">
              <span className="Add_Title_sub1"> 읽은 책을 소개해 주세요 </span>
            </div>
            <div>
              <input className="Add_Title_Input" placeholder="게시물 제목"></input>
              <textarea className="Add_Text_Input" placeholder="게시물 내용"></textarea>
            </div>
          </div>
        </div>
        <div className="Sub-mit_Button_wrap">
          <button className="Add_PostButton"><i>책크잇!!</i></button>
        </div>
      </div>
    </div>
  );
}

export default Add;
