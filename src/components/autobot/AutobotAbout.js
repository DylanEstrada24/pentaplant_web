import React, { Component } from "react";
import Title from "../common/Title";

import "../../css/autobotAbout.css";
import RecommandGain from "../recommand/RecommandGain";

class AutobotAbout extends Component {
  render() {
    return (
      <>
        <Title header="Autobot ABOUT" />
        <div className="autobot_about_wrapper">
          {/* <div className="autobot_about_section1">
            <div className="autobot_about_section1_div">
              <div>
                <img src="/img/autobot-about-01.png" />
              </div>
              <div>
                <p>
                  펜타 플랜트는 많은 거래량 발생 및 장기 투자를 위해<br/>
                  자동봇을 개발하였지 때문에, 월 확정수익은 보장하지 <br/>
                  않습니다. 
                </p>
              </div>
            </div>
          </div> */}
          <div className="autobot_about_section3">
            <img src="/img/pay_online_1.png" />
          </div>
          <div className="autobot_about_section2">
            <div className="autobot_about_section2_text_div_left">
              <p className="autobot_about_section2_text_left">
                자동로봇 시스템으로 <br />
                수수료 수익+ 익절수익 창출
              </p>
            </div>
            <div className="autobot_about_section2_text_div_2">
              <div className="autobot_about_section2_text_div_center">
                <p className="autobot_about_section2_text_center">
                  <span className="circle">&nbsp;1&nbsp;</span> <br />
                  <br />
                  <span className="circle">&nbsp;2&nbsp;</span> <br />
                  <br />
                  <span className="circle">&nbsp;3&nbsp;</span> <br />
                  <br />
                  <span className="circle">&nbsp;4&nbsp;</span> <br />
                  <br />
                  <span className="circle">&nbsp;5&nbsp;</span> <br />
                  <br />
                  <span className="circle">&nbsp;6&nbsp;</span> <br />
                  <br />
                </p>
              </div>
              <div className="autobot_about_section2_text_div_right">
                <p className="autobot_about_section2_text_right">
                  우리는 비트코인, 이더리움에{" "}
                  <span style={{ fontWeight: "bold" }}>장기 투자</span>한다.{" "}
                  <br />
                  <br />
                  코인 장기투자라면 트레이딩을 하면서{" "}
                  <span style={{ fontWeight: "bold" }}>
                    장기 보유
                  </span>한다. <br />
                  <br />
                  장기투자 중 시장이 하락하면{" "}
                  <span style={{ fontWeight: "bold" }}>
                    플로팅(미확정손실) 발생
                  </span>
                  한다. <br />
                  <br />
                  트레이딩 중 시장이 대폭 하락 시{" "}
                  <span style={{ fontWeight: "bold" }}>분할매수</span>로 손실이
                  줄어든다. <br />
                  <br />
                  상승하면 상승 분 만큼의{" "}
                  <span style={{ fontWeight: "bold" }}>
                    익절(수익) 및 수수료 수익
                  </span>
                  이 발생한다. <br />
                  <br />
                  무엇보다 시장이 횡보 또는 하락 하더라도{" "}
                  <span style={{ fontWeight: "bold" }}>거래 수수료 수익</span>이
                  발생 할 수 있다. <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="autobot_about_section2_text_div_right">
          <RecommandGain />
        </div>
      </>
    );
  }
}

export default AutobotAbout;
