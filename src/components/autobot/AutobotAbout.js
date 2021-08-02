import React, { Component } from 'react';
import Title from '../common/Title';

import '../../css/autobotAbout.css';

class AutobotAbout extends Component {
	render() {
		return (
			<>
				<Title header="Autobot ABOUT" />
				<div className="autobot_about_wrapper">
					<div className="autobot_about_section1">
						<div>
							<img src="/img/autobot-about-01.png" />
						</div>
						<div>
						BPInvesting의 자체 기술로 개발한 US100 자동 트레이딩 로봇은 선물 시장에서 5년째 꾸준히 수익을 발생시키고 있습니다. <br />
						Penta Plant는 이를 기반으로 한 기술력을 암호화폐 시장에 그대로 녹여내어 빠른 대응속도 및 <br />
						철저한 리스크 관리시스템으로 지속적이고 안정적인 수익 창출을 기대할 수 있습니다. <br />
						다만, 해당 로봇은 많은 거래량발생 및 장기투자를 위해 개발되었기 때문에 <br />
						월 확정수익은 보장하지 않습니다.
						</div>
					</div>
					<div className="autobot_about_section2">
						PP(PentaPlant)는 자동로봇 시스템으로 수수료 수익+ 익절수익의 창출이 가능합니다. <br /><br />

						1. 우리는 비트코인, 이더리움에 장기 투자한다. <br /><br />
						2. 코인 장기투자라면 트레이딩을 하면서 장기 보유한다. <br /><br />
						3. 장기투자 중  시장이 하락하면 플로팅(미확정손실) 발생한다. <br /><br />
						4. 트레이딩 중 시장이 대폭 하락 시 분할매수로 손실이 줄어든다. <br /><br />
						5. 상승하면 상승 분 만큼의 익절(수익) 및 수수료 수익이 발생한다. <br /><br />
						6. 무엇보다 시장이 횡보 또는 하락 하더라도 거래 수수료 수익이 발생 할 수 있다. <br /><br />
					</div>
					<div className="autobot_about_section3">
						<img src="#" />
					</div>
				</div>
			</>
		);
	}
}

export default AutobotAbout;