import React, { Component } from "react";
import Title from "../common/Title";
import ReCAPTCHA from "react-google-recaptcha";

import "../../css/ask.css";
import InputSelect from "./InputSelect";

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", isVerified: false };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    this.setState({ isVerified: true });
  }

  render() {
    return (
      <>
        <Title header="문의하기" />
        <div className="ask_wrapper">
          <div className="ask_container">
            {/* <div className="ask_title">
							<p>문의하기</p>
						</div> */}
            <form class="ask_form">
              <div className="ask_input_container">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>Username</div>
                  <input style={{ marginLeft: "30px" }} type="text" />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>User ID</div>
                  <input type="text" />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>Email</div>
                  <input style={{ marginLeft: "24px" }} type="text" />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div>Robot Payment</div>
                  <InputSelect />
                </div>
                <div className="ask_textarea">
                  {/* <input type="text" placeholder="메세지" /> */}
                  <textarea></textarea>
                </div>
                <div className="recaptcha_container">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="ask_button s_button">
                  <button disabled={!this.state.isVerified}>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Ask;
