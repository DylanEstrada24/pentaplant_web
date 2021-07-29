import React, { Component } from 'react';
import Title from '../common/Title';
import ReCAPTCHA from 'react-google-recaptcha';

import '../../css/ask.css';

class Ask extends Component {

	constructor(props) {
		super(props);
		this.state = { items: [], text: '', isVerified: false};
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange() {
		this.setState({isVerified: true});
	}

	render() {
		return (
			<>
				<Title header="문의하기" />
				<div className="ask_wrapper">
					<div className="ask_container">
						{/* <div className="ask_title">
							<p>문의하기</p>
						</div> */}
						<form class="ask_form">
							<div className="ask_input_container">
								<div>
									<input type="text" placeholder="사용자 이름" />
								</div>
								<div>
									<input type="text" placeholder="연락처 번호" />
								</div>
								<div>
									<input type="email" placeholder="이메일 주소" />
								</div>
								<div>
									<select>
										<option>로봇결제</option>
										<option>구간설정</option>
										<option>기타</option>
									</select>
								</div>
								<div className="ask_textarea">
									{/* <input type="text" placeholder="메세지" /> */}
									<textarea></textarea>
								</div>
								<div className="recaptcha_container">
									<ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={this.handleOnChange} />
								</div>
							</div>
							<div className="ask_button s_button">
								<button disabled={!this.state.isVerified}>전송</button>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	}
}

export default Ask;