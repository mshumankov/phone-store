import React, { useState, useEffect, Fragment } from 'react';
import style from './style.module.css';
import phoneService from '../services/services';
import getData from '../services/getData';
import Navigation from '../navigation/';
import Footer from '../footer/';
import Details from './details/';
import Comments from '../comments';


const ProductDetail = (props) => {

    const [phones, getPhones] = useState([]);

    useEffect(() => {
        phoneService.load().then((data) => {
            const dataResult = getData.dataToArray(data);
            getPhones(dataResult);
        })

    }, [])

    const currentPhone = phones.filter((phone) => phone.id === props.match.params.id)[0];

    return (
        currentPhone ? <Fragment>
            <Navigation />
            <Details data={currentPhone} />
            <Comments data={currentPhone} />
            <Footer />
        </Fragment>
            : <p>loading...</p>
    )

}

export default ProductDetail;