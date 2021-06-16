import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/main.css';


class Main extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0,0);
	}
	
	render() {
		return (
			<section className="move">
				<div className="content">
					<div className="main_content">
						<div className="line_1" id="line_1">
							<div className="content_title">
								<div>가동코인 Set</div>
							</div>
							<div className="s_text">
									<div>현재나의 $</div>
									<div>/</div>
									<div>BTC</div>
							</div>
							<div id="autobot_button_container1" className="button_container">
								<Link to="/autobot/pyramiding"><button className="main_button" style={{margin: "10px"}}>로봇결재, 사용방법</button></Link>
								<button className="main_button">거래소 바로가기</button>
							</div>
						</div>
						<div className="horizon_line"></div>
						<div className="line_2">
							<ul>
								<li><a>초기화 </a></li>
								<li>|</li>
								<li><a>ALL청산 </a></li>
								<li>|</li>
								<li><a>1 set </a></li>
								<li>|</li>
								<li><a>2 set </a></li>
								<li>|</li>
								<li><a>3 set</a></li>
							</ul>
						</div>
						<div>
							<div className="content_title">
								<div>주문설정</div>
							</div>
							<div id="autobot_button_container2">
								<Link to="autobot/test"><button className="main_button" style={{margin: "10px"}}>테스트</button></Link>
								<Link to="autobot/setting"><button className="main_button">고급설정</button></Link>
							</div>
						</div>
						<div className="horizon_line"></div>
						<div className="line_2">
							<ul>
								<li><a>공격적 </a></li>
								<li>|</li>
								<li><a>보통 </a></li>
								<li>|</li>
								<li><a>안정적 </a></li>
							</ul>
						</div>
						<div>
							<div className="content_title">
								<div>수익률 추정</div>
							</div>
							<div className="b_text">
								7.7%
							</div>
						</div>
						<div>
							<div className="red_text content_title">
								<div>이번달 수익률</div>
							</div>
							<div className="red_text b_text">
								7.7%
							</div>
						</div>
						<div className="input_container">
							<div className="content_title">
								<div>자동매매 실행금액</div>
							</div>
							<div className="in-line">
								<input type="text" name="name" value="" />
								<input type="button" name="name" value="-" />
								<input type="button" name="name" value="+" />
							</div>
						</div>
						<div className="s_button">
							<div id="autosale_margin_div" className="content_title">
								<div></div>
							</div>
							<div id="autosale_buttons" className="autosale_buttons">
								<button>10%</button>
								<button>25%</button>
								<button>50%</button>
								<button>75%</button>
								<button>최대</button>
							</div>
						</div>
						<div className="input_container">
							<div className="content_title">
								<div>매매자동종료가격</div>
							</div>
							<div className="in-line">
								<input type="text" name="name" value="" />
								<input type="button" name="name" value="-" />
								<input type="button" name="name" value="+" />
							</div>
						</div>
						<div className="line_9">
							<div>
								<div className="box_red" style={{width: "200%"}}>
									<div className="box_1"><div className="red_text">매수</div></div>
									<div className="box_2">
										<div>주문수</div>
										<div >7개</div>
									</div>
									<div className="box_3">
										<div>주문량</div>
										<div>7BTC</div>
									</div>
								</div>
								<div className="box_blue" style={{width: "200%"}}>
									<div className="box_1"><div className="blue_text">매도</div></div>
									<div className="box_2">
										<div>주문수</div>
										<div>7개</div>
									</div>
									<div className="box_3">
										<div>주문량</div>
										<div>7BTC</div>
									</div>
								</div>
							</div>
						</div>
						<div className="input_container">
							<div className="content_title">
								<div>최고가</div>
							</div>
							<div className="in-line">
								<input type="text" name="name" value="" />
								<input type="button" name="name" value="-" />
								<input type="button" name="name" value="+" />
							</div>
						</div>
						<div className="input_container">
							<div className="content_title">
								<div>최저가</div>
							</div>
							<div className="in-line">
								<input type="text" name="name" value="" />
								<input type="button" name="name" value="-" />
								<input type="button" name="name" value="+" />
							</div>
						</div>
						<div className="input_container">
							<div className="content_title">
								<div>주문수</div>
							</div>
							<div className="in-line">
								<input type="text" name="name" value="" />
								<input type="button" name="name" value="-" />
								<input type="button" name="name" value="+" />
							</div>
						</div>
						<div className="l_button">
							<div>
								<button>로그인</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Main;