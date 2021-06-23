import React from 'react';
import '../../css/test.css';
import axios from 'axios';

class SettingTest extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    constructor(props) {
        super(props);
        this.testButton = this.testButton.bind(this);
        // this.checkNumber = this.checkNumber.bind(this);
    }

    // input text에 숫자만 입력받게
    // checkNumber(e) {
    //     console.log(this)
    //     if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
    //         console.log("gd")
    //         return true;
    //     }
    //     console.log("---")
    //     return false;
    // }
    
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

        let totalAmount = (document.querySelector("#total_amount").value).toString();
        // let totalAmount = (firstAmount + secondAmount + thirdAmount).toString();
        let totalEntry = (firstEntry + secondEntry + thirdEntry).toString();
        let totalGain = (firstGain + secondGain + thirdGain).toString();
        let pyramiding = document.querySelector("input[name='pyramiding']").checked ? "True" : "False";

        // 운용자금 < 구간별 총 설정자금 일 경우 리턴
        if((totalAmount *= 1) < (firstAmount + secondAmount + thirdAmount)) {
            alert("운용자금이 부족합니다.");
            return false;
        }

        // 반복할 회수
        let count = 0;
        if(firstAmount > 0) {
            count++;
        }
        if(secondAmount > 0) {
            count++;
        }
        if(thirdAmount > 0) {
            count++;
        }
        try {

            for(let i = 0; i < count; i++) {
                
                if(i == 0) {

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
                            UpPyramiding: pyramiding,
                            StartingAmount: firstAmount,
                            PercentRange: firstRange,
                            EntryNum: firstEntry,
                            PercentReturn: firstGain
                        },
                    }).then((response) => {
                        // 그래프 밑 5개항목 부분에 채우는거.
                        
                        // PV ~ AnnReturns 까지 왼쪽부터 값 채움
                        console.log(response);
                    }).catch((error) => {
                        console.log(error);
                    })

                } else if(i == 1) {

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
                            UpPyramiding: pyramiding,
                            StartingAmount: secondAmount,
                            PercentRange: secondRange,
                            EntryNum: secondEntry,
                            PercentReturn: secondGain
                        },
                    }).then((response) => {
                        console.log(response);
                    }).catch((error) => {
                        console.log(error);
                    })

                } else if(i == 2) {

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
                            UpPyramiding: pyramiding,
                            StartingAmount: thirdAmount,
                            PercentRange: thirdRange,
                            EntryNum: thirdEntry,
                            PercentReturn: thirdGain
                        },
                    }).then((response) => {
                        console.log(response);
                    }).catch((error) => {
                        console.log(error);
                    })

                }

                
            }
        } catch(error) {
            console.log(error);
        }
            
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
                            <li><a>운용자금 <input type="number" defaultValue="0" id="total_amount" name="total_amount" onKeyDown={this.checkNumber} />$ </a></li>
                            <li>|</li>
                            <li><a>수수료 설정 </a></li>
                        </ul>
                        <button className="main_button" onClick={this.testButton}>시작</button>
                    </div>
                    <div>
                        <button className="main_button">3개씩 매도</button>
                        <button className="main_button">합산설정 on/off</button>
                    </div>
                    <div className="line_1" style={{flexDirection: "column"}}>
                        <div className="t_button" style={{margin: 0}}>
                            <div><button>1구간<br/><input type="number" defaultValue="0" id="first_section_range" /> %</button></div>
                            <div><button>1구간<br/><input type="number" defaultValue="0" id="first_section_amount" /> $</button></div>
                            <div><button>1구간 진입횟수<br/><input type="number" defaultValue="0" id="first_section_entry" /> </button></div>
                            <div><button>1구간 이익<br/><input type="number" defaultValue="0" id="first_section_gain" /> %</button></div>
                        </div>
                        <div className="t_button" style={{margin: 0}}>
                            <div><button>2구간<br/><input type="number" defaultValue="0" id="second_section_range" /> %</button></div>
                            <div><button>2구간<br/><input type="number" defaultValue="0" id="second_section_amount" /> $</button></div>
                            <div><button>2구간 진입횟수<br/><input type="number" defaultValue="0" id="second_section_entry" /> </button></div>
                            <div><button>2구간 이익<br/><input type="number" defaultValue="0" id="second_section_gain" /> %</button></div>
                        </div>
                        <div className="t_button" style={{margin: 0}}>
                            <div><button>3구간<br/><input type="number" defaultValue="0" id="third_section_range" /> %</button></div>
                            <div><button>3구간<br/><input type="number" defaultValue="0" id="third_section_amount" /> $</button></div>
                            <div><button>3구간 진입횟수<br/><input type="number" defaultValue="0" id="third_section_entry" /> </button></div>
                            <div><button>3구간 이익<br/><input type="number" defaultValue="0" id="third_section_gain" /> %</button></div>
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