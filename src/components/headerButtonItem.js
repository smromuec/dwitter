import React, {Component} from 'react';
import './HomeIcons.css';
import * as Constants from './../core/Constants';
import * as Messages from './../core/UIMessages';

class HeaderButtonItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item : props.data,
            icon: props.data.icon,
            title: props.data.title,
            msg: Messages[Constants.MSG_MAP[props.data.title]],
            selected: props.selected
            
        };
        console.log(props.selected);
    }
    
    componentWillReceiveProps(newProps) {
      console.log('Selected ' + newProps.selected);
      this.setState({selected: newProps.selected});
   }

    render() {
        console.log("In the comp, " + this.state.title + ", " + this.state.selected);
        var paddingRight = {"paddingRight": "10px"};
        let colorObj;
        if (this.state.selected === this.state.title) {
            colorObj = {"color": Constants.SEL_COLOR};
        } else {
            colorObj = {"color": Constants.NOT_SEL_COLOR};
        }

        var obj =
                <div className="icon-style" style={colorObj}>
                    <i className={this.state.icon} style={paddingRight}/>
                    <span id={this.state.title} >{this.state.msg}</span>
                </div>;
        var bottomLine;

        if (this.state.selected == this.state.title) {
            let bgColorObj = {"backgroundColor": Constants.SEL_COLOR};
            bottomLine = <div className="icon-bottom-band" style={bgColorObj}></div>;
        } else {
            bottomLine = <div className="icon-bottom-band"></div>;
        }
        //return <div onClick={this.selectThis} > {obj} {bottomLine} </div>
        return <div id={this.state.title} onClick={this.props.update}> {obj} {bottomLine} </div>
    }
}

export {HeaderButtonItem};
