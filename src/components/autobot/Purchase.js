import React, { Component } from "react";
import Title from "../common/Title";
import "../../css/purchase.css";

class Purchase extends Component {
  render() {
    return (
      <>
        <Title header="메뉴 결제 프로세스" />
        <div className="purchase_wrapper">
          <div className="purchase_process">
            <div className="process_step">
              <img src="/img/dot5.png" />
            </div>
          </div>

          <div className="purchase_menu">
            <div className="line_1">
              <div className="button_container process_button_container">
                <div className="purchase_subtitle">
                  <span>안내사항</span>
                </div>
                <div className="purchase_content">
                  <ul>
                    <li>
                      나의 자산을 가동시킬 양 만큼의 로봇을 구매하시기 바랍니다.
                    </li>
                    <li>
                      나의 자산이 50,000$인데 30,000$ 로봇(80$)을 결재하면
                      30,000$까지만 로봇이 가동됩니다.
                    </li>
                    <li>
                      나의 자산이 100,000$인데 30,000$로봇(80$)*4개를 결재하면
                      30,000$ * 4개의 로봇 가동됩니다.
                    </li>
                    <li>로봇 한개 당 1개의 통화만 사용이 가능합니다..</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="table_container">
                <table className="m_text">
                  <thead>
                    <tr>
                      {/* <th>선택</th> */}
            {/* <th>로봇설정요금(월)</th>
                      <th>1로봇</th>
                      <th>2로봇</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr> */}
            {/* <td><input type="checkbox" value="5000"/></td> */}
            {/* <td>5000$ 이하</td>
                      <td>30$</td>
                      <td>54$</td>
                    </tr>
                    <tr> */}
            {/* <td><input type="checkbox" value="10000"/></td> */}
            {/* <td>10000$ 이하</td>
                      <td>50$</td>
                      <td>90$</td>
                    </tr>
                    <tr> */}
            {/* <td><input type="checkbox" value="30000"/></td> */}
            {/* <td>30000$ 이하</td>
                      <td>80$</td>
                      <td>144$</td>
                    </tr>
                    <tr> */}
            {/* <td><input type="checkbox" value="30000"/></td> */}
            {/* <td>30000$ 이하</td>
                      <td>100$</td>
                      <td>180$</td>
                    </tr>
                  </tbody>
                </table> */}
            {/* </div> */}
            {/* </div> */}
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
    );
  }
}

export default Purchase;
