import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageWelcomeView from '../PageWelcome/PageWelcomeView';   //欢迎页面

import PageRegisterView from '../PageRegister/PageRegisterView';    //注册页面

import PageMainView from '../PageMain/PageMainView';    //首页

import PageProjectDetailView from '../PageProject/PageProjectDetail/PageProjectDetailView'; //项目页面
 //import PageProjectEditView from '../PageProject/PageProjectEdit/PageProjectEditView';
// import PageProjectListView from '../PageProject/PageProjectList/PageProjectListView';

import PageEventDetailView from '../PageEvent/PageEventDetail/PageEventDetailView'; //新闻页面
// import PageEventEditView from '../PageEvent/PageEventEdit/PageEventEditView';
// import PageEventListView from '../PageEvent/PageEventList/PageEventListView';

import PagePeopleDetailView from '../PagePeople/PagePeopleDetail/PagePeopleDetailView'; //个人页面
// import PagePeopleEditView from '../PagePeople/PagePeopleEdit/PagePeopleEditView';
// import PagePeopleListView from '../PagePeople/PagePeopleList/PagePeopleListView';

import PageOrganizationDetailView from '../PageOrganization/PageOrganizationDetail/PageOrganizationDetailView'; //组织页面
// import PageOrganizationEditView from '../PageOrganization/PageOrganizationEdit/PageOrganizationEditView';
// import PageOrganizationListView from '../PageOrganization/PageOrganizationList/PageOrganizationListView';

import './AppJSX.css';

const HOC = ({
    exact,      // props (boolean)
    path,       // props (string)
    render,     // function ()
}) => {
    return (
        <Route exact={exact} path={path} render={(props) =>
            <div className="main-page">
                <div className="main">
                    {render(props)}
                </div>
                <div className="main-footer"></div>
            </div>
        } />
    );
}

const AppJSX = () => {
    return (
        <div className="app">
            <BrowserRouter>
            <div>
                    <HOC exact path="/" render={() =>
                        <PageWelcomeView/>
                    } />
                    <HOC exact path="/PageMain" render={() =>
                        <PageMainView/>
                    } />
                    <HOC exact path="/PageRegister" render={() =>
                        <PageRegisterView/>
                    } />
                    <HOC exact path="/PageProjectDetail" render={() =>
                        <PageProjectDetailView/>
                    } />
                    <HOC exact path="/PageEventDetail" render={() =>
                        <PageEventDetailView/>
                    } />
                    <HOC exact path="/PagePeopleDetail" render={() =>
                        <PagePeopleDetailView/>
                    } />
                    <HOC exact path="/PageOrganizationDetail" render={() =>
                        <PageOrganizationDetailView/>
                    } />
             </div>
            </BrowserRouter>
        </div>
    );   
};

export default AppJSX;