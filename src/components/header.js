import React from 'react';

const Header = (props) => {
	const {text} = props;
	return (
		<h1>{text}</h1>
	);
};

export {Header};
