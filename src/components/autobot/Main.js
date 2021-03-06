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
        <Title header="Auto ??????" />
        <section className="move">
          <div className="content">
            <div className="main_content">
              <div className="line_1" id="line_1">
                <div className="content_title">
                  <div>???????????? Set</div>
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
                      ????????????
                      <br />
                      ????????????
                    </button>
                  </Link>
                  <button className="main_button">
                    ?????????
                    <br />
                    ????????????
                  </button>
                </div>
              </div>
              <div className="horizon_line"></div>
              <div className="line_2">
                <ul id="option_buttons_1">
                  <li>
                    <a>????????? </a>
                  </li>
                  <li class="vertical_line">|</li>
                  <li>
                    <a>ALL?????? </a>
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
                  <div>????????????</div>
                </div>
                <div id="autobot_button_container2">
                  {/*
                  <Link to="autobot/test">
                    <button className="main_button" style={{ margin: "10px" }}>
                      ?????????
                    </button>
                  </Link>
                  */}
                  {/* <Link to="autobot/setting"><button className="main_button">????????????</button></Link> */}
                </div>
              </div>
              <div className="horizon_line"></div>
              <div className="line_2">
                <ul id="order_select">
                  <li>
                    <a>????????? </a>
                  </li>
                  <li class="vertical_line">|</li>
                  <li>
                    <a>????????? </a>
                  </li>
                  <li class="vertical_line">|</li>
                  <li>
                    <a>????????? </a>
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
                {/* <div class="tradingview-widget-copyright">TradingView ?????? <a href="https://kr.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP" rel="noopener" target="_blank"><span class="blue-text">BTCUSD ??????</span></a></div> */}
                {/* </div>
								<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script> */}
                <TradingViewWidget symbol="BITSTAMP:BTCUSD" />
              </div>
              <div className="options_container">
                <div>
                  <div className="content_title">????????? ??????</div>
                  <div className="b_text">7.7%</div>
                </div>
                <div>
                  <div className="red_text content_title">????????? ?????????</div>
                  <div className="red_text b_text">17.7%</div>
                </div>
                <div className="input_container">
                  <div className="content_title">
                    <div>???????????? ????????????</div>
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
                    <button>??????</button>
                  </div>
                </div>
                <div className="input_container">
                  <div className="content_title">
                    <div>????????????????????????</div>
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
										<div className="box_1"><div className="red_text">??????</div></div>
										<div className="box_2">
											<div>?????????</div>
											<div >7???</div>
										</div>
										<div className="box_3">
											<div>?????????</div>
											<div>7BTC</div>
										</div>
									</div>
									<div className="box_blue" style={{width: "200%"}}>
										<div className="box_1"><div className="blue_text">??????</div></div>
										<div className="box_2">
											<div>?????????</div>
											<div>7???</div>
										</div>
										<div className="box_3">
											<div>?????????</div>
											<div>7BTC</div>
										</div>
									</div>
								</div>
							</div>
							<div className="input_container">
								<div className="content_title">
									<div>?????????</div>
								</div>
								<div className="in-line">
									<input type="text" name="name" value="" />
									<input type="button" name="name" value="-" />
									<input type="button" name="name" value="+" />
								</div>
							</div>
							<div className="input_container">
								<div className="content_title">
									<div>?????????</div>
								</div>
								<div className="in-line">
									<input type="text" name="name" value="" />
									<input type="button" name="name" value="-" />
									<input type="button" name="name" value="+" />
								</div>
							</div>
							<div className="input_container">
								<div className="content_title">
									<div>?????????</div>
								</div>
								<div className="in-line">
									<input type="text" name="name" value="" />
									<input type="button" name="name" value="-" />
									<input type="button" name="name" value="+" />
								</div>
							</div> */}
              {/* <div className="l_button">
								<div>
									<button>?????????</button>
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
                <span>????????????</span>
              </div>
              <div className="purchase_content">
                <ul>
                  <li>
                    ????????? ?????? ???????????? ?????? MTOP??? ?????? ?????? ?????? ??? ??????
                    ???????????? ???????????????.
                  </li>
                  <li>
                    EX1) 20,000$??? ??? ?????? ????????? ??????????????? ??? ???, ?????? MTOP
                    20,000$??? ???????????? ????????? ??? ????????? 80$??? 15%
                    ????????????(10,000$ ?????? ???????????? ????????????) ??? 68$ ????????????.
                  </li>
                  <li>
                    EX2) 100,000$??? ??? ?????? ????????? ??????????????? ??? ???, ?????? MTOP
                    50,000$??? ???????????? ????????? ??? ????????? 100$??? 20%
                    ????????????(50,000$ ?????? ?????? ?????? ????????????) ??? 80$ ??????.
                  </li>
                  <li>???, ?????? ????????? ???????????? ??? ???????????? ???????????????.</li>
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
