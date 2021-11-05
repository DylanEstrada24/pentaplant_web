import React from "react";
import { Link } from "react-router-dom";
import TradingViewWidget from "react-tradingview-widget";
import "../../css/main.css";
import "../../css/purchase.css";
import Title from "../common/Title";
import Autobot from "./Autobot";

import SettingTest from "./SettingTest";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
    this.state = {
      totalAmount: 0,
      btctotalAmount: 0
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    var temp = localStorage.getItem("sessionToken");
    /*
    if (temp != null){
      this.fetchtotalAmount(temp);
    }
    */


    // const script1 = document.createElement("script");

    // script1.type = "text/javascript";
    // script1.src = "https://s3.tradingview.com/tv.js";

    // document.querySelector("#trading_widget_container").appendChild(script1);

    // const script2 = document.createElement("script");
    // script2.type = "text/javascript";
    // script2.src = "https://s3.tradingview.com/tv.js";
    // script2.async = true;
    // script2.innerHTML = `
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

    // this._ref.current.appendChild(script2);
  }

  /*
  fetchtotalAmount = (token) => {
    fetch("http://15.164.232.119:5055/totalbalance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionToken: token,
      })
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      this.setState({totalAmount: res.USDT});
      this.setState({btctotalAmount: res.BTC})
    })
  }
  */

  render() {
    return (
      <>
        <Title header="Auto 로봇" />
        <section className="move">
          <div className="content">
            <div className="main_content">
              <div className="line_1" id="line_1">
                <div className="content_title">
                  <div>가동코인 Set</div>
                </div>
                <div id="wallet" className="s_text">
                  <div></div>
                  <div class="vertical_line">|</div>
                  <div></div>
                </div>
                <div
                  id="autobot_button_container1"
                  className="button_container"
                >
                  <Link to="/autobot/pyramiding">
                    <button className="main_button" style={{ margin: "10px" }}>
                      로봇결재
                      <br />
                      사용방법
                    </button>
                  </Link>
                  <button className="main_button">
                    거래소
                    <br />
                    바로가기
                  </button>
                </div>
              </div>
              <div className="horizon_line"></div>
              <div className="line_2">
                <ul id="option_buttons_1">
                  <li>
                    <a>초기화 </a>
                  </li>
                  <li class="vertical_line">|</li>
                  <li>
                    <a>ALL청산 </a>
                  </li>
                  <li class="vertical_line">|</li>
                  <li>
                    <a>1 set </a>
                  </li>
                  <li class="vertical_line">|</li>
                  <li>
                    <a>2 set </a>
                  </li>
                  <li class="vertical_line">|</li>
                  <li>
                    <a>3 set</a>
                  </li>
                </ul>
              </div>
              <div id="order_setting">
                <div className="content_title">
                  <div>주문설정</div>
                </div>
                <div id="autobot_button_container2">
                  {/*
                  <Link to="autobot/test">
                    <button className="main_button" style={{ margin: "10px" }}>
                      테스트
                    </button>
                  </Link>
                  */}
                  {/* <Link to="autobot/setting"><button className="main_button">고급설정</button></Link> */}
                </div>
              </div>
              <div className="horizon_line"></div>
              <div className="line_2">
                <ul id="order_select">
                  <li>
                    <a>공격형 </a>
                  </li>
                  <li class="vertical_line">|</li>
                  <li>
                    <a>기본형 </a>
                  </li>
                  <li class="vertical_line">|</li>
                  <li>
                    <a>안정형 </a>
                  </li>
                </ul>
              </div>
              <div
                id="trading_widget_container"
                className="img_div"
                ref={this._ref}
              >
                {/* <div className="tradingview-widget-container">
								<div id="tradingview_bbab8"></div> */}
                {/* <div class="tradingview-widget-copyright">TradingView 제공 <a href="https://kr.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span class="blue-text">BTCUSD 차트</span></a></div> */}
                {/* </div>
								<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script> */}
                <TradingViewWidget symbol="BITSTAMP:BTCUSD" />
              </div>
              <div className="options_container">
                <div>
                  <div className="content_title">수익률 추정</div>
                  <div className="b_text">7.7%</div>
                </div>
                <div>
                  <div className="red_text content_title">이번달 수익률</div>
                  <div className="red_text b_text">17.7%</div>
                </div>
                <div className="input_container">
                  <div className="content_title">
                    <div>자동매매 실행금액</div>
                  </div>
                  <div className="in-line">
                    <input type="text" name="name" value="" />
                    <input type="button" name="name" value="-" />
                    <input type="button" name="name" value="+" />
                  </div>
                </div>
                <div className="s_button">
                  <div id="autosale_margin_div" className="content_title">
                    <div></div>
                  </div>
                  <div id="autosale_buttons" className="autosale_buttons">
                    <button>10%</button>
                    <button>25%</button>
                    <button>50%</button>
                    <button>75%</button>
                    <button>최대</button>
                  </div>
                </div>
                <div className="input_container">
                  <div className="content_title">
                    <div>매매자동종료가격</div>
                  </div>
                  <div className="in-line">
                    <input type="text" name="name" value="" />
                    <input type="button" name="name" value="-" />
                    <input type="button" name="name" value="+" />
                  </div>
                </div>
              </div>
              {/* <div className="line_9">
								<div>
									<div className="box_red" style={{width: "200%"}}>
										<div className="box_1"><div className="red_text">매수</div></div>
										<div className="box_2">
											<div>주문수</div>
											<div >7개</div>
										</div>
										<div className="box_3">
											<div>주문량</div>
											<div>7BTC</div>
										</div>
									</div>
									<div className="box_blue" style={{width: "200%"}}>
										<div className="box_1"><div className="blue_text">매도</div></div>
										<div className="box_2">
											<div>주문수</div>
											<div>7개</div>
										</div>
										<div className="box_3">
											<div>주문량</div>
											<div>7BTC</div>
										</div>
									</div>
								</div>
							</div>
							<div className="input_container">
								<div className="content_title">
									<div>최고가</div>
								</div>
								<div className="in-line">
									<input type="text" name="name" value="" />
									<input type="button" name="name" value="-" />
									<input type="button" name="name" value="+" />
								</div>
							</div>
							<div className="input_container">
								<div className="content_title">
									<div>최저가</div>
								</div>
								<div className="in-line">
									<input type="text" name="name" value="" />
									<input type="button" name="name" value="-" />
									<input type="button" name="name" value="+" />
								</div>
							</div>
							<div className="input_container">
								<div className="content_title">
									<div>주문수</div>
								</div>
								<div className="in-line">
									<input type="text" name="name" value="" />
									<input type="button" name="name" value="-" />
									<input type="button" name="name" value="+" />
								</div>
							</div> */}
              {/* <div className="l_button">
								<div>
									<button>로그인</button>
								</div>
							</div> */}

              <div>
                <SettingTest />
              </div>
            </div>
          </div>
        </section>
        <div>
          <Autobot />
        </div>

        <div
          style={{ width: "1200px", margin: "auto auto" }}
          className="purchase_menu"
        >
          <div className="line_1">
            <div className="button_container process_button_container">
              <div className="purchase_subtitle">
                <span>안내사항</span>
              </div>
              <div className="purchase_content">
                <ul>
                  <li>
                    개인이 현재 보유하고 있는 MTOP의 양에 따라 결제 할 봇의
                    할인률이 적용됩니다.
                  </li>
                  <li>
                    EX1) 20,000$를 한 개의 봇으로 가동하고자 할 때, 현재 MTOP
                    20,000$를 보유하고 있다면 봇 사용료 80$에 15%
                    할인적용(10,000$ 이상 보유하고 있으므로) 된 68$ 결제된다.
                  </li>
                  <li>
                    EX2) 100,000$를 한 개의 봇으로 가동하고자 할 때, 현재 MTOP
                    50,000$를 보유하고 있다면 봇 사용료 100$에 20%
                    할인적용(50,000$ 이상 보유 하고 있으므로) 된 80$ 결제.
                  </li>
                  <li>단, 봇의 개수가 많아지면 봇 사용료는 증가합니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
