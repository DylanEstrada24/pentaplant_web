import React from 'react';
import '../../css/test.css';
import axios from 'axios';

import Title from '../common/Title';
import TradingViewWidget from 'react-tradingview-widget';
import { trackPromise } from 'react-promise-tracker';
import { hidden } from 'jest-matcher-utils/node_modules/chalk';
import Loader from '../common/Loader';

class SettingTest extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);

        // const script1 = document.createElement("script");

        // script1.type = "text/javascript";
        // script1.src = "https://s3.tradingview.com/tv.js";

        // document.querySelector("#trading_widget_container").appendChild(script1);

        // const script2 = document.createElement("script");
        // script2.type = "text/javascript";
        // script.src = "https://s3.tradingview.com/tv.js";
        // script2.async = true;
        // script2.text = `
        // new TradingView.widget(
        //     {
        //         "autosize": true,
        //         "symbol": "BITSTAMP:BTCUSD",
        //         "interval": "D",
        //         "timezone": "Etc/UTC",
        //         "theme": "light",
        //         "style": "1",
        //         "locale": "kr",
        //         "toolbar_bg": "#f1f3f6",
        //         "enable_publishing": false,
        //         "allow_symbol_change": true,
        //         "container_id": "tradingview_bbab8"
        //     }
        // );`;
        
        // document.querySelector("#trading_widget_container").appendChild(script2);
        
    }

    constructor(props) {
        super(props);
        this.testButton = this.testButton.bind(this);
        this.testIndicator = this.testIndicator.bind(this);
        this.countIncrease = this.countIncrease.bind(this);
        this.countDecrease = this.countDecrease.bind(this);
        this.showResult = this.showResult.bind(this);
        // this.checkNumber = this.checkNumber.bind(this);
    }

    state = {
        count: 1,
        loading: false
    }

    countIncrease() {
        if(this.state.count != 3) {
            this.setState({
                count: this.state.count + 1
            });
            console.log(this.state.count);
            if(this.state.count + 1 == 3) {
                document.querySelector(".l_button").remove();
            }
            document.querySelector("#test_section" + (this.state.count + 1)).style.display = "flex";
        } else {
            alert("3구간까지 설정가능합니다.");
        }
    }

    countDecrease() {
        if(this.state.count != 1) {
            this.setState({
                count: this.state.count - 1
            });
        } else {
            alert("최소 1구간이 활성화되어야합니다.");
        }
    }
    
    testButton() {

        // API는 기입된 구간까지(2구간까지 했으면 2번) 요청함.

        const url = `http://localhost:3000/test`; // 임시주소

        // 구간별 퍼센트
        const firstRange = document.querySelector("#first_section_range").value *= 1;
        const secondRange = document.querySelector("#second_section_range").value *= 1;
        const thirdRange = document.querySelector("#third_section_range").value *= 1;
        
        // 구간별 자금
        const firstAmount = document.querySelector("#first_section_amount").value *= 1;
        const secondAmount = document.querySelector("#second_section_amount").value *= 1;
        const thirdAmount = document.querySelector("#third_section_amount").value *= 1;

        // 진입회수
        const firstEntry = document.querySelector("#first_section_entry").value *= 1;
        const secondEntry = document.querySelector("#second_section_entry").value *= 1;
        const thirdEntry = document.querySelector("#third_section_entry").value *= 1;

        // 구간별 이익
        const firstGain = document.querySelector("#first_section_gain").value *= 1;
        const secondGain = document.querySelector("#second_section_gain").value *= 1;
        const thirdGain = document.querySelector("#third_section_gain").value *= 1;

        // 구간별 피라미딩
        const firstPyramiding = document.querySelector("#first_section_pyramiding").checked ? "True" : "False";
        const secondPyramiding = document.querySelector("#second_section_pyramiding").checked ? "True" : "False";
        const thirdPyramiding = document.querySelector("#third_section_pyramiding").checked ? "True" : "False";
        console.log(firstPyramiding)

        let totalAmount = "10000";
        // let totalAmount = (firstAmount + secondAmount + thirdAmount).toString();
        // let totalEntry = (firstEntry + secondEntry + thirdEntry).toString();
        // let totalGain = (firstGain + secondGain + thirdGain).toString();
        // let pyramiding = document.querySelector("input[name='pyramiding']").checked ? "True" : "False";

        // 운용자금 < 구간별 총 설정자금 일 경우 리턴
        if((totalAmount *= 1) < (firstAmount + secondAmount + thirdAmount)) {
            alert("운용자금이 부족합니다.");
            return false;
        }

        // 반복할 회수
        let count = this.state.count;
        // if(firstAmount > 0) {
        //     count++;
        // }
        // if(secondAmount > 0) {
        //     count++;
        // }
        // if(thirdAmount > 0) {
        //     count++;
        // }
        try {
            
            for(let i = 0; i < count; i++) {
                
                if(i == 0) {

                    trackPromise(
                        axios({
                            method: 'post',
                            url: url,
                            headers: {
                                'Accept': "application/json",
                                'Content-Type': "applycation/json",
                                'Access-Control-Allow-Origin': "*"
                            },
                            params: {
                                TimePeriod: "2012-01-01-2013-05-25",
                                UpPyramiding: firstPyramiding,
                                StartingAmount: firstAmount,
                                PercentRange: firstRange,
                                EntryNum: firstEntry,
                                PercentReturn: firstGain
                            },
                        }).then((response) => {
                            // 그래프 밑 5개항목 부분에 채우는거.
                            
                            // PV ~ AnnReturns 까지 왼쪽부터 값 채움
                            console.log(response);
                            const div = document.createElement("div");
                            div.className = "result_container";
                            div.innerHTML = `
                                <div class="result_header">
                                    1 구간
                                </div>
                                <div class="result_content">
                                    <div>
                                        <div><p>총 누적 수익률</p></div>
                                        <div><p>173.19%</p></div>
                                    </div>
                                    <div>
                                        <div><p>연 환산 수익률</p></div>
                                        <div><p>69.23%</p></div>
                                    </div>
                                    <div>
                                        <div><p>MDD</p></div>
                                        <div><p>4.30%</p></div>
                                    </div>
                                    <div>
                                        <div><p>기간 총 거래횟수</p></div>
                                        <div><p>388회</p></div>
                                    </div>
                                    <div>
                                        <div><p>월 평균 거래 횟수</p></div>
                                        <div><p>13회</p></div>
                                    </div>
                                </div>`
                            document.querySelector(".result_container_wrapper").appendChild(div);
                        }).catch((error) => {
                            console.log(error);
                        })
                    );

                } else if(i == 1) {

                    trackPromise(
                        axios({
                            method: 'post',
                            url: url,
                            headers: {
                                'Accept': "application/json",
                                'Content-Type': "applycation/json",
                                'Access-Control-Allow-Origin': "*"
                            },
                            params: {
                                TimePeriod: "2012-01-01-2013-05-25",
                                UpPyramiding: secondPyramiding,
                                StartingAmount: secondAmount,
                                PercentRange: secondRange,
                                EntryNum: secondEntry,
                                PercentReturn: secondGain
                            },
                        }).then((response) => {
                            console.log(response);
                            const div = document.createElement("div");
                            div.className = "result_container";
                            div.innerHTML = `
                                <div class="result_header">
                                    2w 구간
                                </div>
                                <div class="result_content">
                                    <div>
                                        <div><p>총 누적 수익률</p></div>
                                        <div><p>173.19%</p></div>
                                    </div>
                                    <div>
                                        <div><p>연 환산 수익률</p></div>
                                        <div><p>69.23%</p></div>
                                    </div>
                                    <div>
                                        <div><p>MDD</p></div>
                                        <div><p>4.30%</p></div>
                                    </div>
                                    <div>
                                        <div><p>기간 총 거래횟수</p></div>
                                        <div><p>388회</p></div>
                                    </div>
                                    <div>
                                        <div><p>월 평균 거래 횟수</p></div>
                                        <div><p>13회</p></div>
                                    </div>
                                </div>`
                            document.querySelector(".result_container_wrapper").appendChild(div);
                        }).catch((error) => {
                            console.log(error);
                        })
                    );

                } else if(i == 2) {
                    
                    trackPromise(
                        axios({
                            method: 'post',
                            url: url,
                            headers: {
                                'Accept': "application/json",
                                'Content-Type': "applycation/json",
                                'Access-Control-Allow-Origin': "*"
                            },
                            params: {
                                TimePeriod: "2012-01-01-2013-05-25",
                                UpPyramiding: thirdPyramiding,
                                StartingAmount: thirdAmount,
                                PercentRange: thirdRange,
                                EntryNum: thirdEntry,
                                PercentReturn: thirdGain
                            },
                        }).then((response) => {
                            console.log(response);
                            const div = document.createElement("div");
                            div.className = "result_container";
                            div.innerHTML = `
                                <div class="result_header">
                                    3 구간
                                </div>
                                <div class="result_content">
                                    <div>
                                        <div><p>총 누적 수익률</p></div>
                                        <div><p>173.19%</p></div>
                                    </div>
                                    <div>
                                        <div><p>연 환산 수익률</p></div>
                                        <div><p>69.23%</p></div>
                                    </div>
                                    <div>
                                        <div><p>MDD</p></div>
                                        <div><p>4.30%</p></div>
                                    </div>
                                    <div>
                                        <div><p>기간 총 거래횟수</p></div>
                                        <div><p>388회</p></div>
                                    </div>
                                    <div>
                                        <div><p>월 평균 거래 횟수</p></div>
                                        <div><p>13회</p></div>
                                    </div>
                                </div>`
                            document.querySelector(".result_container_wrapper").appendChild(div);
                        }).catch((error) => {
                            console.log(error);
                        })
                    );

                }

                
            }
        } catch(error) {
            console.log(error);
        }

        
    }

    testIndicator() {
        document.querySelector(".result_container_wrapper").innerHTML = "";
        this.state.loading = true;

        if(this.state.loading) {
            document.querySelector(".contentWrap").firstChild.style.display = "block";
            setTimeout(this.showResult, 60000);
        };
    }

    showResult() {
        for(let i = 0; i < this.state.count; i++) {
            const div = document.createElement("div");
                div.className = "result_container";
                div.innerHTML = `
                    <div class="result_header">
                        ` + (i + 1) + ` 구간
                    </div>
                    <div class="result_content">
                        <div>
                            <div><p>총 누적 수익률</p></div>
                            <div><p>173.19%</p></div>
                        </div>
                        <div>
                            <div><p>연 환산 수익률</p></div>
                            <div><p>69.23%</p></div>
                        </div>
                        <div>
                            <div><p>MDD</p></div>
                            <div><p>4.30%</p></div>
                        </div>
                        <div>
                            <div><p>기간 총 거래횟수</p></div>
                            <div><p>388회</p></div>
                        </div>
                        <div>
                            <div><p>월 평균 거래 횟수</p></div>
                            <div><p>13회</p></div>
                        </div>
                    </div>`
                document.querySelector(".result_container_wrapper").appendChild(div);
        }

        this.state.loading = false;

        document.querySelector(".contentWrap").firstChild.style.display = "none";

    }

        render() {
            return (
                <>
                    <Title header="Auto 로봇" subTitle="전략 테스트" />
                    <Loader type="spin" color="black" message={""} />;
                    <div className="content">
                    <div className="main_content">
                        <div id="test_term_container" className="content_container s_button">
                            <div className="content_title" id="test_term">
                                <div>테스트 기간 설정</div>
                            </div>
                            <ul id="test_subtitle_button" className="content_subtitle">
                                <li><a>운용자금 10000$ </a></li>
                                <li className="vertical_line">|</li>
                                <li><a>수수료 설정 <input type="number" placeholder="0.4" id="fee" />%</a></li>
                            </ul>
                            <button id="test_button" onClick={this.testIndicator}>테스트<br />시작</button>
                        </div>
                        <div id="test_section1" className="line_1 test_section_container">
                            <div className="test_section">
                                <p>1구간</p>
                            </div>
                            <div className="test_input_section">
                                <div className="test_input_section_items1">
                                    <input type="number" placeholder="0" id="first_section_range" /> %
                                </div>
                                <div className="test_input_section_items1">
                                    <input type="number" placeholder="0" id="first_section_amount" /> $
                                </div>
                                <div className="test_input_section_items2">
                                    진입&nbsp; <input type="number" placeholder="0" id="first_section_entry" /> 회 
                                </div>
                                <div className="test_input_section_items2">
                                    이익&nbsp; <input type="number" placeholder="0" id="first_section_gain" /> %
                                </div>
                                <div className="test_input_section_items3">
                                    피라미딩 세팅 <input type="checkbox" id="first_section_pyramiding" />
                                </div>
                            </div>
                        </div>
                        <div id="test_section2" className="line_1 test_section_container" style={{"display": "none"}}>
                            <div className="test_section">
                                <p>2구간</p>
                            </div>
                            <div className="test_input_section">
                                <div className="test_input_section_items1">
                                    <input type="number" placeholder="0" id="second_section_range" /> %
                                </div>
                                <div className="test_input_section_items1">
                                    <input type="number" placeholder="0" id="second_section_amount" /> $
                                </div>
                                <div className="test_input_section_items2">
                                    진입&nbsp; <input type="number" placeholder="0" id="second_section_entry" /> 회 
                                </div>
                                <div className="test_input_section_items2">
                                    이익&nbsp; <input type="number" placeholder="0" id="second_section_gain" /> %
                                </div>
                                <div className="test_input_section_items3">
                                    피라미딩 세팅 <input type="checkbox" id="second_section_pyramiding" />
                                </div>
                            </div>
                        </div>
                        <div id="test_section3" className="line_1 test_section_container" style={{"display": "none"}}>
                            <div className="test_section">
                                <p>3구간</p>
                            </div>
                            <div className="test_input_section">
                                <div className="test_input_section_items1">
                                    <input type="number" placeholder="0" id="third_section_range" /> %
                                </div>
                                <div className="test_input_section_items1">
                                    <input type="number" placeholder="0" id="third_section_amount" /> $
                                </div>
                                <div className="test_input_section_items2">
                                    진입&nbsp; <input type="number" placeholder="0" id="third_section_entry" /> 회 
                                </div>
                                <div className="test_input_section_items2">
                                    이익&nbsp; <input type="number" placeholder="0" id="third_section_gain" /> %
                                </div>
                                <div className="test_input_section_items3">
                                    피라미딩 세팅 <input type="checkbox" id="third_section_pyramiding" />
                                </div>
                            </div>
                        </div>

                        <div className="l_button">
                            <button onClick={this.countIncrease}>구간 추가</button>
                        </div>
                        <div id="trading_widget_container" className="img_div">
                            {/* <div className="tradingview-widget-container" ref={this._ref}>
                            <div id="tradingview_bbab8"></div> */}
                            {/* <div class="tradingview-widget-copyright">TradingView 제공 <a href="https://kr.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span class="blue-text">BTCUSD 차트</span></a></div> */}
                            {/* </div>
                            <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script> */}
                            {/* <img src="/img/graph.png"/> */}
                            <TradingViewWidget symbol="BITSTAMP:BTCUSD" />
                        </div>
                        <div className="result_container_wrapper">
                            {/* <div className="result_container">
                                <div className="result_header">
                                    1 구간
                                </div>
                                <div className="result_content">
                                    <div>
                                        <div><p>총 누적 수익률</p></div>
                                        <div><p>173.19%</p></div>
                                    </div>
                                    <div>
                                        <div><p>연 환산 수익률</p></div>
                                        <div><p>69.23%</p></div>
                                    </div>
                                    <div>
                                        <div><p>MDD</p></div>
                                        <div><p>4.30%</p></div>
                                    </div>
                                    <div>
                                        <div><p>기간 총 거래횟수</p></div>
                                        <div><p>388회</p></div>
                                    </div>
                                    <div>
                                        <div><p>월 평균 거래 횟수</p></div>
                                        <div><p>13회</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="result_container">
                                <div className="result_header">
                                    2 구간
                                </div>
                                <div className="result_content">
                                    <div>
                                        <div><p>총 누적 수익률</p></div>
                                        <div><p>173.19%</p></div>
                                    </div>
                                    <div>
                                        <div><p>연 환산 수익률</p></div>
                                        <div><p>69.23%</p></div>
                                    </div>
                                    <div>
                                        <div><p>MDD</p></div>
                                        <div><p>4.30%</p></div>
                                    </div>
                                    <div>
                                        <div><p>기간 총 거래횟수</p></div>
                                        <div><p>388회</p></div>
                                    </div>
                                    <div>
                                        <div><p>월 평균 거래 횟수</p></div>
                                        <div><p>13회</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="result_container">
                                <div className="result_header">
                                    3 구간
                                </div>
                                <div className="result_content">
                                    <div>
                                        <div><p>총 누적 수익률</p></div>
                                        <div><p>173.19%</p></div>
                                    </div>
                                    <div>
                                        <div><p>연 환산 수익률</p></div>
                                        <div><p>69.23%</p></div>
                                    </div>
                                    <div>
                                        <div><p>MDD</p></div>
                                        <div><p>4.30%</p></div>
                                    </div>
                                    <div>
                                        <div><p>기간 총 거래횟수</p></div>
                                        <div><p>388회</p></div>
                                    </div>
                                    <div>
                                        <div><p>월 평균 거래 횟수</p></div>
                                        <div><p>13회</p></div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="content_title" id="result_container">
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
                        </div> */}
                    </div>
                </div>
            </>
        )
    }
}

export default SettingTest;