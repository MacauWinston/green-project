import React from 'react';
import './PageProjectDetailJSX.css';
import TopBarPlusView from '../../Widgets/TopBarPlus/TopBarPlusView';

const PageProjectDetailJSX = ({ a})=>{
    return (
                <div>
                    { <TopBarPlusView/>}
                    <div className="box">
                        <div className="columns">
                            <div className="column is-two-third">
                                <div className="box" id="post">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                        </p>
                                    </div>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                    <hr/>
                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                            <a className="level-item" aria-label="reply" href="/PageProjectDetail">
                                                <span className="icon is-small">
                                                    <i className="fa fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet" href="/PageProjectDetail">
                                                <span className="icon is-small">
                                                    <i className="fa fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like" href="/PageProjectDetail">
                                                <span className="icon is-small">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>            
                                <div className="box" id="post">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-64x64">
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                        </p>
                                    </div>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage" hspace="3"/>
                                    <hr/>
                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                            <a className="level-item" aria-label="reply" href="/PageProjectDetail">
                                                <span className="icon is-small">
                                                    <i className="fa fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="retweet" href="/PageProjectDetail">
                                                <span className="icon is-small">
                                                    <i className="fa fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like" href="/PageProjectDetail">
                                                <span className="icon is-small">
                                                <i className="fa fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>            
                            </div>
                            <div className="column is-one-third">
                                <div className="box" id="messenger">
                                    <div className="control is-large">
                                        <textarea className="textarea is-primary" rows="10" disabled></textarea>
                                    </div>
                                    <div className="control">
                                        <textarea className="textarea is-primary" placeholder="请输入文字"></textarea>
                                    </div>
                                    <hr/>
                                    <div className="buttons">
                                    <a className="button" href="/PageProjectDetail">
                                        <strong>发送</strong>
                                    </a>
                                    <a className="button" href="/PageProjectDetail">
                                        <strong>删除</strong>
                                    </a>
                                    </div>
                                </div>
                                <div className="box" id="table">
                                <div className="table-container">
                                    <h1 className="title"><strong>活动表</strong></h1>
                                    <hr/> 
                                <table className="table is-bordered is-striped is-hoverable">
                                    <thead>
                                        <tr>
                                        <th><abbr title="Sunday">Sunday</abbr></th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                        <th><abbr title="Saturday">Saturday</abbr></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td></td>
                                        <td></td>
                                        <td>01</td>
                                        <td>02</td>
                                        <td>03</td>
                                        <td>04</td>
                                        <td>05</td>
                                        </tr>
                                        <tr>
                                        <td>06</td>
                                        <td>07</td>
                                        <td>08</td>
                                        <td>09</td>
                                        <td>10</td>
                                        <td>11</td>
                                        <td>12</td>
                                        </tr>
                                        <tr>
                                        <td>13</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>16</td>
                                        <td>17</td>
                                        <td>18</td>
                                        <td>19</td>
                                        </tr>
                                        <tr>
                                        <td>20</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td>23</td>
                                        <td>24</td>
                                        <td>25</td>
                                        <td>26</td>
                                        </tr>
                                        <tr>
                                        <td>27</td>
                                        <td>28</td>
                                        <td>29</td>
                                        <td>30</td>
                                        <td>31</td>
                                        <td></td>
                                        <td></td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
 };

export default PageProjectDetailJSX;