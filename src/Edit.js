import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editBookAxios } from "./redux/modules/book";


function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const text_Title = React.useRef(null);
  const text_Body = React.useRef(null);
  const bookBuyUrl = React.useRef(null);

  const postInfo = useSelector((state) => state.book.post);
  const [rate, setRate] = React.useState(postInfo.rank);

  const editPost = async () => {
    if (text_Title.current.value === "" || text_Body.current.value === "") {
      alert("빈칸을 채워주세요!");
      return false;
    }
    await dispatch(
      editBookAxios(
        postInfo.id,
        text_Title.current.value,
        text_Body.current.value,
        rate,
        bookBuyUrl.current.value
      )
    ).then(() => {
      navigate(`/`);
    });
  };

  return (
    <div className="Info_allwrap" tabIndex={0}>
      <div className="Info_topWrap">
        <div className="ImageEdit_wrap">
          <div className="ImageEdit_wrap_Guide" style={{ backgroundImage: `url(${postInfo.bookImageUrl})` }}> </div>
          <input type="file" id="Add_img" accept="img/*" className="Add_Browse"></input>
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
                <div key={i} onClick={() => {setRate(i + 1)}}
                  className="Edit_User4" style={{ color: rate < i + 1 ? "#E4D5D3" : "#F4DA40" }}>
                  ★
                </div>
              )})}</div>
          <div>
            <div className="Edit_BodyWrap">
              <input className="Edit_Title" defaultValue={postInfo.title} ref={text_Title}/>
              <textarea className="Edit_Text" defaultValue={postInfo.content} ref={text_Body}/>
            </div>
            <div className="LinkWrap">
              <div className="Link_Bar"><span>도서 구매 링크</span></div>
              <input className="Link_Edit" defaultValue={postInfo.bookBuyUrl} ref={bookBuyUrl}></input>
            </div>
          </div>
          <div className="EditWrap">
            <button className="FixButton" onClick={() => {navigate("/")}}>수정 취소</button>
            <button className="FixButton" onClick={editPost}>수정 완료</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
