import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postBookAxios } from './redux/modules/book'
import { Routes, Route, Link, useNavigate } from "react-router-dom";



function Edit() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [rate, setRate] = React.useState(0);

  const text_Title = React.useRef(null);
  const text_Body = React.useRef(null);
  const text_URL = React.useRef(null);

  let frm = new FormData();
    let photoFile = document.getElementById('Add_img');


  const savePost = async () => {
      frm.append('Add_img', photoFile.files[0])
      await dispatch(postBookAxios(
        text_Title.current.value,
        text_Body.current.value,
        rate,
        text_URL.current.value,
        frm
        ))
        .then(() => {
          navigate(`/`)
        })
  }


  return (
    <div className="Info_allwrap" tabIndex={0}>
        <div className="Info_topWrap">
          <div className="ImageEdit_wrap">
            <div className="ImageEdit_wrap_Guide">  </div>
            <input type='file' id='Add_img' accept='img/*' className="Add_Browse"></input>
            <label htmlFor='Add_img' className="Add_textLabel"> 이미지 교체 </label>
          </div>
          <div className="Edit_TitleWrap">
            
            <div className="Edit_User_Wrap">
              <div className="Edit_user_1"> 르탄이</div>
              <div className="Info_user_2"> 2022-06-10 </div>
              {Array.from({ length: 5 }, (item, i) => {
                 return (<div key={i} onClick={() => { setRate(i + 1); }} className="Edit_User4" 
                        style={{color: rate < i + 1 ? "#E4D5D3" : "#F4DA40" }} >★</div>);})}
            </div>
            <div>
              <div className="Edit_Title">원피스 100권</div>
              <div className="Info_Text">
                "주역급이 한데 모인 옥상에서, 카이도 & 빅 맘에게 도전하는 루피 일행.<br />
                최강 동맹을 상대로, 이길 방도는 있는 것일까?!
                정면승부의 극한에 이른 싸움 끝에 기다리는 미래란?!
                오니가시마에서 초격진!! <br />
                '원피스'를 둘러싼 해양 모험 로망!!"
              </div>
            </div>
            <div className="EditWrap">
              <button className="FixButton" onClick={savePost}> 수정 취소 </button>
              <button className="FixButton" onClick={savePost}> 수정 완료 </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Edit;
