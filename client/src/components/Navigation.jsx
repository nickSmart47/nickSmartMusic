import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <>
            <Link to = "/">Home</Link>
            &nbsp;|&nbsp;
            <Link to = "/intervals">Interval Trainer</Link>
            &nbsp;|&nbsp;
            <Link to = "/arrangements">Piano Arrangements</Link>
        </>)
}

export default Navigation;