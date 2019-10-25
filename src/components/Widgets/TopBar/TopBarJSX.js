import React from 'react';
import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link';
// import sortBy from 'sort-by';

//import { title } from '../../../utils/helpers';
//import NotificationJSX from '../Notification/NotificationJSX';
import './TopBarJSX.css';

const NavBarJSX = (
    isNavBarOpen,
    toggleNavBarOpen,
) => {
    return (
        <nav className="navbar is-primary">
            <div className="navbar-brand">
                <img className="image is-64x64"src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571983496019&di=e325251710c60bfb5fb98db599866d62&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F05%2F87%2F16pic_587871_b.jpg" alt="MyImage"></img>
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
                <div className='navbar-end'>
                        <div id="navbarBasicExample" className="navbar-menu is-active">
                        <div className="navbar-end">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <div className="navbar-link">
                                    选择语言
                                </div>
                                <div className="navbar-dropdown">
                                        <a className="navbar-item" href="/">
                                            中文（简体）
                                        </a>
                                        <a className="navbar-item" href="/">
                                            中文（繁体）
                                        </a>
                                        <a className="navbar-item" href="/">
                                            英语（English）
                                        </a>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </nav>
    );
};

const TopBarJSX = ({
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

export default TopBarJSX;