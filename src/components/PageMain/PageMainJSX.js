import React from 'react';
import './PageMainJSX.css';
import TopBarPlusView from '../Widgets/TopBarPlus/TopBarPlusView'
//import { tsPropertySignature } from '@babel/types';

const PageMainJSX = ({a})=>{
    return (
    <div>
        {<TopBarPlusView/>}
        <div className="box">
            <div className="columns">
                <div className="column is-two-third">
                    <div className="box">
                        <h3 className="title"><strong>绿色活动表</strong></h3>
                        <div className="table-container">
                            <table className="table is-bordered is-striped is-hoverable">
                                <thead>
                                        <tr>
                                            <th> 周日</th>
                                            <th> 周一</th>
                                            <th> 周二</th>
                                            <th> 周三</th>
                                            <th> 周四</th>
                                            <th> 周五</th>
                                            <th> 周六</th>
                                        </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td >1<br/>元旦节</td>
                                        <td >2<br/>十二</td>
                                        <td>3<br/>十三</td>
                                    </tr>
                                    <tr>
                                        <td>4<br/>十四</td>
                                        <td>5<br/>十五</td>
                                        <td>6<br/>小寒</td>
                                        <td>7<br/>十七</td>
                                        <td>8<br/>十八</td>
                                        <td>9<br/>十九</td>
                                        <td>10<br/>二十</td>
                                    </tr>
                                    <tr>
                                        <td>11<br/>廿一</td>
                                        <td>12<br/>廿二</td>
                                        <td>13<br/>廿三</td>
                                        <td>14<br/>廿四</td>
                                        <td>15<br/>廿五</td>
                                        <td>16<br/>廿六</td>
                                        <td>17<br/>廿七</td>
                                    </tr>
                                    <tr>
                                        <td>18<br/>廿八</td>
                                        <td>19<br/>廿九</td>
                                        <td>20<br/>大寒</td>
                                        <td>21<br/>初二</td>
                                        <td>22<br/>初三</td>
                                        <td>23<br/>初四</td>
                                        <td>24<br/>初五</td>
                                    </tr>
                                    <tr>
                                        <td>25<br/>初六</td>
                                        <td>26<br/>初七</td>
                                        <td>27<br/>蜡八节</td>
                                        <td>28<br/>初九</td>
                                        <td>29<br/>初十</td>
                                        <td>30<br/>十一</td>
                                        <td>31<br/>十二</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <div className="box">    
                    <div className="title"><strong>热门项目</strong></div>
                     <a href="PageEventDetail">更多项目</a> 
                    <hr/>                            
                      <img src="https://bulma.io/images/placeholders/128x128.png" hspace="30" alt="MyImage"/>                   
                    <img src="https://bulma.io/images/placeholders/128x128.png"hspace="30" alt="MyImage"/>
                    <img src="https://bulma.io/images/placeholders/128x128.png"hspace="30" alt="MyImage"/>
                    <hr/>
                    <img src="https://bulma.io/images/placeholders/128x128.png" hspace="30" alt="MyImage"/>                   
                    <img src="https://bulma.io/images/placeholders/128x128.png"hspace="30" alt="MyImage"/>
                    <img src="https://bulma.io/images/placeholders/128x128.png"hspace="30" alt="MyImage"/>

                    </div>

                </div>
              
                <div className="column is-one-third">
                        <div className="box">
                            <h3>绿色明星</h3>
                            <hr/>
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="MyImage"/>
                             <hr/>
                            <a className="idol" href="PageMain">绿色明星名字</a>
                            <hr/>
                                   <img src="https://bulma.io/images/placeholders/128x128.png" hspace="20" alt="MyImage"/>
                                  <img src="https://bulma.io/images/placeholders/128x128.png"hspace="20" alt="MyImage"/>
                                  <img src="https://bulma.io/images/placeholders/128x128.png"hspace="20" alt="MyImage"/>
                            
                        </div>
                        <div className="box">
                            <h3>热门新闻</h3>
                             <div className="card">
                                 <div className="card-content">
                                     <div className="media">
                                         <div className="media-left">
                                         <figure className="image is-48x48">
                                             <img src="https://bulma.io/images/placeholders/96x96.png" alt="MyImage"/>
                                        </figure> 
                                         </div>
                                         <div className="media-content">
                                             <p className="title is-4">新闻标题</p>
                                             <p className="subtitle is-6">新闻来源/发布时间</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div className="card">
                                 <div className="card-content">
                                     <div className="media">
                                         <div className="media-left">
                                         <figure className="image is-48x48">
                                             <img src="https://bulma.io/images/placeholders/96x96.png" alt="MyImage"/>
                                        </figure> 
                                         </div>
                                         <div className="media-content">
                                             <p className="title is-4">新闻标题</p>
                                             <p className="subtitle is-6">新闻来源/发布时间</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div className="card">
                                 <div className="card-content">
                                     <div className="media">
                                         <div className="media-left">
                                         <figure className="image is-48x48">
                                             <img src="https://bulma.io/images/placeholders/96x96.png" alt="MyImage"/>
                                        </figure> 
                                         </div>
                                         <div className="media-content">
                                             <p className="title is-4">新闻标题</p>
                                             <p className="subtitle is-6">新闻来源/发布时间</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div className="card">
                                 <div className="card-content">
                                     <div className="media">
                                         <div className="media-left">
                                         <figure className="image is-48x48">
                                             <img src="https://bulma.io/images/placeholders/96x96.png" alt="MyImage"/>
                                        </figure> 
                                         </div>
                                         <div className="media-content">
                                             <p className="title is-4">新闻标题</p>
                                             <p className="subtitle is-6">新闻来源/发布时间</p>
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


export default PageMainJSX;