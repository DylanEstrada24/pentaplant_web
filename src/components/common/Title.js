import {Link} from 'react-router-dom';

function Title () {
    return (
        <div className="head_title">
            <div><p>Auto 로봇</p></div>
            <div id="start_container">
                <Link to="/autobot"><button id="start_button" className="trade-btn2">지금 시작하기</button></Link>
            </div>
        </div>
    )
}

export default Title;