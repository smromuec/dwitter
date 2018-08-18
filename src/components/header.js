import React, { Component } from 'react';

import './../Profile.css';
import {HeaderButtonItem} from './headerButtonItem';
import * as Constants from './../core/Constants';
import * as Messages from './../core/UIMessages';


class Header extends Component {
    render() {
        return (
                <div className="header-bg" >
                    <div className="flex header-position">
                        <HeaderButtonItem profileData="dummyProfile" icon="fa fa-home" title={Messages.HOME} msg={Messages.HOME} />
                        <HeaderButtonItem profileData="dummyProfile" icon="fa fa-bolt" title={Messages.MOMENTS} msg={Messages.MOMENTS}/>
                        <HeaderButtonItem profileData="dummyProfile" icon="fa fa-bell" title={Messages.NOTIF} msg={Messages.NOTIF} />
                        <HeaderButtonItem profileData="dummyProfile" icon="fa fa-envelope" title={Messages.MESSAGES} msg={Messages.MESSAGES}/>
                    </div>
                    <div className="twitter-icon-style">
                    <i className="fab fa-twitter fa-1x" alt={Messages.TITLE}/>
                </div>
                </div>
                );
    }
}

export{ Header};
