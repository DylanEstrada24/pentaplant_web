import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/info.css";

class SignIn extends Component {

	render() {
		const { isOpen, close } = this.props;   //아까 버튼에서 props로 가져온것

		return (
		<>
			{isOpen ? (  
				<div className="info_wrapper">
					<div className="info_title">
						나의 정보
					</div>
					<div className="info_icon">
						<img src="/img/grade.png" name="사용자 소속감 직급" />
					</div>
					<div className="info_information">
						<p>
							홍길동/ *021457 <br />
							인증직급 : 스타다이아몬드 <br />
							소속센터 : 가산디지털BP <br />
						</p>
					</div>
					<div className="info_point">
						<p><span className="red_text">N포인트 현황</span></p>
						<p>없음</p>
					</div>
					<div className="info_link_container">
						<div><img src="#" name="내정보 하단 이미지" /></div>
						<div><img src="#" name="내정보 하단 이미지" /></div>
						<div><img src="#" name="내정보 하단 이미지" /></div>
						<div><img src="#" name="내정보 하단 이미지" /></div>
					</div>
				</div>
			) : null}
		</>
		);
	}
}

export default SignIn;