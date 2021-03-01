import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState(
    [
      { id: '1das', name: 'Max', age: 28 },
      { id: '2das', name: 'Manu', age: 29 },
      { id: '3dasd', name: 'Stephanie', age: 26 }
    ]);

  const [showPersons, setShowPersons] = useState(false);

  // console.log(personsState);

  const changeNameHandler = (event, personIndex) => {
    const persons = [...personsState];
    persons[personIndex].name = event.target.value;
    setPersonsState(persons);
  };

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState];
    persons.splice(personIndex, 1)
    setPersonsState(persons)
  }

  const togglePersonsHandler = (event) => {
    setShowPersons(!showPersons) 
  }

  const buttonStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  // JSX templates from here.
  let persons = null;

  if (showPersons) {
    persons = (
      <div >
        {
          personsState.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={deletePersonHandler.bind(this, index)}
                changed={(event) => changeNameHandler(event, index)}
              />
            );
          })
        }
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button
        style={buttonStyle}
        onClick={togglePersonsHandler}

      >Toggle Persons
      </button>
      {persons}
    </div>
  );
};

export default app;
