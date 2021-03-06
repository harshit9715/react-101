import React from 'react';

import styles from './Cockpit.module.css'
const Cockpit = (props) => {

    const assignedStyles = []
    let buttonStyle = ''
    
    if (props.showPersons) {
        buttonStyle = styles.Red
    }

    if (props.persons.length <= 2) {
      assignedStyles.push(styles.red)
    }
    if (props.persons.length <= 1) {
      assignedStyles.push(styles.bold)
    }
    return (
        <div className={styles.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedStyles.join(' ')}>This is really working!</p>
            <button
                onClick={props.clicked}
                className={buttonStyle}
            >Toggle Persons
            </button>
        </div>
    );
}


export default Cockpit;