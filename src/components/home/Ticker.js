import React from 'react';

class Ticker extends React.Component {

	componentDidMount() {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
		script.async = true;
		script.text = `
						{
							"symbols": [
								{
									"proName": "BITSTAMP:BTCUSD",
									"title": "BTC/USD"
								},
								{
									"proName": "BITSTAMP:ETHUSD",
									"title": "ETH/USD"
								},
								{
									"description": "XRP/USD",
									"proName": "BITSTAMP:XRPUSD"
								},
								{
									"description": "BCH/USD",
									"proName": "BITSTAMP:BCHUSD"
								},
								{
									"description": "ETC/USD",
									"proName": "BINANCE:ETCUSD"
								},
								{
									"description": "KMD/USD",
									"proName": "BINANCE:KMDUSD"
								},
								{
									"description": "LTC/USD",
									"proName": "BITSTAMP:LTCUSD"
								},
								{
									"description": "LSK/USD",
									"proName": "BINANCE:LSKUSD"
								},
								{
									"description": "XMR/USD",
									"proName": "KRAKEN:XMRUSD"
								},
								{
									"description": "OMG/USD",
									"proName": "KRAKEN:OMGUSD"
								}
							],
							"colorTheme": "light",
							"isTransparent": false,
							"showSymbolLogo": true,
							"largeChartUrl": "",
							"locale": "kr"
						}`;
		document.querySelector("#ticker_widget_container").appendChild(script);
	}

	render() {
		return (
			<section className="section1" style={{height: "auto"}}>
				<div class="ticker_container">
					<div id="ticker_widget_container" className="tradingview-widget-container">
					<div className="tradingview-widget-container__widget"></div>
					{/* <div className="tradingview-widget-copyright">TradingView 제공 <a href="https://kr.tradingview.com" rel="noopener" target="_blank"><span className="blue-text">쿼트</span></a></div> */}
					</div>
				</div>
			</section>
		);
	}
}

export default Ticker;