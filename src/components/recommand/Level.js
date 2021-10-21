import React, { Component } from "react";
import Title from "../common/Title";

import "../../css/level.css";

class Level extends Component {
  render() {
    return (
      <>
        <Title header="레벨업 방법" />
        <div className="level_wrapper">
          <div className="level_section1">
            <p>(1) 제도의 기준</p>
            <ul>
              <li>해당 레벨을 달성한 회원에게는 해당 커미션을 지급한다.</li>
              <li>
                하위 회원의 레벨이 본인의 레벨 혹은 그 의상의 레벨을 달성할{" "}
                <br /> 경우에도 해당 레벨의 커미션을 제공한다.
              </li>
              <li>
                직급 달성은 본인 보유자산 및 바이너리 방식의 하위그룹 육성에
                따른다.
              </li>
            </ul>
            <div>
              <div className="level_table_container_1">
                <div className="level_table">
                  <p>회원 레벨</p>
                  {/* <ul>
										<li>- 0레벨 (일반 회원 달성가능)</li>
										<li>- 1레벨 (일반 회원 달성가능)</li>
										<li>- 2레벨 (일반 회원 달성가능)</li>
										<li>- 3레벨 (일반 회원 달성가능)</li>
										<li>- 4레벨 (<span className="red_text">IB만 달성가능</span>)</li>
										<li>- 5레벨 (<span className="red_text">IB만 달성가능</span>)</li>
									</ul> */}
                  <table>
                    <thead>
                      <tr>
                        <th>
                          0<br />
                          레벨
                        </th>
                        <th>
                          1<br />
                          레벨
                        </th>
                        <th>
                          2<br />
                          레벨
                        </th>
                        <th>
                          3<br />
                          레벨
                        </th>
                        <th>
                          4<br />
                          레벨
                        </th>
                        <th>
                          5<br />
                          레벨
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>일반회원</td>
                        <td>일반회원</td>
                        <td>일반회원</td>
                        <td>일반회원</td>
                        <td>
                          <span className="red_text">특별회원만</span>
                        </td>
                        <td>
                          <span className="red_text">특별회원만</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="reward_table">
                  <p>
                    * 지급 기준 (<span className="red_text">40%</span>)
                  </p>
                  {/* <span className="red_text">1. 그룹 인센티브 : </span>40<span className="red_text">%</span> */}
                  {/* <ul>
										<li>- 0레벨 : 없음</li>
										<li>- 1레벨 : 없음</li>
										<li>- 2레벨 : 하위 회원의 실적 <span className="red_text">3% x 5회 (총 15%)</span></li>
										<li>- 3레벨 : 하위 회원의 실적 <span className="red_text">2% x 5회 (총 10%)</span></li>
										<li>- 4레벨 : 하위 회원의 실적 <span className="red_text">2% x 5회 (총 10%)</span></li>
										<li>- 5레벨 : 하위 회원의 실적 <span className="red_text">1% x 5회 (총 5%)</span></li>
									</ul> */}
                  <table>
                    <thead>
                      <tr>
                        <th>
                          0<br />
                          레벨
                        </th>
                        <th>
                          1<br />
                          레벨
                        </th>
                        <th>
                          2<br />
                          레벨
                        </th>
                        <th>
                          3<br />
                          레벨
                        </th>
                        <th>
                          4<br />
                          레벨
                        </th>
                        <th>
                          5<br />
                          레벨
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>없음</td>
                        <td>없음</td>
                        <td>
                          <span className="red_text">
                            하위 회원의 실적 3% x 5회
                          </span>
                        </td>
                        <td>
                          <span className="red_text">
                            하위 회원의 실적 2% x 5회
                          </span>
                        </td>
                        <td>
                          <span className="red_text">
                            하위 회원의 실적 2% x 5회
                          </span>
                        </td>
                        <td>
                          <span className="red_text">
                            하위 회원의 실적 1% x 5회
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <div className="reward_text">
                    <span className="red_text">
                      * 직접 혹은 간접적으로 파생된 회원들의 거래실적의 40%를
                      지급받는다.
                    </span>{" "}
                    <br />
                    <span className="red_text">
                      * (3x5) + (2x5) + (2x5) + (1x5) = 15 + 10 + 10 + 5 = 40%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="level_section2">
            <p>(2) 레벨 달성 조건</p>
            {/* <ul>
							<li>· 0레벨 조건 : 회원가입</li>
							<li>· 1레벨 조건 : 보유자산 <span className="red_text">5,000$ 이상</span></li>
							<li>· 2레벨 A조건 : 보유자산 <span className="red_text">15,000$ 이상, 본인의 하위그룹 작은쪽 라인의 회원 1레벨 2명 이상 달성</span></li>
							<li>· 2레벨 B조건 : 보유자산 <span className="red_text">50,000$ 이상</span></li>
							<li>· 3레벨 A조건 : 보유자산 <span className="red_text">30,000$ 이상, 본인의 하위그룹 작은쪽 라인의 회원 2레벨 2명 이상 달성</span></li>
							<li>· 3레벨 B조건 : 보유자산 <span className="red_text">150,000$ 이상</span></li>
							<li>· 4레벨 조건 : 보유자산 <span className="red_text">50,000$ 이상 and 본인의 하위그룹 작은쪽 라인의 회원 3레벨 2명 이상 달성</span></li>
							<li>· 5레벨 조건 : 보유자산 <span className="red_text">100,000$ 이상 and 본인의 하위그룹 작은쪽 라인의 회원 4레벨 1명 이상 달성</span></li> <br/>
							<li>· 레벨업은 <span className="red_text">매월</span> 평가해서 상위레벨로 승급한다.</li>
							<li>· 레벨다운은 <span className="red_text">매월</span> 평가하여 레벨유지 또는 강등한다.</li>
						</ul> */}
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>0레벨</th>
                  <th>1레벨</th>
                  <th colSpan="3">2레벨</th>
                  <th colSpan="3">3레벨</th>
                  <th colSpan="3">4레벨</th>
                  <th colSpan="3">5레벨</th>
                </tr>
                <tr>
                  {/* <t조건h>조건선택 <br />레벨업가능</t조건h> */}
                  <th>TYPE</th>
                  <th></th>
                  <th></th>
                  <th>A</th>
                  <th>B</th>
                  <th>C</th>
                  <th>A</th>
                  <th>B</th>
                  <th>C</th>
                  <th>A</th>
                  <th>B</th>
                  <th>C</th>
                  <th>A</th>
                  <th>B</th>
                  <th>C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    개인보유
                    <br />
                    자산
                  </th>
                  <td>회원가입</td>
                  <td>5,000$ 이상</td>
                  <td>15,000$ 이상</td>
                  <td>50,000$ 이상</td>
                  <td>15,000$ 이상</td>
                  <td>30,000$ 이상</td>
                  <td>150,000$ 이상</td>
                  <td>30,000$ 이상</td>
                  <td>50,000$ 이상</td>
                  <td>X</td>
                  <td>50,000$ 이상</td>
                  <td>100,000$ 이상</td>
                  <td>X</td>
                  <td>100,000$ 이상</td>
                </tr>
                <tr>
                  <th>팀조건</th>
                  <td>X</td>
                  <td>X</td>
                  <td>작은라인쪽 회원 1레벨 2명 이상</td>
                  <td>X</td>
                  <td>
                    큰 그룹 제외 한 나머지그룹 총 디파짓 금액 20,000$ 이상
                  </td>
                  <td>작은라인쪽 회원 2레벨 2명 이상</td>
                  <td>X</td>
                  <td>
                    큰 그룹 제외 한 나머지그룹 총 디파짓 금액 100,000$ 이상
                  </td>
                  <td>작은라인쪽 회원 3레벨 2명 이상</td>
                  <td>X</td>
                  <td>
                    큰 그룹 제외 한 나머지그룹 총 디파짓 금액 500,000$ 이상
                  </td>
                  <td>작은라인쪽 회원 4레벨 1명 이상</td>
                  <td>X</td>
                  <td>
                    큰 그룹 제외 한 나머지그룹 총 디파짓 금액 1,000,000$ 이상
                  </td>
                </tr>
                <tr>
                  <th>그룹 인센티브 40%</th>
                  <td>X</td>
                  <td>X</td>
                  <td colSpan="3">
                    하위 회원의 실적 3% * 5회 <br />
                    (총 15%)
                  </td>
                  <td colSpan="3">
                    하위 회원의 실적 2% * 5회 <br />
                    (총 10%)
                  </td>
                  <td colSpan="3">
                    하위 회원의 실적 2% * 5회 <br />
                    (총 10%)
                  </td>
                  <td colSpan="3">
                    하위 회원의 실적 1% * 5회 <br />
                    (총 5%)
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              · 레벨업은 <span className="red_text">매월</span> 평가해서
              상위레벨로 승급한다. <br />· 레벨다운은{" "}
              <span className="red_text">매월</span> 평가하여 레벨유지 또는
              강등한다. <br />· 레벨 달성 조건의 TYPE A, B, C는 AND 형태가 아닌
              OR형태로 승급 가능합니다.
            </p>
          </div>
          {/* <div className="level_section3">
						<p>(2-2) 레벨 달성 조건</p>
						<ul>
							<li>· 0레벨 조건 : 회원가입</li>
							<li>· 1레벨 조건 : 보유자산 <span className="red_text">5,000$ 이상</span></li>
							<li>· 2레벨 C조건 : 보유자산 <span className="red_text">15,000$ 이상 and 가장 큰 그룹을 제외한 나머지 그룹들의 디파짓 총합산 금액 15,000$</span></li>
							<li>· 3레벨 C조건 : 보유자산 <span className="red_text">30,000$ 이상 and 가장 큰 그룹을 제외한 나머지 그룹들의 디파짓 총합산 금액 90,000$</span></li>
							<li>· 4레벨 C조건 : 보유자산 <span className="red_text">50,000$ 이상 and 가장 큰 그룹을 제외한 나머지 그룹들의 디파짓 총합산 금액 360,000$</span></li>
							<li>· 5레벨 C조건 : 보유자산 <span className="red_text">100,000$ 이상 and 가장 큰 그룹을 제외한 나머지 그룹들의 디파짓 총합산 금액 450,000$</span></li> <br/>
							<li>· 레벨업은 <span className="red_text">매월</span> 평가해서 상위레벨로 승급한다.</li>
							<li>· 레벨다운은 <span className="red_text">매월</span> 평가하여 레벨유지 또는 강등한다.</li>
							<li>· 3번 페이지와 4번 페이지의 레벨 승급 조건은 and 형태가 아닌 or 형태로 가능합니다.</li>
						</ul>
					</div> */}
        </div>
      </>
    );
  }
}

export default Level;
