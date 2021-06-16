import {Link} from 'react-router-dom';

function Trade () {
    return (
        <section className="section6">
            <div className="trade-title">
                <h2>거래 시작하기</h2>
            </div>
            <div className="button-area">
                <div className="button-column">
                    <a href="#">
                        <button className="trade-btn1">무료 계정 만들기</button>
                    </a>
                </div>
                <div className="button-column">
                    <Link to="/autobot">
                        <button className="trade-btn2">거래 시작하기</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Trade;