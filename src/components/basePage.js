import React, { Component } from 'react';

import './../Profile.css';
import {HeaderButtonItem} from './headerButtonItem';
import {HomePage} from './homePage';
import * as Constants from './../core/Constants';
import * as Messages from './../core/UIMessages';


class BasePage extends Component {

    constructor() {
        super();
        this.state = {selected: Constants.HOME};
        this.updateSelection = this.updateSelection.bind(this);
        this.clickTwitter = this.clickTwitter.bind(this);
    }

    updateSelection(e) {
        if (e.target.id)
            this.setState({selected: e.target.id});
    }
    
    clickTwitter(){
        this.setState({selected: Constants.HOME});
    }
    
    render() {
        var menuItems = Constants.MENU_ITEMS;
        console.log("Refreshed + " + this.state.selected);
        let twitterSkyBlueStyle = {"color": Constants.SKY_BLUE_COLOR, "textAlign": "center"};
        let leftSideStyle = {"width": "45%"};
        let iconWidth = {"width": "10%"};
        let rightSideStyle = {"width": "45%", "textAlign": "center"};
        let searchIconStyle = {"margin": "15px"};
        let tweetButtonStyle = {"backgroundColor": "brown", "color": "white", "textAlign": "center"};
        /*** Content Choice ***/
        let pageContent;
        if (this.state.selected == Constants.HOME) {
            pageContent = <HomePage/>;
        }
        /*** ***/
        return (
                <div>
                    <div className="header-bg" >
                        <div style={leftSideStyle}>
                            <div className="flex">
                                {menuItems.map(function (object, i) {
                                                return <HeaderButtonItem 
                                                    data={object} 
                                                    key={i}
                                                    selected={this.state.selected}
                                                    update={this.updateSelection} />;
                                }, this)}
                            </div>
                        </div>
                        <div className="twitter-icon-style" style={iconWidth}>
                            <i className="fab fa-twitter fa-1x" alt={Messages.TITLE} title={Messages.TITLE} style={twitterSkyBlueStyle} onClick={this.clickTwitter}/>
                        </div>
                        <div style={rightSideStyle} className="flex">
                            <input className="search-box-style" 
                                   type="text"  placeholder={Messages.SEARCH_BOX} 
                                   autoComplete="off"/>
                            <i className="fa fa-search fa-1x" style={searchIconStyle}/>
                            <img src="../twitter-image.jpeg" alt={Messages.AV} title={Messages.AV} className="avatar-img-style"/>
                            <div className="tweet-box-style" style={tweetButtonStyle}>Tweet</div>
                        </div>
                    </div>
                    {pageContent}
                </div>
                            );
            }
        }

        export{ BasePage};
