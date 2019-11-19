import React from 'react';

function Button(props)
{
	console.log(props.handle);
	// console.log(props.label)
	return (<input type='button' onClick={props.handle} value={props.label}/>);
}

export default Button;