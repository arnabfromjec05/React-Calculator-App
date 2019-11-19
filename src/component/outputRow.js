import React from 'react';

function OutputRow(props)
{
	return (
		<div className='row'>
			<input type='text' value={props.value} readOnly/>
		</div>
		);
}	

export default OutputRow;