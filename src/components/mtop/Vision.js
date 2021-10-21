import React, { Component } from "react";
import Title from "../common/Title";
import "../../css/vision.css";

class Vision extends Component {
  render() {
    return (
      <>
        <Title header="MTOP 비전" />
        <div className="vision_wrapper">
          <div className="mtop_vision_div_1">
            <span>MTOP 토큰</span>
          </div>

          <div className="mtop_vision_div_2">
            <span>MTOP은 펜타플랜트의 ERC-20의 기술력을 바탕으로</span>
            <span>제휴사인 BPInvesting에서 제작된 토큰입니다.</span>
          </div>

          <div className="mtop_vision_div_3">
            <ul>
              <li>매월 실제 수익을 창출</li>
              <li></li>
              <li>고도화된 로직</li>
              <li></li>
              <li>ERC-20의 기술력</li>
            </ul>
          </div>

          <div className="mtop_vision_div_4">
            <img src="/img/mtop-vision.jpg" />
          </div>

          <div className="mtop_vision_div_5">
            <span>이렇게 탄생한 MTOP은 펜타플랜트의</span>
            <span>유틸리티적 성격을 최대한 활용하여</span>
            <br />
            <span>다양한 수익창출 방식을 통해 MTOP의 지속 가능한</span>
            <span>매수세를 형성할 수 있게 하였습니다.</span>
            <br />
            <span>
              결국, 암호화폐 시장에서 MTOP의 진가는 독보적일 수밖에 없습니다.
            </span>
          </div>

          <div className="mtop_vision_div_6">
            <span>MTOP 가치상승 구성 4가지</span>
            <ul>
              <li>
                코인 자동 트레이딩
                <br />
                로봇 사용료
              </li>
              <li></li>
              <li>
                주식 추천프로그램
                <br />
                서비스 비용
              </li>
              <li></li>
              <li>국제 신용카드 발급비용</li>
              <li></li>
              <li>
                인터넷 시장인
                <br />
                Mall 이용의 할인혜택
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Vision;
