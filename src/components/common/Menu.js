import React from 'react';
import {Link} from 'react-router-dom';


class Menu extends React.Component {

    render () {
        return (
            <>
                <nav className="navbar">
                    <div className="nav_logo">
                        {/*<i className="fas fa-bahai"></i>*/}<Link to="/"><img src="/img/logo.png"/>&nbsp;Penta Plant</Link>
                    </div>
                    <ul className="nav_menu">
                        <li>
                            <Link to="#">거래소</Link>
                            <ul className="dropdown_content">
                                <li>ABOUT</li>
                                <li>링크연결</li>
                                <li>수수료</li>
                            </ul>
                        </li>
                        <li>|</li>
                        <li> 
                            <Link to="#">MTOP</Link>
                            <ul className="dropdown_content">
                                <li>MTOP백서</li>
                                <li>MTOP비젼</li>
                            </ul>
                        </li>
                        <li>|</li>
                        <li>
                            <Link to="#">추천인 수익</Link>
                            <ul className="dropdown_content">
                                <li>추천인수익이란?</li>
                                <li>레벨업 방법</li>
                                <li>수수료 공유정책</li>
                                <li>추천인 링크발급(배너)</li>
                            </ul>
                        </li>
                        <li>|</li>
                        <li>
                            <Link to="/autobot">AUTO 로봇</Link>
                            <ul className="dropdown_content">
                                <li>ABOUT</li>
                                <li>AUTO 결제</li>
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
                            <Link to="#">문의</Link>

                        </li>
                    </ul>
                    <div className="dropdown"></div>
                </nav>
            </>
        )
    }

        
}

export default Menu;