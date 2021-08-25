import React from 'react';
import ReactLoading from 'react-loading';

function Loader({type, color, message}) {
    return (
        <div class="contentWrap">
            <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                // display: "none",
                width: "10%",
                zIndex: 9999
            }}>
                <ReactLoading
                    type={type}
                    color={color}
                    height={'80%'}
                    width={'80%'} />
            </div>
        </div>
    );
}

export default Loader;