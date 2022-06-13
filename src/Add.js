import React, { useEffect } from "react";
import Star from "./image/star-fill.svg";


function Add() {

  const [rate, setRate] = React.useState(0);

  const text_Title = React.useRef(null);
  const text_Body = React.useRef(null);
  const point_star = React.useRef(null);
  const RePw_val = React.useRef(null);

  useEffect( ()=>{console.log(rate)} )
  

 return (
   <div>
     <div className="Add_allwrap">
       <span className="PageTitle">게시물 작성</span>
       <span className="Page_guide">반가워요 [닉네임]님, 오늘은 어떤 책을 소개해 주실까요?</span>
       <div className="Add_topWrap">
         <div className="Add_TitleWrap">
           <div>
             <input ref={text_Title} className="Add_Title_Input" placeholder="게시물 제목"></input>
             <textarea ref={text_Body} className="Add_Text_Input" placeholder="게시물 내용"></textarea>
           </div>
           <div className="Add_Bottom">
             <div className="Add_BuylinkText">
               <label className="Add_textLabel"> 구매 링크 </label>
               <input className="Add_inputIURL" placeholder="구매처 링크를 입력해 주세요"></input>
             </div>
             <div className="Add_StarPoint">
               <label className="Add_textLabel"> 도서 평점 </label>
               {Array.from({ length: 5 }, (item, i) => {
                 return (<div key={i} onClick={() => { setRate(i + 1); }} ref={point_star} className="StarPoint" 
                        style={{color: rate < i + 1 ? "#D0C4C5" : "#823B34" }} >★</div>);})}
             </div>
             <div className="Add_BuylinkText">
              <input type='file' id='Add_img' accept='img/*' className="Add_Browse"></input>
              <label htmlFor='Add_img' className="Add_PicButton">도서 이미지 추가</label>
             </div>
           </div>
         </div>
       </div>
       <div className="Sub-mit_Button_wrap">
         <button className="Add_PostButton hover1"><i>책크잇!!</i></button>
       </div>
     </div>
   </div>
 );
} 

export default Add;
