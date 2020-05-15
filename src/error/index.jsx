import React from 'react';
import './error.css';

const Error = ({ history }) => {

    const toHome = () => {
        history.push('/');
    }

    return (
        <section className='wrap-error'>
            <div className="clouds">
                <div className="cloud x1"></div>
                <div className="cloud x1_5"></div>
                <div className="cloud x2"></div>
                <div className="cloud x3"></div>
                <div className="cloud x4"></div>
                <div className="cloud x5"></div>
                <div className="cloud x6"></div>
            </div>
            <div className='text-wrap'>
                <div className='_404'>404</div>
                <div className='_1'>THE PAGE</div>
                <div className='_2'>WAS NOT FOUND</div>
                <button className='btn' onClick={toHome}>BACK TO MARS</button>
            </div>
        </section>
    )
}

export default Error;