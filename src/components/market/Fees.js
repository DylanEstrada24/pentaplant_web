import React, { Component } from 'react';
import Title from '../common/Title';
import '../../css/fees.css';

class Fees extends Component {
    render() {
        return (
            <>
                <Title header="교환 수수료" />
                <div className="fees_wrapper">
                    <div className="fees_container">
                        <div className="fees_category">
                            <a>거래 수수료</a>
                            <a>예금 및 인출 수수료</a>
                        </div>
                        <div className="fees_table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>계층 유형</th>
                                        <th>통화</th>
                                        <th>최소 한도</th>
                                        <th>일일 구매 한도</th>
                                        <th>일일 판매 한도</th>
                                        <th>일일 보내기 제한</th>
                                        <th>메이커/테이커</th>
                                        <th>메이커/테이커 # HCX 25% 할인</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>ADA</td>
                                        <td>0</td>
                                        <td>125000</td>
                                        <td>125000</td>
                                        <td>0</td>
                                        <td>0.1%/0.2%</td>
                                        <td>0.075%/0.15%</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>ADA</td>
                                        <td>0.001</td>
                                        <td>250000</td>
                                        <td>250000</td>
                                        <td>250000</td>
                                        <td>0.1%/0.2%</td>
                                        <td>0.075%/0.15%</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>ADA</td>
                                        <td>0.001</td>
                                        <td>625000</td>
                                        <td>625000</td>
                                        <td>625000</td>
                                        <td>0.1%/0.2%</td>
                                        <td>0.075%/0.15%</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>박쥐</td>
                                        <td>0</td>
                                        <td>40000</td>
                                        <td>40000</td>
                                        <td>0</td>
                                        <td>0.1%/0.2%</td>
                                        <td>0.075%/0.15%</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>박쥐</td>
                                        <td>1</td>
                                        <td>80000</td>
                                        <td>80000</td>
                                        <td>80000</td>
                                        <td>0.1%/0.2%</td>
                                        <td>0.075%/0.15%</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>박쥐</td>
                                        <td>1</td>
                                        <td>200000</td>
                                        <td>200000</td>
                                        <td>200001</td>
                                        <td>0.1%/0.2%</td>
                                        <td>0.075%/0.15%</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>BCH</td>
                                        <td>0</td>
                                        <td>40</td>
                                        <td>40</td>
                                        <td>0</td>
                                        <td>0.1%/0.2%</td>
                                        <td>0.075%/0.15%</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>BCH</td>
                                        <td>0.001</td>
                                        <td>85</td>
                                        <td>85</td>
                                        <td>85</td>
                                        <td>0.1%/0.2%</td>
                                        <td>0.075%/0.15%</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>BCH</td>
                                        <td>0.001</td>
                                        <td>200</td>
                                        <td>200</td>
                                        <td>200</td>
                                        <td>0.1%/0.2%</td>
                                        <td>0.075%/0.15%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Fees;