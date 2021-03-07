import React, { useState } from 'react';

import styles from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

// Contexts
import AuthContext from '../context/auth-context'

const app = props => {
  const [personsState, setPersonsState] = useState(
    [
      { id: '1das', name: 'Max', age: 28 },
      { id: '2das', name: 'Manu', age: 29 },
      { id: '3dasd', name: 'Stephanie', age: 26 }
    ]);

  const [showPersons, setShowPersons] = useState(false);
  const [showCockpit, setShowCockpit] = useState(true);
  const [isAuth, setIsAuth] = useState(false);


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

  const loginHandler = () => {
    setIsAuth(true);
  }

  // JSX templates from here.
  let persons = null;

  if (showPersons) {
    persons = <Persons
      persons={personsState}
      isAuth={isAuth}
      clicked={deletePersonHandler}
      changed={changeNameHandler} />
  }


  return (
    <div className={styles.App}>
      <button onClick={() => setShowCockpit(!showCockpit)}>Toggle cockpit</button>
      <AuthContext.Provider value={
        { 
          authenticated: isAuth, 
          login: loginHandler 
        }}>
        {showCockpit &&
          <Cockpit
            title={props.title}
            showPersons={showPersons}
            personsLength={personsState.length}
            clicked={togglePersonsHandler} />
        }
        {persons}
      </AuthContext.Provider>
    </div>
  );
};

export default app;
