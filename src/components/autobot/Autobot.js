import React from 'react';
import Title from '../common/Title';
import '../../css/autobot.css';

class Autobot extends React.Component {

    componentDidMount() {
		window.scrollTo(0,0);
	}

    
    render() {
        return (
            <>
                <Title header="Auto 로봇" subTitle="오토로봇 프로세스"/>
                <div className="content">
                    <div className="container">
                        <div className="line_1">
                            <div className="content_title">오토로봇</div>
                            <div className="button_container">
                                <div className="s_button tooltip">
                                    <button className="main_button help_tip">
                                        로봇결제<br />방법
                                    </button>
                                    <div className="tooltip-content">
                                        <p>
                                            나의 자산을 가동시킬 양 만큼의 로봇을 구매하시기 바랍니다.<br/>
                                            나의 자산이 50,000$인데 30,000$ 로봇(80$)을 결재하면 30,000$까지만 로봇 가동가능<br/>
                                            나의 자산이 100,000$인데 30,000$로봇(80$)*4개를 결재하면 30,000$ * 4개의 로봇을 가동가능<br/>
                                            로봇1당 1개의 통화만 사용이 가능함.
                                        </p>
                                    </div>
                                </div>
                                <div className="s_button">
                                    <button id="autosale_append">자동연장<br />결재</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <table className="m_text">
                                    <thead>
                                        <tr>
                                            <th>선택</th>
                                            <th>로봇설정요금(월)</th>
                                            <th>1로봇</th>
                                            <th>2로봇</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" value="5000"/></td>
                                            <td>5000$ 이하</td>
                                            <td>30$</td>
                                            <td>54$</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" value="10000"/></td>
                                            <td>10000$ 이하</td>
                                            <td>50$</td>
                                            <td>90$</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" value="30000"/></td>
                                            <td>30000$ 이하</td>
                                            <td>80$</td>
                                            <td>144$</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" value="30000"/></td>
                                            <td>30000$ 이하</td>
                                            <td>100$</td>
                                            <td>180$</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <div className="line_4">
                            <div className="pyramiding-checkbox"  id="pyramiding-div">피라미딩 세팅 <input type="checkbox" name="pyramiding" /></div>
                        </div> */}
                    </div>
                </div>
            </>
        )
    }
}

export default Autobot;