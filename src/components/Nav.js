import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Nav = ({libraryStatus, setLibraryStatus}) => {

    const changeLibraryStatus = () => {
        setLibraryStatus(!libraryStatus);
        console.log(libraryStatus);
    }


    return (
        <nav>
        <h1>Lofi CodeHub</h1>
        <button onClick={changeLibraryStatus}>
            Library
            <FontAwesomeIcon icon={faMusic}/>
        </button>

        </nav>
    )};
        

export default Nav;