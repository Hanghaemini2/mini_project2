import React, { useState } from "react";
import Modal from 'react-modal';
import "./App.css";

import Thumb from "./image/hand-thumbs-up.svg";
import Cover01 from "./image/book_sample.jpeg";
import Close from "./image/closeButton.svg";

// import Detail from "./Detail";

function Main() {
  const card_lists = Array.from({ length: 9 }, (v, i) => i);
  const [modal, setModal] = useState(false);

  const now = new Date()
  const month = now.getMonth();
  const year = now.getFullYear();
  const date = now.getDate()
  const Today_data = [[year] + '년 \ ' + [month + 1] + '월 \ ' + [date] + '일']

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // function Detail() {  
  //   return (
  //     <div>
  //       <div className="Info_allwrap">
  //         <div className="Info_topWrap">
  //           <div className="ImageInfo_wrap">
  //             <div className="ImageInfo_wrap_Guide">
  //                <img style={{ width: '240px' }} src={Cover01} /> 
  //             </div>
  //           </div>
  //           <div className="Info_TitleWrap">
  //             <img src={Close} className="Xclose" onClick={() =>{ modal === false? setModal(true):setModal(false)}}/> 
  //             <div className="Info_User_Wrap">
  //               <div className="Info_user_1"> 르탄이</div>
  //               <div className="Info_user_2"> 2022-06-10 </div>
  //               <div className="Info_user_3"><img src={Thumb}/>  1,000,000</div>
  //               <div className="Info_user_4"> ★★★★★ </div>
  //             </div>
  //             <div>
  //               <div className="Info_Title">원피스 100권</div>
  //               <div className="Info_Text">
  //                   "주역급이 한데 모인 옥상에서, 카이도 & 빅 맘에게 도전하는 루피 일행.<br />
  //                   최강 동맹을 상대로, 이길 방도는 있는 것일까?!
  //                   정면승부의 극한에 이른 싸움 끝에 기다리는 미래란?!
  //                   오니가시마에서 초격진!! <br />
  //                   '원피스'를 둘러싼 해양 모험 로망!!"</div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="Sub-mit_Button_wrap">
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

    return (
      <div className="Card_field">
        {card_lists.map((list, i) => {
          return (
            <div className="Card_TopwithBottom">
              <div className="Card_allWrap">
                <div className="card_half_Wrap_Top">
                  <div className="Image_wrap">
                    <img style={{ width: '160px' }} src={Cover01} />
                  </div>
                  <div className="Text_Wrap">
                    <div className="Text_Title_wrap">
                      원피스 100권
                    </div>
                    <div className="TextField">
                      "주역급이 한데 모인 옥상에서, 카이도 & 빅 맘에게 도전하는 루피 일행.<br />
                      최강 동맹을 상대로, 이길 방도는 있는 것일까?!
                      정면승부의 극한에 이른 싸움 끝에 기다리는 미래란?!
                      오니가시마에서 초격진!! <br />
                      '원피스'를 둘러싼 해양 모험 로망!!"
                    </div>
                    <div className="book_detailButton_wrap">
                      <button className="book_detailButton">리뷰 상세 보기</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_half_Wrap_Bottom">
                <div className="Card_bottom_thumb"><img src={Thumb} />9,000,000</div>
                <div className="Card_bottom_Profile">르탄이 / {Today_data}</div>
              </div>
            </div>
          );
        })}
      </div>
  );
}

export default Main;

