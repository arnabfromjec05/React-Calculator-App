import React from 'react';

function CalcHeader(props)
{
	return (<div className='header'>
		<h2>This is {props.title}</h2>
		</div>);
}

export default CalcHeader;

// expect react calculator as props