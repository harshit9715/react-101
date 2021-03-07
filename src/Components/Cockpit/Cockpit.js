import React, {useEffect, useContext} from 'react';

import styles from './Cockpit.module.css'

// Context
import AuthContext from '../../context/auth-context'


const Cockpit = (props) => {

    const authContext = useContext(AuthContext);
    useEffect( () => {
        console.log('[Cockpit.js] UseEffect')

        // HTTP request...
        setTimeout(() => {
            console.log('saved data to cloud!')
        }, 1000);
        return () => {
            console.log('[Cockpit.js] useEffect cleanup')
        }
    }, []);

    useEffect( () => {
        console.log('[Cockpit.js] 2nd UseEffect')
        return () => {
            console.log('[Cockpit.js] useEffect 2nd cleanup')
        }
    }, [props.showPersons, props.personsLength]);

    const assignedStyles = []
    let buttonStyle = ''
    
    if (props.showPersons) {
        buttonStyle = styles.Red
    }

    if (props.personsLength <= 2) {
      assignedStyles.push(styles.red)
    }
    if (props.personsLength <= 1) {
      assignedStyles.push(styles.bold)
    }
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedStyles.join(' ')}>This is really working!</p>
            <button
                onClick={props.clicked}
                className={buttonStyle}
            >Toggle Persons
            </button>
            <button onClick={authContext.login}>Login</button>
        </div>
    );
}


export default React.memo(Cockpit);