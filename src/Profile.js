import React, { Component } from 'react';

import {Header} from './components/header';
import * as Messages from './core/UIMessages';

class Profile extends Component {
    componentDidMount() {
        document.title = Messages.TITLE;
    }

    render() {
        return (
                <Header/>
                );
    }
}

export default Profile;
