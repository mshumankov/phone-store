import React from 'react';
import './styleSpinner.css';

const Spinner = () => {
    return (
        <section className="spinner-wrap">
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </section>
    )
}

export default Spinner