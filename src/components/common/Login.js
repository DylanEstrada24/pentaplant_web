import React, {Component} from 'react';
import SignIn from './SignIn';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            sessionTokenExist: false
        };
    }

    componentDidMount(){
        var temp = localStorage.getItem("sessionToken");
        if (temp != null){
            this.setState({ sessionTokenExist: true});
        }

    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    logout = () => {
        localStorage.removeItem("sessionToken");
        window.location.reload();
    }

    closeModal = (e) => {
        // console.log(e.target.id);
        if(e.target.id === 'modal_container' || e.target.id === 'modal_wrapper' || e.target.id === 'modal_close_button'
            || e.target.id === 'find_button' || e.target.id === 'enroll_button' ) {
            this.setState({ isModalOpen: false });
        }
        return;
    };

    render() {
        return (
            <>
                {this.state.sessionTokenExist != true ?
                <div onClick={this.openModal}>로그인</div>
                : 
                <div onClick={this.logout}>로그아웃</div>
                }
                <SignIn isOpen={this.state.isModalOpen} close={this.closeModal} />
            </>
        );
    }
}

export default Login;