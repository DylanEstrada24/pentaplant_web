import React from 'react';
import {Link} from 'react-router-dom';

class Title extends React.Component {

    render() {

        const {header, subTitle} = this.props

        return (
            <div className="head_title">
                <div className="title_container">
                    <div><p>{header}</p></div>
                    { subTitle != null ? <div id="head_subtitle"><p>{subTitle}</p></div> : null }
                </div>
                {/* <div id="start_container">
                    <Link to="/autobot"><button id="start_button" className="trade-btn2">지금 시작하기</button></Link>
                </div>  */}
            </div>
        )
    }
}

Title.defaultProps = {
    header: 'Auto 로봇'
}

export default Title;