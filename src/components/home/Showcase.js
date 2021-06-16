function Showcase () {
    return (
        <section className="section4">
            <div className="section4-box">
                <div className="section4-title">
                    <div>
                        <h1>Trade. Anywhere.</h1>
                    </div>
                    <div>
                        <h2>
                            여러 디바이스와 호환되며 안전하고 편리하게 거래를 시작해 보세요.
                        </h2>
                    </div>
                </div>
                <div className="content-container">
                    <div className="showcase-image">
                        <img width="400" height="300" 
                            src="/img/homeAppImage.png" className="attachment-large size-large" alt="Autobot 앱 이미지" loading="lazy" srcSet="/img/homeAppImage.png 1024w, /img/homeAppImage.png 300w, /img/homeAppImage.png 768w, /img/homeAppImage.png 1208w"
                            sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                    <div className="showcase-content-area">
                        <div className="showcase-content">
                            <div>
                                <h2>Our Garage Service</h2>
                            </div>
                            <div>
                                <h2>Find Our Dealerships</h2>
                            </div>
                        </div>
                        <div className="download-area">
                            <div className="QR-image">
                                <img src="/img/homeAppQR.png" title="Autobot QR코드" alt="Autobot QR코드" />
                            </div>
                            <div className="QR-content">
                                <div>
                                    <h6>스캔하여 다운로드</h6>
                                </div>
                                <div>
                                    <h6>iOS & Android</h6>
                                </div>
                            </div>
                        </div>
                        <div className="icon-container">
                            <div>
                                <div className="icon-area">
                                    <a href="#">
                                        <i className="fas fa-star"></i>
                                    </a>
                                </div>
                                <div className="content-area">
                                    <h3>
                                        <a href="#">App Store</a>
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <div className="icon-area">
                                    <a href="#">
                                        <i className="fas fa-star"></i>
                                    </a>
                                </div>
                                <div className="content-area">
                                    <h3>
                                        <a href="#">Google Play</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="download-option">
                    <p>더 많은 다운로드 옵션 ></p>
                </div>
            </div>
        </section>
    )
}

export default Showcase;