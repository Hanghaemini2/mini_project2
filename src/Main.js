import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { loadBookAxios, changePage } from "./redux/modules/book";
import { useNavigate } from "react-router-dom";

import Thumb from "./image/hand-thumbs-up.svg";
import next from "./image/next_button.svg";
import prev from "./image/prev_button.svg";
import Detail from "./Detail";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cardInfo = useSelector((state) => state.book.list);
  const cardLists = useSelector((state) => state.book.list.content);
  const totalPages = useSelector((state) => state.book.list.totalPages);
  const pageViewNum = useSelector((state) => state.book.currentPage);

  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(null);

  // React.useEffect(() => {
  //   dispatch(loadBookAxios(pageViewNum));
  // }, []);

  React.useEffect(() => { 
    dispatch(loadBookAxios(pageViewNum)); 
  }, [pageViewNum]);

  return (
    <div className="Card_field">
      {modal === true ? <Detail close={setModal} id={modalId} /> : null}
      {cardLists === undefined
        ? null
        : cardLists.map((list, i) => {
            return (
              <div className="Card_TopwithBottom" key={list.id}>
                <div className="Card_allWrap">
                  <div className="card_half_Wrap_Top">
                    <div
                      className="Image_wrap"
                      style={{ backgroundImage: `url(${list.bookImageUrl})` }}
                    ></div>
                    <div className="Text_Wrap">
                      <div className="Text_Title_wrap">{list.title}</div>
                      <div className="TextField">{list.content}</div>
                      <div className="book_detailButton_wrap">
                        <button
                          className="book_detailButton"
                          onClick={() => {
                            setModalId(list.id);
                            setModal(true);
                          }}
                        >
                          리뷰 상세 보기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card_half_Wrap_Bottom">
                  <div className="Card_bottom_thumb">
                    <img src={Thumb} />
                    {list.like}
                  </div>
                  <div className="Card_bottom_Profile">
                    {list.nickname} / {list.createdDate.split("T")[0]}
                  </div>
                </div>
              </div>
            );
          })}
      <div className="Bottom_Numbering">
        <div className="page">
          <img
            src={prev}
            className="PageArrow"
            onClick={() => {
              dispatch(changePage(Math.max(pageViewNum - 5, 0)));
            }}
            style={{ display: pageViewNum < 3 ? "none" : "" }}
          />
          <button
            className="Page_Number"
            onClick={() => {
              dispatch(changePage(pageViewNum - 2));
            }}
            style={{ display: pageViewNum < 2 ? "none" : "" }}
          >
            {pageViewNum - 1}
          </button>
          <button
            className="Page_Number"
            onClick={() => {
              dispatch(changePage(pageViewNum - 1));
            }}
            style={{
              display:
                pageViewNum === 0
                  ? "none"
                  : totalPages < pageViewNum
                  ? "none"
                  : "",
            }}
          >
            {pageViewNum}
          </button>
          <button className="Page_Number" style={{ fontWeight: "bold" }}>
            {pageViewNum + 1}
          </button>
          <button
            className="Page_Number"
            onClick={() => {
              dispatch(changePage(pageViewNum + 1));
            }}
            style={{ display: totalPages < pageViewNum + 2 ? "none" : "" }}
          >
            {pageViewNum + 2}
          </button>
          <button
            className="Page_Number"
            onClick={() => {
              dispatch(changePage(pageViewNum + 2));
            }}
            style={{ display: totalPages < pageViewNum + 3 ? "none" : "" }}
          >
            {pageViewNum + 3}
          </button>
          <img
            src={next}
            className="PageArrow"
            onClick={() => {
              dispatch(changePage(Math.min(pageViewNum + 5, totalPages - 1)));
            }}
            style={{ display: pageViewNum + 4 > totalPages ? "none" : "" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
