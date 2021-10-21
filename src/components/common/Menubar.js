import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import styled from "styled-components";
import { MobileView } from "react-device-detect";
import { MenuOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Login from "./Login";

import Modal from "react-modal";
import "../../css/apiKey.css";

import translation from "../../translation";

// const MenuList = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

// const NavTop = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     button {
//         background: white;
//         border: none;
//     }
// `;

function Menubar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const [toggleMenu, setToggleMenu] = useState(false)
  // const [toggleBar, setToggleBar] = useState(true)

  // const toggleChange = () => {
  //     setToggleMenu(!toggleMenu)
  //     setToggleBar(!toggleBar)
  // }

  // const onMenuClick = () => {
  //     setToggleMenu(!toggleMenu)
  //     setToggleBar(!toggleBar)
  // }

  var temp = localStorage.getItem("sessionToken");

  return (
    <>
      <nav className="navbar">
        <div className="nav_logo">
          {/*<i className="fas fa-bahai"></i>*/}
          <Link to="/">
            <img src="/img/logo.png" style={{ backgroundColor: "white" }} />
            &nbsp;Penta Plant
          </Link>
        </div>
        <ul className="nav_menu">
          <li>
            <Link to="#">{translation.exchange.eng}</Link>
            <ul className="dropdown_content">
              {/* <li><Link to="/market/about">ABOUT</Link></li> */}
              <li>링크연결</li>
              <li>
                <Link to="/market/fees">{translation.option.eng}</Link>
              </li>
              <li>
                <Link to="/autobot/tradeHistory">
                  {translation.transactions.eng}
                </Link>
              </li>
            </ul>
          </li>
          <li>|</li>
          <li>
            <Link to="#">MTOP</Link>
            <ul className="dropdown_content">
              <li>
                <Link to="/mtop/whitePaper">MTOP백서</Link>
              </li>
              <li>
                <Link to="/mtop/vision">MTOP비젼</Link>
              </li>
            </ul>
          </li>
          <li>|</li>
          <li>
            <Link to="#">추천인 수익</Link>
            <ul className="dropdown_content">
              <li>
                <Link to="/recommand/recommandGain">추천인수익이란?</Link>
              </li>
              <li>
                <Link to="/recommand/level">레벨업 방법</Link>
              </li>
              <li>수수료 공유정책</li>
              <li>추천인 링크발급(배너)</li>
            </ul>
          </li>
          <li>|</li>
          <li>
            {temp != null ?
            <Link to="/autobot">AUTO 로봇</Link>
            :null}
            {temp == null?
            <Link to="/autobot/about">AUTO 로봇</Link>
            :null}
            <ul className="dropdown_content">
              <li>
                <Link to="/autobot/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/autobot/purchase">AUTO 결제</Link>
              </li>
              <li>
                {temp != null ?
                <a onClick={() => setModalIsOpen(true)}>API KEY 입력</a>
                :null}
              </li>
            </ul>
          </li>
          <li>|</li>
          <li>
            <Link to="#">특별기능</Link>
            <ul className="dropdown_content">
              <li>코인담보대출</li>
              <li>마진거래</li>
              <li>OTC(링크)</li>
              <li>프렌차이즈</li>
            </ul>
          </li>
          <li>|</li>
          <li>
            <Link to="#">제휴</Link>
            <ul className="dropdown_content">
              <li>스탁결제</li>
              <li>US100 AUTO</li>
              <li>카드발급</li>
            </ul>
          </li>
          <li>|</li>
          <li>
            <Link to="/ask">문의</Link>
          </li>
        </ul>
        {/* Mobile */}
        {/* <MobileView>
                    <NavTop>
                        <Button type="primary" onClick={toggleChange} style={{ marginBottom: 16}}>
                            { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
                        </Button>
                    </NavTop>
                    { toggleMenu && 
                        <Menu 
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        theme="light"
                        inlineCollapsed={toggleBar}
                        onClick={onMenuClick}
                        >
                            <Menu.Item key="market">
                                거래소
                            </Menu.Item>
                            <Menu.Item key="mtop">
                                MTOP
                            </Menu.Item>
                            <Menu.Item key="recommand">
                                추천인 수익
                            </Menu.Item>
                            <Menu.Item key="autobot">
                                <Link to="/autobot">
                                    AUTO 로봇
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="special">
                                특별기능
                            </Menu.Item>
                            <Menu.Item key="coalition">
                                제휴
                            </Menu.Item>
                            <Menu.Item key="inquire">
                                문의
                            </Menu.Item>
                        </Menu>
                    }
                </MobileView> */}
        <div className="login_button">
          <Login />
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <div className="api_modal_container">
            <div className="api_key_input_title">
              <a
                className="api_key_close_icon"
                onClick={() => setModalIsOpen(false)}
              >
                X
              </a>
              <span className="api_key_title">
                거래소 API Key를 입력해주세요.
              </span>
            </div>
            <div className="api_key_input_container">
              <span className="api_key_input_text" id="api_key_input">API Key</span>
              <input type="text" className="api_key_input" />
            </div>
            <div className="api_key_input_container">
              <span className="api_key_input_text" id="secret_key_input">Secret Key</span>
              <input type="text" className="api_key_input" />
            </div>
            <div className="api_key_button_container">
              <button className="main_button" >API 인증</button>
              <button
                className="close_button"
                onClick={() => setModalIsOpen(false)}
              >
                닫기
              </button>
            </div>
          </div>
        </Modal>
      </nav>
    </>
  );
}

export default Menubar;
