import React from 'react';
import '../../css/test.css';

class SettingTest extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="content">
                <div className="main_content">
                    <div className="content_container">
                        <div className="content_title">
                            <div>전략 테스트</div>
                            <button className="main_button">저장값 불러오기</button>
                            <button className="main_button">저장값 이름</button>
                        </div>
                    </div>
                    <div id="test_term_container" className="content_container">
                        <div className="content_title" id="test_term">
                            <div>테스트 기간 설정</div>
                        </div>
                        <ul id="test_subtitle_button" className="content_subtitle">
                            <li><a>운용자금 1000$ </a></li>
                            <li>|</li>
                            <li><a>수수료 설정 </a></li>
                        </ul>
                        <button className="main_button">시작</button>
                    </div>
                    <div>
                        <button className="main_button">3개씩 매도</button>
                        <button className="main_button">합산설정 on/off</button>
                    </div>
                    <div className="line_1" style={{flexDirection: "column"}}>
                        <div className="t_button" style={{margin: 0}}>
                            <div><button>1구간<br/><input type="text" /> %</button></div>
                            <div><button>1구간<br/><input type="text" /> $</button></div>
                            <div><button>1구간 진입횟수<br/><input type="text" /> </button></div>
                            <div><button>1구간 이익<br/><input type="text" /> %</button></div>
                        </div>
                        <div className="t_button" style={{margin: 0}}>
                            <div><button>2구간<br/><input type="text" /> %</button></div>
                            <div><button>2구간<br/><input type="text" /> $</button></div>
                            <div><button>2구간 진입횟수<br/><input type="text" /> </button></div>
                            <div><button>2구간 이익<br/><input type="text" /> %</button></div>
                        </div>
                        <div className="t_button" style={{margin: 0}}>
                            <div><button>3구간<br/><input type="text" /> %</button></div>
                            <div><button>3구간<br/><input type="text" /> $</button></div>
                            <div><button>3구간 진입횟수<br/><input type="text" /> </button></div>
                            <div><button>3구간 이익<br/><input type="text" /> %</button></div>
                        </div>
                    </div>
                    <div>
                        <div className="content_title">
                            <div id="pyramiding_title" className="pyramiding-checkbox">피라미딩 세팅 <input type="checkbox" name="pyramiding" /></div>
                            <div></div>
                        </div>
                    </div>
                    <div id="additional-option">
                        <div><button className="main_button">추가진입 +1%</button></div>
                        <div><button className="main_button">연속진입 3회</button></div>
                        <div><button className="main_button">최고 수익 실현 3</button></div>
                        <div><button className="main_button">되돌림시 청산구간 최고가에서 -1%</button></div>
                    </div>
                    <div className="img_div">
                        <img src="/img/graph.png"/>
                    </div>
                    <div className="content_title" id="result_container">
                        <ul>
                            <li><a>총 거래횟수</a></li>
                            <li><a>총 거래량$</a></li>
                            <li><a>총 수익률%</a></li>
                            <li><a>총 수익률$</a></li>
                            <li><a>최대 플로팅</a></li>
                        </ul>
                        <ul className="horizon_line"></ul>
                        <ul>
                            <li>200</li>
                            <li>247824</li>
                            <li>3%</li>
                            <li>30000</li>
                            <li>2</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SettingTest;