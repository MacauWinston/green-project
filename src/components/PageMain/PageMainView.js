import React, { Component } from 'react';
import PageMainJSX from './PageMainJSX';
class PageMainView extends Component{
    state={}
    render(){
        const props = { 
            isLogin:this.state.isLogin
        };
        return <PageMainJSX {...props}/>
    }
}

export default PageMainView;