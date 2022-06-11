import React from "react";
import "./App.css";

import Cover01 from "./image/book_sample.jpeg";

function Main() {
  const card_lists = Array.from({ length: 9 }, (v, i) => i);

  return (
    <div className="Card_field">
      {card_lists.map((list, i) => {
        return (
          <div className="Card_allWrap">
            <div className="card_half_Wrap_Top">
              <div className="Image_wrap">
                <img style={{ width: "90%" }} src={Cover01} />
              </div>
              <div className="Text_Wrap">
                <div className="Text_Title_wrap">원피스 100권</div>
                <div className="TextField">
                  "주역급이 한데 모인 옥상에서, 카이도 & 빅 맘에게 도전하는 루피
                  일행.
                  <br />
                  최강 동맹을 상대로, 이길 방도는 있는 것일까?! 정면승부의
                  극한에 이른 싸움 끝에 기다리는 미래란?! 오니가시마에서
                  초격진!! <br />
                  '원피스'를 둘러싼 해양 모험 로망!!"
                </div>
              </div>
            </div>
            <div className="card_half_Wrap_Bottom">르탄이 / 2022 - 06 - 10</div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
