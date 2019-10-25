import React, { Component } from 'react';

import { connect } from 'react-redux';
//import { deleteMessage } from '../../../actions';
import TopBarJSX from './TopBarJSX';

class TopBarView extends Component {
    state = {
        isNavBarOpen: true
    };

    toggleNavBarOpen = () => {
        this.setState((prevState) => ({
            isNavBarOpen: !prevState.isNavBarOpen
        }));
    };

    render() {
        const props = {
            ...this.state,
            toggleNavBarOpen: this.toggleNavBarOpen,
        };
        return <TopBarJSX {...props} />;
    }
}

function mapStateToProps ({a}) {
    return {};
}

function mapDispatchToProps () {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBarView);