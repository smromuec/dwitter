import React, {Component} from 'react';
import './HomeIcons.css';
import * as Constants from './../core/Constants';
import * as Messages from './../core/UIMessages';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.selected
            
        };
        console.log(props.selected);
    }
    
    componentWillReceiveProps(newProps) {
      console.log('Selected ' + newProps.selected);
      this.setState({selected: newProps.selected});
   }

    render() {
        let centraliseBoldItemStyle = {"width" : "100%", "fontSize" : "300%", "textAlign" : "center"};
        return <div style={centraliseBoldItemStyle}> This is the Home page</div>
    }
}

export {HomePage};
