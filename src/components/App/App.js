import React, { Component } from 'react';

import { connect } from 'react-redux';
import {} from '../../actions';

import AppJSX from './AppJSX';

class App extends Component {
    componentDidMount () {}

    render() {
        return (
            <div className="App">
                <AppJSX />
                {/* <p>Hello World!</p> */}
            </div>
        );
    }
}

function mapStateToProps () {
    return {};
}

function mapDispatchToProps () {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
