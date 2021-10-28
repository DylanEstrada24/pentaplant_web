import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { MobileView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import MyInfo from './MyInfo';

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

    var temp = ""
    var temp = localStorage.getItem("sessionToken");
    console.log(" ======= loginmenubar.js  sessionToken   ", temp);


    return (
        <>
            <nav className="navbar">
                <div className="nav_logo">
                    {/*<i className="fas fa-bahai"></i>*/}<Link to="/"><img src="/img/logo.png"  style={{"backgroundColor": "white"}}/>&nbsp;Penta Plant</Link>
                </div>
                <ul className="nav_menu">
                    <li>
                        <Link to="#">거래소</Link>
                        <ul className="dropdown_content">
                            <li><Link to="/market/about">ABOUT</Link></li>
                            <li>링크연결</li>
                            <li><Link to="/market/fees">수수료</Link></li>
                        </ul>
                    </li>
                    <li>|</li>
                    <li> 
                        <Link to="#">MTOP</Link>
                        <ul className="dropdown_content">
                            <li><Link to="/mtop/whitePaper">MTOP백서</Link></li>
                            <li><Link to="/mtop/vision">MTOP비젼</Link></li>
                        </ul>
                    </li>
                    <li>|</li>
                    <li>
                        <Link to="#">추천인 수익</Link>
                        <ul className="dropdown_content">
                            <li><Link to="/recommand/recommandGain">추천인수익이란?</Link></li>
                            <li><Link to="/recommand/level">레벨업 방법</Link></li>
                            <li>수수료 공유정책</li>
                            <li>추천인 링크발급(배너)</li>
                        </ul>
                    </li>
                    <li>|</li>
                    <li>
                        {temp != "" ?
                        <>
                        <Link to="/autobot">AUTO 로봇</Link>
                        <ul className="dropdown_content">
                            <li><Link to="/autobot/about">ABOUT</Link></li>
                            <li><Link to="/autobot/purchase">AUTO 결제</Link></li>
                        </ul>
                        :
                        <Link to="/autobot/about">AUTO 로봇</Link>
                        <ul className="dropdown_content">
                            <li><Link to="/autobot/about">ABOUT</Link></li>
                            <li><Link to="/autobot/about">AUTO 결제</Link></li>
                        </ul>
                        </>
                        }
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
                    <MyInfo />
                </div>
            </nav>
        </>
    )
}

        


export default Menubar;