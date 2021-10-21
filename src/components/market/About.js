import React, { Component } from "react";
import Title from "../common/Title";
import "../../css/about.css";
class About extends Component {
  render() {
    return (
      <>
        <Title header="ABOUT" />
        <div className="about_wrapper">
          <div id="about_section_1">
            <div className="about_content_1">
              <div className="title">펜타 플렌트</div>
              <div className="sub_title">
                전세계 유명거래소들의 유동성을 펜타플랜트 한곳에서 거래할 수
                있는
                <span style={{ fontWeight: "bold" }}>글로벌 연동형 거래소</span>
                입니다.
              </div>{" "}
              <br />
            </div>

            <div className="about_content2">
              <div>
                전세계 가장 큰 글로벌 연동형 거래소이기 때문에 고객이 단
                한명일지라도 매도 및 매수가 가능합니다.
              </div>
              <div>
                BPInvesting의 자체 기술로 개발한 US100 자동 트레이딩 로봇은 선물
                시장에서 5년째 꾸준히 수익을 발생시키고 있습니다.
              </div>
              <div>
                Penta Plant는 이를 기반으로 한 기술력을 암호화폐 시장에 그대로
                녹여내어 빠른 대응속도 및 철저한 리스크 관리시스템으로
                지속적이고 안정적인 수익 창출을 기대 할 수 있습니다.
              </div>
              <div>
                펜타플랜트는 차익거래수익뿐만 아니라 나를 포함한 나의 하부에서
                발생하는 모든 거래자 그룹 내에서 업계 최고 수준의 거래 수수료를
                최대 40% 공유합니다.
              </div>
            </div>
          </div>
          <div id="about_section_3">
            <div className="about_content">
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                거래 수수료를 받아 갈수 있는 <br />
                기회를 놓치지 마세요.
              </span>
            </div>
            {/* <div className="about_image">
							<img src="/img/about/about-03.jpeg" />
						</div> */}
          </div>
          <div id="about_section_4">
            <div className="about_image2">
              <img src="/img/about/about-04.png" />
            </div>
            <div className="about_content">
              <span>
                인터넷{" "}
                <span style={{ fontWeight: "bold" }}>페이먼트 시스템 자격</span>
                을 보유함으로써 <br />
                전세계 어디서나 사용가능한 <br />
                <span style={{ fontWeight: "bold" }}>마스터카드 발급</span>이
                가능합니다.
              </span>
            </div>
          </div>

          <div id="about_section_5">
            {/* <div className="about_image">
							<img src="/img/about/about-05.png" />
						</div> */}
            <div className="about_content">
              <span className="market_about_bold">펜타플랜트 회원이라면</span>{" "}
              <br />
              <div className="market_abount_horizontal_line" />
              <span>
                <span style={{ fontWeight: "bold" }}>엠탑코인</span>을 사용,{" "}
                <br />
                그 어떤 사이트보다도 <br />
                자사몰에서{" "}
                <span style={{ fontWeight: "bold" }}>저렴하게 이용 가능</span>
                합니다.
              </span>
            </div>
          </div>

          <div id="about_section_6">
            <div className="title"> MTOP 토큰</div>
            <div className="explain">
              MTOP은 펜타플랜트의 ERC-20의 기술력을 바탕으로 <br />
              제휴사인 BPInvesting에서 제작된 토큰입니다.
            </div>
          </div>

          <div id="about_section_7">
            <div>매월 실제 수익을 창출</div>
            <div>고도화된 로직</div>
            <div>ERC-20의 기술력</div>
          </div>

          <div className="about_image2">
            <img src="/img/about/mtop_increase_money.png" />
          </div>

          <div id="about_section_8">
            <div>MTOP 가치상승 구성 4가지</div>
          </div>

          <div id="about_section_9">
            <div>
              코인 자동 트레이딩
              <br /> 로봇 사용료
            </div>
            <div>
              주식 추천프로그램
              <br /> 서비스 비용
            </div>
            <div>국제 신용카드 발급비용</div>
            <div className="none">
              인터넷 시장인
              <br />
              Mall 이용의 할인혜택
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
