import React from 'react';
import '../../css/setting.css';

class Setting extends React.Component {
    
    componentDidMount() {
		window.scrollTo(0,0);
	}

    render() {
        return (
            <div className="content">
                <div className="main_content">
                    <div>
                        <div className="content_title">
                            {/* <!-- 제일 큰 폰트크기 --> */}
                            <div>고급 환경설정</div>
                        </div>
                        <div>
                            <button className="main_button" id="load_button">저장값 불러오기</button>
                        </div>
                    </div>
                    <div>
                        <div className="content_title">
                            {/* <!-- 볼드 + 좀 크게 --> */}
                            <div>로봇세팅1</div>
                        </div>
                        <ul id="setting_options">
                            <li><a>합산정산 </a></li>
                            <li>|</li>
                            <li><a>3개씩 매도 </a></li>
                            <li>|</li>
                            <li><a>3개가 1%때 매도 </a></li>
                        </ul>
                    </div>
                    <div className="setting_button" style={{alignItems: "baseline"}}>
                        <button className="main_button" id="section_setting_button"> 구간별 설정 </button>
                        <div className="setting_box">
                            {/* <!-- 버튼 뒤에 수치들은 다 수정가능해야함 (input) --> */}
                            <div className="t_button">
                                <div><button>1구간.30%</button></div>
                                <div><button>1구간 7000$</button></div>
                                <div><button>1구간 진입횟수 10</button></div>
                                <div><button>1구간 이익 2.50%</button></div>
                            </div>
                            <div className="t_button">
                                <div><button>2구간.30%</button></div>
                                <div><button>2구간 7000$</button></div>
                                <div><button>2구간 진입횟수 10</button></div>
                                <div><button>2구간 이익 2.50%</button></div>
                            </div>
                            <div className="t_button">
                                <div><button>3구간.30%</button></div>
                                <div><button>3구간 7000$</button></div>
                                <div><button>3구간 진입횟수 10</button></div>
                                <div><button>3구간 이익 2.50%</button></div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className="pyramiding-checkbox"  id="pyramiding-div">피라미딩 세팅 <input type="checkbox" name="pyramiding" /></div>
                    </div>
                    <div className="s_button" id="pyramiding_buttons">
                        {/* <!-- 위와 동일 --> */}
                        <button className="main_button">추가진입 +1%</button>
                        <button className="main_button">연속진입 3회</button>
                        <button className="main_button">최고 수익 실현 3</button>
                        <button className="main_button">되돌림시 청산구간 <br /> 최고가에서 -1%</button>
                    </div>
                    <div id="save_buttons">
                        <button className="main_button">현제값을 저장</button>
                        <button className="main_button">현재값으로 전략 테스트</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;