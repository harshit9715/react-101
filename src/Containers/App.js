import React, { useState } from 'react';

import styles from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

const app = props => {
  const [personsState, setPersonsState] = useState(
    [
      { id: '1das', name: 'Max', age: 28 },
      { id: '2das', name: 'Manu', age: 29 },
      { id: '3dasd', name: 'Stephanie', age: 26 }
    ]);

  const [showPersons, setShowPersons] = useState(false);


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
    persons = <Persons 
          persons={personsState} 
          clicked={deletePersonHandler} 
          changed={changeNameHandler}/>
  }
  

  return (
    <div className={styles.App}>
      <Cockpit 
        showPersons={showPersons} 
        persons={personsState}
        clicked={togglePersonsHandler}/>
      {persons}
    </div>
  );
};

export default app;
