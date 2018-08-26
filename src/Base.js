import React, { Component } from 'react';

import {BasePage} from './components/basePage';
import * as Messages from './core/UIMessages';

class Base extends Component {
    componentDidMount() {
        document.title = Messages.TITLE;
    }

    render() {
        return (
                <BasePage/>
                );
    }
}

export default Base;
