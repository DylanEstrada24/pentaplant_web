import React, { Component } from 'react';
import Title from '../common/Title';

import '../../css/purchase.css';

class Purchase extends Component {
    render() {
        return (
            <>
                <Title header="메뉴 결제 프로세스" />
                <div className="purchase_wrapper">
                    <div className="purchase_process">
                        <div className="process_step">
                            <div>
                                <img src="#" name="프로세스별 이미지" /> <br />
                                1. AUTO 결재
                            </div>
                            <div>
                                <img src="#" name="프로세스별 이미지" /> <br />
                                2. AUTO 결재하기 누름
                            </div>
                            <div>
                                <img src="#" name="프로세스별 이미지" /> <br />
                                3. 시장가로 MTOP을 바로구매
                            </div>
                            <div>
                                <img src="#" name="프로세스별 이미지" /> <br />
                                4. 해당 MTOP는 거래소(특별) 지갑으로 이동
                            </div>
                            <div>
                                <img src="#" name="프로세스별 이미지" /> <br />
                                5. 로봇을 MTOP 결재량 만큼 이용가능
                            </div>
                        </div>
                        <img src="#" name="결제 프로세스 이미지"/>
                    </div>

                    <div className="purchase_menu">
                        <div className="line_1">
                            <div className="button_container process_button_container">
                                <div>
                                    <p>
                                        나의 자산을 가동시킬 양 만큼의 로봇을 구매하시기 바랍니다.<br/><br/>
                                        나의 자산이 50,000$인데 30,000$ 로봇(80$)을 결재하면 30,000$까지만 로봇 가동가능<br/><br/>
                                        나의 자산이 100,000$인데 30,000$로봇(80$)*4개를 결재하면 30,000$ * 4개의 로봇을 가동가능<br/><br/>
                                        로봇1당 1개의 통화만 사용이 가능함.
                                    </p>
                                </div>
                                {/* <div className="s_button tooltip">
                                    <button className="main_button help_tip">
                                        로봇결제<br />방법
                                    </button>
                                </div>
                                <div className="process_text">
                                    <ul>
                                        <li>나의 보유 MTOP &nbsp;&nbsp;&nbsp;</li>
                                        <li>50,000$</li>
                                    </ul>
                                </div>
                                <div className="s_button">
                                    <button id="autosale_append">자동연장<br />결재</button>
                                </div> */}
                            </div>
                        </div>
                        <div>
                            <div className="table_container">
                                <table className="m_text">
                                    <thead>
                                        <tr>
                                            {/* <th>선택</th> */}
                                            <th>로봇설정요금(월)</th>
                                            <th>1로봇</th>
                                            <th>2로봇</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {/* <td><input type="checkbox" value="5000"/></td> */}
                                            <td>5000$ 이하</td>
                                            <td>30$</td>
                                            <td>54$</td>
                                        </tr>
                                        <tr>
                                            {/* <td><input type="checkbox" value="10000"/></td> */}
                                            <td>10000$ 이하</td>
                                            <td>50$</td>
                                            <td>90$</td>
                                        </tr>
                                        <tr>
                                            {/* <td><input type="checkbox" value="30000"/></td> */}
                                            <td>30000$ 이하</td>
                                            <td>80$</td>
                                            <td>144$</td>
                                        </tr>
                                        <tr>
                                            {/* <td><input type="checkbox" value="30000"/></td> */}
                                            <td>30000$ 이하</td>
                                            <td>100$</td>
                                            <td>180$</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <div className="purchase_menu">
                            <div className="button_container process_button_container">
                                <div>
                                    <p>로봇갯수 : <span>111</span></p>
                                </div>
                                <div>
                                    <p>최종 결재금액 : <span>123,456</span>$</p>
                                </div>
                                <div className="s_button">
                                    <button>결제하기</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </>
        )
    }
}

export default Purchase;