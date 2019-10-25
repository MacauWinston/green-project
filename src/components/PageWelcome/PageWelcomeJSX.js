import React from 'react';
import { Link } from 'react-router-dom'
import './PageWelcomeJSX.css';
import TopBarView from '../Widgets/TopBar/TopBarView';

const PageWelcomeJSX = ({a})=>{
    return (   
            <div>
                {<TopBarView />}
                <div className="box">
                    <div className="container is-desktop">
                        <div className="columns">
                            <div className="column">
                                <div className="box">
                                    <div className="column">
                                        <figure className="image is-square">
                                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571983719104&di=93385b82da16f86a70d259ddb1d345a7&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F01%2F78%2F82%2F59667e9d760c1_610.jpg" alt="MyImage"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-two-third">
                                <div className="box">
                                    <h1 className="login is-middle"><strong>用户登录</strong></h1>
                                    <hr/>
                                    <div className="field">
                                        <div className="control has-icons-left">
                                            <input className="input" type="text" placeholder="用户名" />
                                                <span className="icon is-small is-left">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control has-icons-left">
                                            <input className="input" type="password" placeholder="密码" />
                                                <span className="icon is-small is-left">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                                <hr/>
                                                <div className="login_select">
                                                    <Link to="/PageMain">
                                                        <button  className="login_button">
                                                        {/* onClick={this.loginClick} */}
                                                            登录
                                                        </button>
                                                    </Link>
                                                    <label className="checkbox is-right">
                                                        <input type="checkbox"/>
                                                            自动登录
                                                    </label>
                                                </div>
                                                <div>
                                                    <hr/>
                                                    <a className="forget" href="/">忘记密码</a>
                                                    <a className="register" href="/PageRegister">注册账号</a>
                                                </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    );
};

export default PageWelcomeJSX;