import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import styled from "styled-components";
import { MobileView } from "react-device-detect";
import { MenuOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Login from "./Login";

import Modal from "react-modal";
import "../../css/apiKey.css";

import translation from "../../translation";

// const MenuList = styled.div`
//     display: flex;
//     justify-content: space-between;
// `;

// const NavTop = styled.div`
//     display: flex;
//     justify-content: flex-end;
//     button {
//         background: white;
//         border: none;
//     }
// `;

//function Menubar() {
  class Menubar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        modalIsOpen: false,
        temp: "",
        apiresult: ""
      }

    }

    setModalIsOpen = (value) => {
      this.setState({modalIsOpen: value});
    }


    componentDidMount(){

      var temp2 = localStorage.getItem("sessionToken");
      if (temp2 != null){
        this.setState({temp: temp2})
      }

    }


  //const [modalIsOpen, setModalIsOpen] = useState(false);

  // const [toggleMenu, setToggleMenu] = useState(false)
  // const [toggleBar, setToggleBar] = useState(true)

  // const toggleChange = () => {
  //     setToggleMenu(!toggleMenu)
  //     setToggleBar(!toggleBar)
  // }

  // const onMenuClick = () => {
  //     setToggleMenu(!toggleMenu)
  //     setToggleBar(!toggleBar)
  // }

  //var temp = localStorage.getItem("sessionToken");

  APIKeyclicked = () => {

    var apikey = document.querySelector("#api_key_input").value;
    var secretkey = document.querySelector("#secret_key_input").value;

    fetch("http://15.164.232.119:5055/updateapikey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionToken: this.state.temp,
        apikey: apikey,
        secretkey : secretkey
      }),
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      this.setState({apiresult: res.result})
      if (res.result == "success"){
        setTimeout(this.continueExecution, 1000);
      }

    })


  }

  continueExecution = () => {
    this.setState({modalIsOpen: false})
  }


  render(){

    return (
      <>
        <nav className="navbar">
          <div className="nav_logo">
            {/*<i className="fas fa-bahai"></i>*/}
            <Link to="/">
              <img src="/img/logo.png" style={{ backgroundColor: "white" }} />
              &nbsp;Penta Plant
            </Link>
          </div>
          <ul className="nav_menu">
            <li>
              <Link to="#">{translation.exchange.eng}</Link>
              <ul className="dropdown_content">
                {/* <li><Link to="/market/about">ABOUT</Link></li> */}
                <li>????????????</li>
                <li>
                  <Link to="/market/fees">{translation.option.eng}</Link>
                </li>
                <li>
                  <Link to="/autobot/tradeHistory">
                    {translation.transactions.eng}
                  </Link>
                </li>
              </ul>
            </li>
            <li>|</li>
            <li>
              <Link to="#">MTOP</Link>
              <ul className="dropdown_content">
                <li>
                  <Link to="/mtop/whitePaper">MTOP??????</Link>
                </li>
                <li>
                  <Link to="/mtop/vision">MTOP??????</Link>
                </li>
              </ul>
            </li>
            <li>|</li>
            <li>
              <Link to="#">????????? ??????</Link>
              <ul className="dropdown_content">
                <li>
                  <Link to="/recommand/recommandGain">??????????????????????</Link>
                </li>
                <li>
                  <Link to="/recommand/level">????????? ??????</Link>
                </li>
                <li>????????? ????????????</li>
                <li>????????? ????????????(??????)</li>
              </ul>
            </li>
            <li>|</li>
            <li>
              {this.state.temp != "" ?
              <Link to="/autobot">AUTO ??????</Link>
              :null}
              {this.state.temp == ""?
              <Link to="/autobot/about">AUTO ??????</Link>
              :null}
              <ul className="dropdown_content">
                <li>
                  <Link to="/autobot/about">ABOUT</Link>
                </li>
                <li>
                  {this.state.temp != ""?
                  <Link to="/autobot/purchase">AUTO ??????</Link>
                  :null}
                  {this.state.temp == ""?
                  <Link to="/autobot/about">AUTO ??????</Link>
                  :null}
                </li>
                <li>
                  {this.state.temp != "" ?
                  <a onClick={() => this.setModalIsOpen(true)}>API KEY ??????</a>
                  :null}
                </li>
              </ul>
            </li>
            <li>|</li>
            <li>
              <Link to="#">????????????</Link>
              <ul className="dropdown_content">
                <li>??????????????????</li>
                <li>????????????</li>
                <li>OTC(??????)</li>
                <li>???????????????</li>
              </ul>
            </li>
            <li>|</li>
            <li>
              <Link to="#">??????</Link>
              <ul className="dropdown_content">
                <li>????????????</li>
                <li>US100 AUTO</li>
                <li>????????????</li>
              </ul>
            </li>
            <li>|</li>
            <li>
              <Link to="/ask">??????</Link>
            </li>
          </ul>
          {/* Mobile */}
          {/* <MobileView>
                      <NavTop>
                          <Button type="primary" onClick={toggleChange} style={{ marginBottom: 16}}>
                              { toggleBar ? <MenuOutlined /> : <MenuFoldOutlined /> }
                          </Button>
                      </NavTop>
                      { toggleMenu && 
                          <Menu 
                          defaultSelectedKeys={['1']}
                          mode="inline"
                          theme="light"
                          inlineCollapsed={toggleBar}
                          onClick={onMenuClick}
                          >
                              <Menu.Item key="market">
                                  ?????????
                              </Menu.Item>
                              <Menu.Item key="mtop">
                                  MTOP
                              </Menu.Item>
                              <Menu.Item key="recommand">
                                  ????????? ??????
                              </Menu.Item>
                              <Menu.Item key="autobot">
                                  <Link to="/autobot">
                                      AUTO ??????
                                  </Link>
                              </Menu.Item>
                              <Menu.Item key="special">
                                  ????????????
                              </Menu.Item>
                              <Menu.Item key="coalition">
                                  ??????
                              </Menu.Item>
                              <Menu.Item key="inquire">
                                  ??????
                              </Menu.Item>
                          </Menu>
                      }
                  </MobileView> */}
          <div className="login_button">
            <Login />
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => this.setModalIsOpen(false)}
          >
            <div className="api_modal_container">
              <div className="api_key_input_title">
                <a
                  className="api_key_close_icon"
                  onClick={() => this.setModalIsOpen(false)}
                >
                  X
                </a>
                <span className="api_key_title">
                  ????????? API Key??? ??????????????????.
                </span>
              </div>
              <div className="api_key_input_container">
                <span className="api_key_input_text">API Key</span>
                <input type="text" className="api_key_input" id="api_key_input"/>
              </div>
              <div className="api_key_input_container">
                <span className="api_key_input_text" >Secret Key</span>
                <input type="text" className="api_key_input" id="secret_key_input"/>
              </div>
              <div className="api_key_button_container">
                <button className="main_button" onClick={() => this.APIKeyclicked()} type="button">API ??????</button>
                <button
                  className="close_button"
                  onClick={() => this.setModalIsOpen(false)}
                >
                  ??????
                </button>
              </div>
              {this.state.apiresult == "wrong"?
              <div>
                API ??? ????????? ?????? ???????????????.
              </div>
              :null}
              {this.state.apiresult == "success"?
              <div>
                API ??? ?????? ??????.
              </div>
              :null}
              {this.state.apiresult == "already"?
              <div>
                API ?????? ?????? ?????? ??????????????????.
                </div>
                :null}
                {this.state.apiresult == "alreadybot"?
              <div>
                ?????? ?????? ?????? ????????????.
                </div>
                :null}
            </div>
          </Modal>
        </nav>
      </>
    );
  }
}

export default Menubar;
