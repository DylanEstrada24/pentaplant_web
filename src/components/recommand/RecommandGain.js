import React, { Component } from 'react';
import Title from '../common/Title';
import '../../css/recommandGain.css';

class RecommandGain extends Component {
	render() {
		return (
			<>
				<Title header="추천인수익이란?" />
				<div className="recommand_gain_wrapper">
					<img src="#" />
					<div className="recommand_gain_text">
						<span>PP(PentaPlant)는 추천인(레퍼럴코드)이 없으면 가입이 불가능합니다.</span> <br />
						<span>내가 온라인과 오프라인 등으로 추천한 추천인이 거래량(코인거래)을</span> <br />
						<span>발생시키게 되면, 나와 나의 하부에서 발생하는 모든 거래자그룹 내에서</span> <br />
						<span>최대 거래 수수료의 (40%)를 보너스로 공유받게 됩니다.</span> <br /><br />

						<span>이 보너스는 Level별로 다르게 적용됩니다.</span>
					</div>
					<div className="recommand_button_container">
						<div>
							<button className="main_button recommand_download">상세 추천인수당 설명 다운로드 PPT파일 - 영문</button>
						</div>
						<div>
							<button className="main_button recommand_download">상세 추천인수당 설명 다운로드 PPT파일 - 한글</button>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default RecommandGain;