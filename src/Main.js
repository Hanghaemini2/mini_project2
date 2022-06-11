import React from "react";
import axios from "axios";
import "./App.css";
import { useDispatch } from "react-redux";
import { loadBook } from "./redux/modules/book";

import Cover01 from "./image/book_sample.jpeg";

function Main() {
  const dispatch = useDispatch();

  const loadBookAxios = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5001/bookreviews",
      });
      console.log(response);
      dispatch(loadBook(response));
    } catch (err) {
      console.log("Error >>", err);
    }
  };

  React.useEffect(() => {
    loadBookAxios();
  }, []);
  const card_lists = Array.from({ length: 9 }, (v, i) => i);

  return (
    <div className="Card_field">
      {card_lists.map((list, i) => {
        return (
          <div>
            <div className="Card_allWrap">
              <div className="card_half_Wrap_Top">
                <div className="Image_wrap">
                  <img style={{ width: "160px" }} src={Cover01} />
                </div>
                <div className="Text_Wrap">
                  <div className="Text_Title_wrap">원피스 100권</div>
                  <div className="TextField">
                    "주역급이 한데 모인 옥상에서, 카이도 & 빅 맘에게 도전하는
                    루피 일행.
                    <br />
                    최강 동맹을 상대로, 이길 방도는 있는 것일까?! 정면승부의
                    극한에 이른 싸움 끝에 기다리는 미래란?! 오니가시마에서
                    초격진!! <br />
                    '원피스'를 둘러싼 해양 모험 로망!!"
                  </div>
                </div>
              </div>
              <div className="card_half_Wrap_Bottom">
                르탄이 / 2022 - 06 - 10
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
