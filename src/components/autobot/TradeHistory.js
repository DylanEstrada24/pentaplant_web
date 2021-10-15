import React, { Component } from 'react';
import Title from '../common/Title';
import '../../css/tradeHistory.css';
import DatePickerComponent from './DatePickerComponent';

class TradeHistory extends Component {

    constructor(props) {
        super(props);
		this.state = ({
			// 샘플값
			data: [
				{
					no: 1,
					date: '2021-05-01',
					time: '14:00',
					coin: 'BTC',
					type: 'BTC',
					amount: '200',
					price: '400$',
					worth: 'N/A'
				},
				{
					no: 2,
					date: '2021-05-03',
					time: '14:00',
					coin: 'BTC',
					type: 'BTC',
					amount: '200',
					price: '400$',
					worth: 'N/A'
				}
			],
			category: 'all',
		})
    }
    componentDidMount() {
		fetch("http://15.164.232.119:5055/transactionhistory", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userid: 1
			}),
		}).then((res) => res.json())
		.then((res) => {
			var data = res.data;
			var category = "all";
			console.log("====== ");
			console.log(data);
			this.setState({
				category,
				data
			})
		});
	}

    changeCategory = (category) => {

		let num = 0
		let data = []

		switch(category) {
			case 'week':
				num = 1
				break
			case 'month':
				num = 2
				break
			case 'three_month':
				num = 3
				break
			case 'six_month':
				num = 4
				break
			default:
				num = 0
				break
		}

		console.log(document.querySelector('.fees_category').children[0].style)

		const categories = document.querySelector('.fees_category')

		for(let i = 0; i < categories.children.length; i++) {
			categories.children[i].style.borderBottom = ""
		}

		categories.children[num].style.borderBottom = "2px solid black"


		// 데이터 불러온 뒤 state 작업

		if(category === 'six_month' || category === 'all') {
			data = [
				{
					no: 1,
					date: '2021-05-01',
					time: '14:00',
					coin: 'BTC',
					type: 'BTC',
					amount: '200',
					price: '400$',
					worth: 'N/A'
				},
				{
					no: 2,
					date: '2021-05-03',
					time: '14:00',
					coin: 'BTC',
					type: 'BTC',
					amount: '200',
					price: '400$',
					worth: 'N/A'
				}
			]
		}

		// 데이터 불러온 뒤 state 작업 끝

		this.setState({
			category,
			data
		})

	}

	searchHandle = () => {
		const startDate = document.querySelectorAll(".example-custom-input")[0].value
		const endDate = document.querySelectorAll(".example-custom-input")[1].value

		console.log('startDate', startDate)
		console.log('endDate', endDate)
	}

    render() {
        return (
            <>
                <Title header="거래 내역" />
                <div className="fees_wrapper">
                    <div className="fees_container">
                        <div className="fees_category">
                            <a id="all" onClick={() => this.changeCategory('all')} style={{"borderBottom": "2px solid black"}}>전체</a>
                            <a id="week" onClick={() => this.changeCategory('week')}>1주일</a>
                            <a id="month" onClick={() => this.changeCategory('month')}>1개월</a>
                            <a id="three_month" onClick={() => this.changeCategory('three_month')}>3개월</a>
                            <a id="six_month" onClick={() => this.changeCategory('six_month')}>6개월</a>
                        </div>
						<div className="search_container">
							{/* <div className="datepicker_conatiner_wrapper"> */}
								<div id="datepicker_container">
									<DatePickerComponent />
								</div>
							{/* </div> */}
							<button onClick={() => this.searchHandle()} className="main_button">확인</button>
						</div>
                        <div className="trading_history_table">
                            {/* 거래 수수료 */}
                            <table className="trading_fees_table">
								<colgroup>
									<col width="3%"/>
									<col width="15%"/>
									<col width="3%"/>
									<col width="3%"/>
									<col width="3%"/>
									<col width="6%"/>
									<col width="6%"/>
									<col width="3%"/>
									<col width="12%"/>
									<col width="10%"/>
									<col width="12%"/>
									<col width="12%"/>
									<col width="12%"/>
								</colgroup>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>날짜</th>
                                        <th>시간</th>
                                        <th>코인</th>
                                        <th>타입</th>
                                        <th>수량</th>
                                        <th>단가</th>
                                        <th>가치</th>
                                        <th>청산 횟수</th>
                                        <th>총 익절 횟수</th>
                                        <th>원금 대비 손익</th>
                                        <th>진입 횟수</th>
                                        <th>총 거래량</th>
                                    </tr>
                                </thead>
								<tbody>
									{
										this.state.data.length !== 0 ? (
											this.state.data.map((value) => {
												return (
													<tr>
														<td>{value.no}</td>
														<td>{value.date}</td>
														<td>{value.time}</td>
														<td>{value.coin}</td>
														<td>{value.type}</td>
														<td>{value.amount}</td>
														<td>{value.price}</td>
														<td>{value.worth}</td>
														<td>{value.worth}</td>
														<td>{value.worth}</td>
														<td>{value.worth}</td>
														<td>{value.worth}</td>
														<td>{value.worth}</td>
													</tr>
												)
											})
										) : (
											<tr>
												<td style={{paddingTop: 100, paddingBottom: 100}} colSpan="8">거래내역이 없습니다.</td>
											</tr>
										)
									}
								</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TradeHistory;