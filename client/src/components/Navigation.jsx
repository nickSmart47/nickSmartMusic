import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Navigation = () => {

    return (
        <>
            <div className="p-3 d-flex justify-content-center align-items-center gap-1">
                <Link to="/"><p className="btn btn-dark mt-2">Home</p></Link>
                &nbsp;&nbsp;<div className="vr"></div>&nbsp;&nbsp;
                <Link to="/intervals"><p className="btn btn-dark mt-2">Interval Trainer</p></Link>
                &nbsp;&nbsp;<div className="vr"></div>&nbsp;&nbsp;
                <Link to="/arrangements"><p className="btn btn-dark mt-2">Piano Arrangements</p></Link>
            </div>
        </>)
}

export default Navigation;