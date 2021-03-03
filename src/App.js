import React, { useState } from 'react';

import styles from './App.module.css';
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

  // JSX templates from here.
  let persons = null;
  const buttonClass = [styles.Button];

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
    buttonClass.push(styles.Red)
  }
  const assignedClasses = []
  if (personsState.length <= 2) {
    assignedClasses.push(styles.red)
  }
  if (personsState.length <= 1) {
    assignedClasses.push(styles.bold)
  }

  return (
    <div className={styles.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        onClick={togglePersonsHandler}
        className={buttonClass.join(' ')}
      >Toggle Persons
      </button>
      {persons}
    </div>
  );
};

export default app;
