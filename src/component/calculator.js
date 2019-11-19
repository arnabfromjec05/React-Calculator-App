import React from 'react';
import CalcHeader from './calcHeader.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

class Calculator extends React.Component{

	constructor()
	{
		super();
		this.state={
			question:'',
			answer:''
		}

		this.handleClick = this.handleClick.bind(this); 
	}

	handleClick(event)
	{
		const value=event.target.value;

		switch (value) { 
	    case '=': { 
	 
	      // if it's an equal sign, use the eval module 
	      // to evaluate the question ,convert the answer 
	      // (in number) to String 
	      if (this.state.question!=='') 
	      { 
	          var ans=''; 
	            try
	              { 
	                  ans = eval(this.state.question); 
	              } 
	              catch(err) 
	              { 
	                  this.setState({answer: "Math Error"}); 
	              } 
	              if (ans===undefined) 
	                  this.setState({answer: "Math Error"}); 
	 
	              // update answer in our state. 
	              else
	                  this.setState({ answer: ans , question: ''}); 
	              break; 
	          } 
	    } 
	    case 'Clear': { 
	 
	      // if it's the Clears sign, just clean our  
	      // question and answer in the state 
	      this.setState({ question: '', answer: '' }); 
	       break;
	    } 
	 	
	    case 'Delete': { 
	      var str = this.state.question; 
	        str = str.substr(0,str.length-1); 
	        this.setState({question: str}); 
	         break;
	    } 
	 	
	  default: { 
	 
	      // for every other command, update the answer in the state 
	      this.setState({ question: this.state.question += value}) 
	      break; 
	    } 
	  } 
	}

	render()
	{
		return (

				<div className="frame"> 
			    <CalcHeader title="React Calculator"/> 
			    <div className="mainCalc"> 
			    <OutputScreen question={this.state.question} answer={this.state.answer}/> 
			    <div className="button-row"> 
			      <Button label={'Clear'} handle={this.handleClick}/> 
			      <Button label={'Delete'} handle={this.handleClick}/> 
			      <Button label={'.'} handle={this.handleClick}/> 
			      <Button label={'/'} handle={this.handleClick}/>
			    </div> 
			    <div className="button-row"> 
			      <Button label={'7'} handle={this.handleClick}/> 
			      <Button label={'8'} handle={this.handleClick}/> 
			      <Button label={'9'} handle={this.handleClick}/> 
			      <Button label={'*'} handle={this.handleClick}/> 
			    </div> 
			    <div className="button-row"> 
			      <Button label={'4'} handle={this.handleClick}/> 
			      <Button label={'5'} handle={this.handleClick}/> 
			      <Button label={'6'} handle={this.handleClick}/> 
			      <Button label={'-'} handle={this.handleClick}/> 
			    </div> 
			    <div className="button-row"> 
			      <Button label={'1'} handle={this.handleClick}/> 
			      <Button label={'2'} handle={this.handleClick}/> 
			      <Button label={'3'} handle={this.handleClick}/> 
			      <Button label={'+'} handle={this.handleClick}/> 
			    </div> 
			    <div className="button-row"> 
			      <Button label={'0'} handle={this.handleClick}/> 
			      <Button label={'='} handle={this.handleClick}/> 
			    </div> 
			    </div> 
			    </div> 
			);
	}
}

export default Calculator;
