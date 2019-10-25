import React, { Component } from 'react';
import PageEventDetailJSX from './PageEventDetailJSX';
class PageEventDetailView extends Component{
    state={}
    render(){
        const props = { 
            isLogin:this.state.isLogin
        };
        return <PageEventDetailJSX {...props}/>
    }
}

export default PageEventDetailView;