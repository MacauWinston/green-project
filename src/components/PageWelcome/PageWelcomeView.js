import React, { Component } from 'react';
import PageWelcomeJSX from './PageWelcomeJSX';
class PageWelcomeView extends Component{
    state={
        isLogin: false
    }
    render(){
        const props = { 
        };
        return <PageWelcomeJSX {...props}/>
    }
}

export default PageWelcomeView;