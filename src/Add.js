import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadBookAxios } from "./redux/modules/book";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { postBookAxios } from "./redux/modules/book";
// import { loadUser } from './redux/modules/user'
import Star from "./image/star-fill.svg";

function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [rate, setRate] = React.useState(0);

  useEffect(() => {
    console.log(rate);
  });

  const text_Title = React.useRef(null);
  const text_Body = React.useRef(null);
  // const point_star = React.useRef(null);
  const text_URL = React.useRef(null);

  // React.useEffect(() => {
  //   dispatch(loadUser());
  // }, []);

  // console.log(loadUser())

  let frm = new FormData();
  let photoFile = document.getElementById("Add_img");

  const savePost = async () => {
    frm.append("Add_img", photoFile.files[0]);
    await dispatch(
      postBookAxios(
        text_Title.current.value,
        text_Body.current.value,
        rate,
        text_URL.current.value,
        frm
      )
    ).then(() => {
      navigate(`/`);
    });
  };

 return (
   <div>
     <div className="Add_allwrap">
       <span className="PageTitle">게시물 작성</span>
       <span className="Page_guide">반가워요 [유저 네임]님, 오늘은 어떤 책을 소개해 주실까요?</span>
       <div className="Add_topWrap">
         <div className="Add_TitleWrap">
           <div>
             <input ref={text_Title} className="Add_Title_Input" placeholder="게시물 제목"></input>
             <textarea ref={text_Body} className="Add_Text_Input" placeholder="게시물 내용"></textarea>
           </div>
           <div className="Add_Bottom">
             <div className="Add_BuylinkText">
               <label className="Add_textLabel"> 구매 링크 </label>
               <input className="Add_inputIURL" ref={text_URL} placeholder="구매처 링크를 입력해 주세요"></input>
             </div>
             <div className="Add_StarPoint">
               <label className="Add_textLabel"> 도서 평점 </label>
               {Array.from({ length: 5 }, (item, i) => {
                 return (<div key={i} onClick={() => { setRate(i + 1); }} className="StarPoint" 
                        style={{color: rate < i + 1 ? "#D0C4C5" : "#823B34" }} >★</div>);})}
             </div>
             <form className="Add_BuylinkText" encType="multipart/form-data">
              <input type='file' id='Add_img' accept='img/*' className="Add_Browse"></input>
              <label htmlFor='Add_img' className="Add_textLabel"> 도서 이미지 </label>
             </form>
           </div>
         </div>
       </div>
       <div className="Sub-mit_Button_wrap">
         <button className="Add_PostButton hover1" onClick={() => {savePost()}}><i>책크잇!!</i></button>
       </div>
     </div>
   </div>
 );
} 

export default Add;
