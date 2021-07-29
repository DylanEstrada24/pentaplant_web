import React, { Component } from 'react';
import Title from '../common/Title';
import '../../css/vision.css';

class Vision extends Component {
    render() {
        return (
            <>
                <Title header="MTOP 비젼" />
                <div className="vision_wrapper">
                    <div>
                        <span>먼 미래의 비젼만 제시하는 수많은 코인들이 시장에 뿌려지고 있는 상황에</span>
                        <span>BPInvesting은 매월 실제 수익을 창출하고 있는 고도화된 로직을 바탕으로</span>
                        <span>ERC-20의 기술력을 기반으로 한 MTOP 토큰을 개발하였습니다.</span>
                    </div>

                    <div>
                        <span>MTOP은 펜타플랜트의 ERC-20의 기술력을 바탕으로</span>
                        <span>제휴사인 BPInvesting에서 제작된 토큰입니다.</span>
                    </div>

                    <div>
                        <span>이렇게 탄생한 MTOP은 펜타플랜트의 유틸리티적 성격을 최대한 활용하여</span>
                        <span>다양한 수익창출 방식을 통해 MTOP의 지속 가능한 매수세를 형성할 수 있게 하였습니다.</span>
                    </div>
                    
                    <div>
                        <span>결국, 암호화폐 시장에서 MTOP의 진가는 독보적일 수밖에 없습니다.</span>
                    </div>

                    <div>
                        <span>MTOP 가치상승 구성 4가지</span>
                        <ul>
                            <li>1. 코인 자동 트레이딩 로봇 사용료</li>
                            <li>2. 주식 추천프로그램 서비스 비용</li>
                            <li>3. 국제 신용카드 발급비용</li>
                            <li>4. 인터넷 시장인 Mall 이용의 할인혜택</li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default Vision;