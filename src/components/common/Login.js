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

    closeModal = (e) => {
        console.log(e.target.id);
        if(e.target.id === 'modal_container' || e.target.id === 'modal_wrapper' || e.target.id === 'modal_close_button'
            || e.target.id === 'find_button' || e.target.id === 'enroll_button' ) {
            this.setState({ isModalOpen: false });
        }
        return;
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