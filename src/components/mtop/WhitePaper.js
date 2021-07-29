import React, { Component } from 'react';
import Title from '../common/Title';

import '../../css/whitePaper.css';

let arr = [];

for(let i = 1; i <= 24; i++) {
    arr.push("/img/whitePaper/" + i + ".jpg");
}

const imageList = arr.map((src) => 
    <img src={src} />
);

class WhitePaper extends Component {

    render() {
        return (
            <>
                <Title header="MTOP 백서" />
                <div className="white_paper_wrapper">
                    {imageList}
                </div>
            </>
        );
    }
}

export default WhitePaper;