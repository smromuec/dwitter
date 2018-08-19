import React, {Component} from 'react';
import './HomeIcons.css';


//const divWidth = {"width" : this.props.width};
//        
class HeaderButtonItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			profileData: props.profileData,
                        icon : props.icon,
                        title: props.title,
                        msg: props.msg,
		};
	};
        
        
	render() {
            var paddingRight = {"paddingRight" : "10px"};
                return (
                    <div className="icon-style">
                        <i className={this.state.icon} style={paddingRight}/>
                        <span>{this.state.msg}</span>
                    </div>
                );
	}
}

export {HeaderButtonItem};
