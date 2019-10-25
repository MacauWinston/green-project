import React from 'react';
import './PageEventDetailJSX.css';
import TopBarPlusView from '../../Widgets/TopBarPlus/TopBarPlusView';

const PageEventDetailJSX = ({a})=>{
    return (
    <div>
        { <TopBarPlusView/> }
        <div class="box">
            <div class="card">
                <div class="columns">
                    <div class="column is-two-thirds">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">新闻标题</p>
                                    <p class="subtitle is-6">副标题</p>
                                </div>
                            </div>
                            <div class="content">
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻
                                <a href="https://bulma.io/">@bulmaio</a>.
                                <a href="https://www.w3school.com.cn/css/index.asp">#css</a> 
                                <a href="https://www.w3cplus.com/responsive">#responsive</a>
                                <br/>
                                <time datetime="2016-01-01">时间：11:09 PM - 01 Jan 2016</time>
                            </div>
                        </div>
                    </div>
                    <div class="column is-one-third">
                        <div class="card-image">
                            <figure class="image">
                                <img className="image " src="https://bulma.io/images/placeholders/64x64.png" alt="MyImage"></img>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </div>
    );
};
export default PageEventDetailJSX;