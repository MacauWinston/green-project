import React from 'react';
import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link';
// import sortBy from 'sort-by';

// import { title } from '../../../utils/helpers';
// import NotificationJSX from '../Notification/NotificationJSX';
import './TopBarPlusJSX.css';

const NavBarJSX = (
    isNavBarOpen,
    toggleNavBarOpen,
) => {
    return (
        <nav className="navbar is-primary">
            <div className="navbar-brand">
                <img className="image is-64x64"src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571983496019&di=e325251710c60bfb5fb98db599866d62&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F05%2F87%2F16pic_587871_b.jpg" alt="MyImage"/>
                <Link className="navbar-item" to="/" title="select home">
                    <h1><strong>绿色社区平台</strong></h1>
                </Link>
                <div className="navbar-burger burger" onClick={toggleNavBarOpen}  title="select menu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`navbar-menu ${isNavBarOpen ? '' : 'is-active'}`}>
                <div className="navbar-start">
                    <div className="tabs is-centered">
                        <ul>
                            <li >
                                <Link to='/PageMain'>
                                    首页
                                </Link>
                            </li>
                            <li>
                                <Link to='/PageProjectDetail'>
                                    项目
                                </Link>
                            </li>
                            <li>
                                <Link to='/PageEventDetail'>
                                    新闻
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='navbar-end'>
                        <class className='navbar-end'>
                            <div id="navbarBasicExample" className="navbar-menu is-active">
                                <div className="navbar-end">
                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <div className="navbar-link">
                                            <i className="fa fa-user has-dropdown"></i>
                                                &nbsp;用户名
                                        </div>
                                            <div className="navbar-dropdown">
                                                    <a class="navbar-item" href='/PagePeopleDetail'>
                                                        &nbsp;
                                                        <i className="fa fa-address-card"></i>
                                                        &nbsp;&nbsp;个人中心
                                                    </a>
                                                    <a className="navbar-item" href='/PageOrganizationDetail'>
                                                        &nbsp;
                                                        <i className="fa fa-users"></i>
                                                        &nbsp;&nbsp;组织中心
                                                    </a>
                                                    <a className="navbar-item" href="/">
                                                        &nbsp;
                                                        <i className="fa fa-window-close"></i>
                                                        &nbsp;&nbsp;退出登陆
                                                    </a>
                                            </div>
                                        </div>
                                            <div className="navbar-item">
                                                <div className="buttons">
                                                    <a className="button is-hoverable is-primary" href="/PageEventDetail">
                                                    <i className="fa fa-comments fa fa-lg"></i>
                                                        <strong>&nbsp;消息</strong>
                                                    </a>
                                                </div>
                                            </div>  
                                </div>
                         </div>
                        </class>
                </div>
            </div>
        </nav>
    );
};

const TopBarPlusJSX = ({
    isNavBarOpen,       // state (boolean)
    toggleNavBarOpen,   // function ()
}) => {
    return (
        <div className="top-bar">
            { NavBarJSX(
                isNavBarOpen,
                toggleNavBarOpen,
            ) }
        </div>
    );
};

export default TopBarPlusJSX;