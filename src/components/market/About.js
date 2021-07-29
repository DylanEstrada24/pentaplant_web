import React, { Component } from 'react';
import Title from '../common/Title';
import '../../css/about.css';
class About extends Component {


	render() {
		return (
			<>
				<Title header="ABOUT" />
				<div className="about_wrapper">
					<div id="about_section_1">
						<div className="about_image">
							<img src="#" />
						</div>
						<div className="about_content">
							<span>전세계 유명거래소들의 유동성을 펜타플랜트 한곳에서 거래할 수 있는 글로벌 연동형 거래소입니다.</span> <br/>
							<span>전세계 가장 큰 글로벌 연동형 거래소이기 때문에 고객이 단 한명일지라도 매도 및 매수가 가능합니다.</span>
						</div>
					</div>
					<div id="about_section_2">
						<div className="about_image">
							<img src="#" />
						</div>
						<div className="about_content">
							<span>BPInvesting의 자체 기술로 개발한 US100 자동 트레이딩 로봇은 선물 시장에서 5년째 꾸준히 수익을 발생시키고 있습니다. </span> <br/>
							<span>Penta Plant는 이를 기반으로 한 기술력을 암호화폐 시장에 그대로 녹여내어 빠른 대응속도 및 철저한 리스크 관리시스템으로 지속적이고 안정적인 수익 창출을 기대 할 수 있습니다. </span>
						</div>
					</div>
					<div id="about_section_3">
						<div className="about_image">
							<img src="#" />
						</div>
						<div className="about_content">
							<span>펜타플랜트는 차익거래수익뿐만 아니라 나를 포함한 나의 하부에서 발생하는 모든 거래자 그룹 내에서 업계 최고 수준의  거래 수수료를 최대 40% 공유합니다.</span> <br/>
							<span>거래 수수료를 받아 갈수 있는 기회를 놓치지 마세요.</span>
						</div>
					</div>
					<div id="about_section_4">
						<div className="about_image">
							<img src="#" />
						</div>
						<div className="about_content">
							<span>인터넷 페이먼트 시스템 자격을 보유함으로써 전세계 어디서나 사용가능한 마스터카드발급이 가능합니다. </span>
						</div>
					</div>
					<div id="about_section_5">
						<div className="about_image">
							<img src="#" />
						</div>
						<div className="about_content">
							<span>펜타플랜트 회원이라면 엠탑코인을 사용, </span> <br/>
							<span>그 어떤 사이트보다도 자사몰에서 저렴하게 이용 가능합니다.</span>
						</div>
					</div>
				</div>
			</>
		);
	}

}

export default About;