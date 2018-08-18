import React, { Component } from 'react';

import './../Profile.css';
import {HeaderButtonItem} from './headerButtonItem';

class Header extends Component {
    render() {
        return (
                <div className="header-bg" >
                    <div className="flex header-position">
                        <HeaderButtonItem profileData="dummyProfile" icon="fa fa-home" title="Home" msg="Home" />
                        <HeaderButtonItem profileData="dummyProfile" icon="fa fa-bolt" title="Moments" msg="Moments"/>
                        <HeaderButtonItem profileData="dummyProfile" icon="fa fa-bell" title="Notifications" msg="Notifications" />
                        <HeaderButtonItem profileData="dummyProfile" icon="fa fa-envelope" title="Messages" msg="Messages"/>
                    </div>
                    <div className="twitter-icon-style">
                    <i className="fab fa-twitter fa-1x"/>
                </div>
                </div>
                );
    }
}

export{ Header};
