import React, { Fragment } from 'react';
import Navigation from '../navigation/';
import PhoneList from '../phoneList';
import Footer from '../footer/';

const ProductList = () => {
    return (
        <Fragment>
            <Navigation />
            <PhoneList />
            <Footer />
        </Fragment>
    )
}

export default ProductList;