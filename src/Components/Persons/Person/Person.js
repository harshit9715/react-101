import React, {useEffect, useRef, useContext} from 'react';
import PropTypes from 'prop-types'
import styles from './Person.module.css'


// context
import AuthContext from '../../../context/auth-context'

const person = (props) => {

    const authContext = useContext(AuthContext);
    const inputElementRef = useRef(null);

    // useEffect(() => {
    //     inputElementRef.current.focus();
    // }, [props]);

    return (
        <div className={styles.Person}>
            {authContext.authenticated ? <p>Auth Success!</p>: <p>Auth Failed!</p>}
            <p onClick={props.click} >I'm {props.name} and I'm {props.age} year old!</p>
            <p>{props.children}</p>
            <input 
                type="text" 
                ref={inputElementRef}
                onChange={props.changed} 
                value={props.name}/>
        </div>
    );
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default React.memo(person);  