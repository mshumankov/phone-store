import React, { Fragment, useState, useEffect } from 'react';
import Navigation from '../navigation/';
import PhoneList from '../phoneList';
import Footer from '../footer/';
import style from './style.module.css';

const ProductList = () => {
    const [background, changeBackground] = useState('picture-1');
    const [text, changeText] = useState('Best Phones');
    let [counter, changeCounter] = useState(1);

    useEffect(() => {
        const moveBackground = setTimeout(() => {

            if (counter === 1) {
                changeText('Best Prices');
                changeBackground('picture-2')
            } else if (counter === 2) {
                changeText('Pay over time');
                changeBackground('picture-3')
            } else if (counter === 3) {
                changeText('Best Phones');
                changeBackground('picture-1')
            }

            if (counter === 3) {
                changeCounter(1)
            } else {
                let count = counter + 1;
                changeCounter(count)
            }

        }, 4000)

        return () => {
            clearTimeout(moveBackground);
        }
    }, [counter])
    return (
        <Fragment>
            <Navigation />
            <section className={style['home-presentation']}>
                <div className={style[`${background}`]}>
                    <div>
                        <h1>{text}</h1>
                    </div>
                </div>
            </section>
            <PhoneList />
            <Footer />
        </Fragment>
    )
}

export default ProductList;