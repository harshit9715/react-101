import React, { useState } from 'react';
import './Assignment.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

const assignment = props => {
	const [userInput, setUserInput] = useState('')
	const inputChangedHandler = (event) => {
		setUserInput(event.target.value);
	}

	const removeCharacterHandler = index => {
		setUserInput(userInput.slice(0, index) + userInput.slice(index+1))
	}
	const charList = userInput.split('').map((ch, index) => <Char character={ch} key={index} clicked={() => removeCharacterHandler(index)}/>)

	return (
		<div className="Assignment">
			<h1>Hi, I'm a React App</h1>
			<p>This is really working!</p>
			<input
				type="text"
				onChange={inputChangedHandler}
			value={userInput}
			/>
			<p>{userInput}</p>
			<Validation inputLength={userInput.length} />
			{charList}
		</div>
	);
};

export default assignment;
