import React from 'react';
import { Link } from 'react-router-dom'
import './PageOrganizationDetailJSX.css';
import TopBarPlusView from '../../Widgets/TopBarPlus/TopBarPlusView';

const PageOrganizationDetailJSX = ({a})=>{
    return (
        <div>
            { <TopBarPlusView/> }
            <div className="box">
                <div className="container is-desktop">
                        <div><Link to='/PageMain'>首页</Link>&nbsp;&nbsp;>&nbsp;&nbsp;<Link to='/PageOrganizationDetail'>组织中心</Link></div>
                    <hr/>
                    <div>
                        <div className="columns">
                            <div class="column is-narrow">
                                <button>
                                    基本资料
                                </button>
                            </div>
                            <div class="column is-narrow">
                                <button>
                                    帖子
                                </button>
                            </div>
                            <div class="column is-narrow">
                                <button>
                                    活动记录
                                </button>
                            </div>
                            <div class="column is-narrow">
                                <button>
                                    关系
                                </button>
                            </div>
                        </div>
                    <div className="columns">
                        <div className="column is-one-third">
                            <div className="box center">
                                <div class="column">
                                    <figure class="image is-square">
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage"/>
                                    </figure>
                                    <hr/>
                                    <div class="is-narrow">
                                    {/* <Link to='/PageMain'>
                                        <button>
                                            更换logo
                                        </button>
                                        </Link> */}
                                        <a href="http://image.baidu.com/">
                                            <button value="按钮" >
                                            更换logo
                                            </button>
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-two-third">
                            <div className="box">
                                <div class="field">
                                    <div class="control has-icons-left">
                                        <input class="input" type="text" placeholder="公司名：" />
                                            <span class="icon is-small is-left">
                                                <i class="fa fa-user"></i>
                                            </span>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control has-icons-left">
                                        <input class="input" type="text" placeholder="电子邮箱：" />
                                            <span class="icon is-small is-left">
                                                <i class="fa fa-envelope"></i>
                                            </span>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control has-icons-left">
                                        <input class="input" type="text" placeholder="公司地址：" />
                                            <span class="icon is-small is-left">
                                                <i class="fa fa-home"></i>
                                            </span>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">公司简介：</label>
                                    <div class="control">
                                        <textarea class="textarea" placeholder="Textarea"></textarea>
                                    </div>
                                </div>
                                <Link to="/PageOrganizationDetail">
                                         <button  className="submit">
                                            {/* onClick={this.loginClick} */}
                                            提交
                                         </button>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
);
           
};


export default PageOrganizationDetailJSX;

