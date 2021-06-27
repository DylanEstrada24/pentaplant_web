import React from 'react';
import '../../css/home.css';

class Table extends React.Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
        script.async = true;
        script.text = `
        {
            "width": "100%",
            "height": "100%",
            "defaultColumn": "overview",
            "screener_type": "crypto_mkt",
            "displayCurrency": "USD",
            "colorTheme": "light",
            "locale": "kr",
            "isTransparent": false
        }`;
        
        document.querySelector("#trading_widget_container").appendChild(script);
    }
    
    render () {
        return (
            <section className="section3">
                {/* <div id="tableDiv">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="3">이름</th>
                                <th>마지막 체결가</th>
                                <th>전일대비</th>
                                <th>마켓</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><i></i></td>
                                <td>BTC</td>
                                <td>Bitcoin</td>
                                <td>$777.777</td>
                                <td>+7.7%</td>
                                <td>마켓</td>
                            </tr>
                            <tr>
                                <td><i></i></td>
                                <td>BTC</td>
                                <td>Bitcoin</td>
                                <td>$777.777</td>
                                <td>+7.7%</td>
                                <td>마켓</td>
                            </tr>
                            <tr>
                                <td><i></i></td>
                                <td>BTC</td>
                                <td>Bitcoin</td>
                                <td>$777.777</td>
                                <td>+7.7%</td>
                                <td>마켓</td>
                            </tr>
                            <tr>
                                <td><i></i></td>
                                <td>BTC</td>
                                <td>Bitcoin</td>
                                <td>$777.777</td>
                                <td>+7.7%</td>
                                <td>마켓</td>
                            </tr>
                            <tr>
                                <td><i></i></td>
                                <td>BTC</td>
                                <td>Bitcoin</td>
                                <td>$777.777</td>
                                <td>+7.7%</td>
                                <td>마켓</td>
                            </tr>
                            <tr>
                                <td><i></i></td>
                                <td>BTC</td>
                                <td>Bitcoin</td>
                                <td>$777.777</td>
                                <td>+7.7%</td>
                                <td>마켓</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
                <div id="trading_widget_container" className="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget"></div>
                    {/* <div className="tradingview-widget-copyright">
                        TradingView 제공 
                        <a href="https://kr.tradingview.com/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank">
                            <span className="blue-text">크립토커런시 마켓</span>
                        </a>
                    </div> */}
                </div>
            </section>
        );
    }
}

export default Table;