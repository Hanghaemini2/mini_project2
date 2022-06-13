import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { loadBook } from "./redux/modules/book";

import Thumb from "./image/hand-thumbs-up.svg";
import next from "./image/next_button.svg";
import prev from "./image/prev_button.svg";
import Cover01 from "./image/book_sample.jpeg";
import Detail from "./Detail";

function Main() {
  const dispatch = useDispatch();

  const cardInfo = useSelector((state) => state.book.list);
  const cardLists = useSelector((state) => state.book.list.content);

  const [modal, setModal] = useState(false);

  React.useEffect(() => {
    dispatch(loadBookAxios());
  }, []);

  return (
    <div className="Card_field">
      {modal === true ? <Detail close={setModal} /> : null}
      {cardLists === undefined
        ? null
        : card_lists.map((list, i) => {
            return (
              <div className="Card_TopwithBottom" key={list.id}>
                <div className="Card_allWrap">
                  <div className="card_half_Wrap_Top">
                    <div className="Image_wrap">
                      <img style={{ width: "160px" }} src={list.bookImageUrl} />
                    </div>
                    <div className="Text_Wrap">
                      <div className="Text_Title_wrap">{list.title}</div>
                      <div className="TextField">{list.content}</div>
                      <div className="book_detailButton_wrap">
                        <button
                          className="book_detailButton"
                          onClick={() => {
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
          <img src={prev} className="PageArrow" />
          <button className="Page_Number" onClick={() => () => {}}>
            1
          </button>
          <button className="Page_Number">2</button>
          <button className="Page_Number">3</button>
          <button className="Page_Number">4</button>
          <button className="Page_Number">5</button>
          <img src={next} className="PageArrow" />
        </div>
      </div>
    </div>
  );
}

export default Main;
