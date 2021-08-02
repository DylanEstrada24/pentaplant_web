import React, {Component} from 'react';
import Info from './Info';

class MyInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }

    openInfo = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        return (
            <>
                <div onClick={this.openInfo}>내정보</div>
                <Info isOpen={this.state.isModalOpen} close={this.closeModal} />
            </>
        );
    }
}

export default MyInfo;