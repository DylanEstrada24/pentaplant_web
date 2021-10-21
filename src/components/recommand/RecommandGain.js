import React, { Component } from "react";
import Title from "../common/Title";
import "../../css/recommandGain.css";

class RecommandGain extends Component {
  render() {
    return (
      <>
        {/* <Title header="추천인수익이란?" /> */}
        <div className="recommand_gain_wrapper">
          <div className="recommand_gain_subtitle_container">
            <div className="recommand_gain_subtitle">
              <span>거래 수수료의</span>
              <span>최대 40% 보너스</span>
            </div>
          </div>
          <img src="/img/business_deal.png" />
          <div className="recommand_gain_text">
            <p>
              PP(PentaPlant)는{" "}
              <span className="bold_text">추천인(레퍼럴코드)</span>이 없으면
              가입이 불가능합니다. <br />
              <br />
              내가 온라인과 오프라인 등으로 추천한 추천인이 <br />
              <span className="bold_text">거래량(코인거래)</span>을 발생시키게
              되면,
              <br />
              나와 나의 하부에서 발생하는 모든 거래자그룹 내에서 <br />
              <span className="bold_text">최대 거래 수수료의 (40%)</span>를
              보너스로 공유받게 됩니다. <br />
              <br />
              <span>이 보너스는 Level별로 다르게 적용됩니다.</span>
            </p>
          </div>
          <div className="recommand_button_container">
            {/* <div>
              <button className="main_button recommand_download">
                상세 추천인수당 설명(한글)
              </button>
            </div> */}
            <div>
              <button className="main_button recommand_download">
                상세 추천인수당 설명(영문)
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RecommandGain;
