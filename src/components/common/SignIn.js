import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/SignIn.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    loginresult: ""
  };

  componentDidMount(){
    console.log(" signin component came up ");
    
  }

  loginHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };   ////계산된 속성명 사용

  loginClickHandler = () => {
    const { email, password } = this.state;
    console.log(" ============== login clicked   ");
    console.log(" ===================  ");
    fetch("http://15.164.232.119:5055/login", {
    //fetch("http://127.0.0.1:5055/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.success != "wrong password" && res.success != "wrong login"){
          localStorage.setItem('sessionToken', res);
          window.location.reload();
        }
        if (res.success == "wrong password"){
          this.setState({loginresult: res.success})
        }
        if (res.success == "wrong login"){
          this.setState({ loginresult: res.success});
        }
      });
  }; 

  render() {
    const { isOpen, close } = this.props;   //아까 버튼에서 props로 가져온것

    return (
      <>
        {isOpen ? (  

         ////만약 isopen(this.state.isModalOpen)이 true일때 코드를 실행 false면  null
        /// <div onClick={close}> 로그인창 말고 회색 바탕을 누를시 모달이 꺼지게 만듬
	      ///<span className="close" onClick={close}>&times;</span> x버튼 누를시 꺼짐
        ////<div className="modalContents" onClick={isOpen}> 로그인 화면은 버튼 클릭해서 들어오면
         /// true인 상태로 있어서 화면이 안꺼진다.
    
          <div id="modal_container" className="modal" onClick={close}>
            <div id="modal_wrapper" onClick={close}>
              <div className="loginModal">
                <span id="modal_close_button" className="close" onClick={close}>
                  &times;
                </span>
                <form>
                  <div className="modalContents">
                    <input
                      name="email"
                      className="loginId"
                      type="text"
                      placeholder="아이디"
                      onChange={this.loginHandler}
                    />
                    <input
                      name="password"
                      className="loginPw"
                      type="password"
                      placeholder="비밀번호"
                      onChange={this.loginHandler}
                    />
                    <div className="loginMid">
                      <label className="autoLogin" htmlFor="hint">
                        {" "}
                        <input type="checkbox" id="hint" /> 로그인 유지하기
                      </label>
                      <div id="find_button" className="autoLogin">아이디/비밀번호 찾기</div>
                    </div>

                    {this.state.loginresult == "wrong login"?
                    <div>로그인 실패 하였습니다</div>
                    :null}

                    {this.state.loginresult == "wrong password" ?
                    <div>비밀번호가 틀렸습니다</div>
                    :null}


                    <button className="loginBtn" onClick={() => this.loginClickHandler()} type="button">
                        {" "}
                        로그인{" "}
                    </button>
                  {/* <div className="socialBox">
                    <div className="kakao">
                      <img
                        className="kakaoLogo"
                        src="/Images/SignIn/kakao.png"
                      />
                      <div className="kakaoText">카카오 계정으로 신규가입</div>
                    </div>
                    <div className="facebook">
                      <img
                        className="facebookLogo"
                        src="/Images/SignIn/facebook.png"
                      />
                      <div className="facebookText">
                        페이스북 계정으로 신규가입
                      </div>
                    </div>
                  </div> */}
                    <div className="loginEnd">
                      <div id="enroll_button" className="loginLine">
                        회원이 아니신가요? <Link to="/signup">회원가입</Link>
                      </div>
                      {/* <div className="noUser">비회원 주문 조회</div> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default SignIn;