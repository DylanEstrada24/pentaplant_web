import React, {Component} from 'react';
import SignIn from './SignIn';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        return (
            <>
                <div onClick={this.openModal}>로그인</div>
                <SignIn isOpen={this.state.isModalOpen} close={this.closeModal} />
            </>
        );
    }
}

export default Login;