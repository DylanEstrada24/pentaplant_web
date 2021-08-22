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
						<div className="about_content">
							<span>전세계 유명거래소들의 유동성을 <br /> 펜타플랜트 한곳에서 거래할 수 있는 <br /><span style={{fontWeight: "bold"}}>글로벌 연동형 거래소</span>입니다.</span> <br/>
						</div>
						<div className="about_image">
							<img src="/img/about/about-01.png" />
						</div>
						<div className="about_content">
							<span>
								<span style={{fontWeight: 'bold'}}>전세계 가장 큰 <br /> 
								글로벌 연동형 거래소</span> 이기 때문에 <br />
								고객이 <span style={{fontWeight: 'bold'}}>단 한명</span>일지라도 <br />
								<span style={{fontWeight: 'bold'}}>매도</span> 및 <span style={{fontWeight: 'bold'}}>매수</span>가 가능합니다.
							</span>
						</div>
					</div>
					<div id="about_section_2">
						<div className="about_image">
							<img src="/img/about/about-02.jpg" />
						</div>
						<div className="about_content2">
							<span>
								BPInvesting의 자체 기술로 개발한 <br /> 
								<span style={{fontWeight: 'bold'}}>US100 자동 트레이딩 로봇</span>은 <br />
								선물 시장에서 <br />
								<span style={{fontWeight: 'bold'}}>5년째 꾸준히 수익</span>을 <br /> 
								발생시키고 있습니다. 
							</span>

							<br/>

							<span>
								<span style={{fontWeight: 'bold'}}>Penta Plant</span>는 이를 기반으로 한 <br /> 
								기술력을 암호화폐 시장에 <br /> 
								그대로 녹여내어 <br /> 
								<span style={{fontWeight: 'bold'}}>빠른 대응속도</span> 및 <span style={{fontWeight: 'bold'}}>철저한 리스크 관리시스템</span> <br /> 
								으로 <br /> 
								지속적이고 안정적인 <br /> 
								<span style={{fontWeight: 'bold'}}>수익 창출</span>을 기대 할 수 있습니다. 
							</span>
							<br />
							<span>
								펜타플랜트는 차익거래수익뿐만 아니라 <br />
								나를 포함한 나의 하부에서 발생하는 <br /> 
								모든 거래자 그룹 내에서 <br /> 
								<span style={{fontWeight: 'bold'}}>업계 최고 수준</span>의 <span style={{fontWeight: 'bold'}}>거래 수수료</span>를 <br /> 
								<span style={{fontWeight: 'bold'}}>최대 40% 공유</span>합니다.
							</span> <br/>
						</div>
					</div>
					<div id="about_section_3">
						<div className="about_content">
							<span style={{fontWeight: 'bold', fontSize: 20}}>
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
								인터넷 <span style={{fontWeight: 'bold'}}>페이먼트 시스템 자격</span>을 보유함으로써 <br /> 
								전세계 어디서나 사용가능한 <br /> 
								<span style={{fontWeight: 'bold'}}>마스터카드 발급</span>이 가능합니다. 
							</span>
						</div>
					</div>
					<div id="about_section_5">
						{/* <div className="about_image">
							<img src="/img/about/about-05.png" />
						</div> */}
						<div className="about_content">
							<span className="market_about_bold">펜타플랜트 회원이라면</span> <br/>
							<div className="market_abount_horizontal_line" />
							<span>
								<span style={{fontWeight: 'bold'}}>엠탑코인</span>을 사용, <br /> 
								그 어떤 사이트보다도 <br /> 
								자사몰에서 <span style={{fontWeight: 'bold'}}>저렴하게 이용 가능</span>합니다.
							</span>
						</div>
					</div>
				</div>
			</>
		);
	}

}

export default About;