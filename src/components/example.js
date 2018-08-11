import React, {Component} from 'react';

const styles = {
	ContainerStyle:{

	},
	ButtonStyle: {
		marginTop: 20,
		marginBottom: 20
	},
	TextStyle: {
		margin: 20,
		fontSize: 25
	},
	RedTextStyle: {
		color: 'red'
	},
	GreenTextStyle: {
		color: 'green'
	}
};


// An example component to show use for 'state' and 'props'
class Example extends Component{
	constructor(props){
		super(props);
		this.state = {
			clicked: props.clicked
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		const toggledClickedValue = !(this.state.clicked);
		this.setState({clicked: toggledClickedValue});
	}

	render() {
		console.log('clicked value is:', this.state.clicked);
		return (
			<div style={styles.ContainerStyle}>
				<div style={styles.ButtonStyle}>
					<input type="submit" value="Toggle Clicked State" onClick={this.onClick} />
				</div>
				<div style={{...styles.TextStyle, ...styles.RedTextStyle}}>
					{this.state.clicked &&
						<p>Clicked Value: True</p>
					}
				</div>
				<div style={{...styles.TextStyle, ...styles.GreenTextStyle}}>
					{!this.state.clicked &&
						<p>Clicked Value: False</p>
					}
				</div>
			</div>
		);
	}
}

export {Example};
