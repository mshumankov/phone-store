import React, { useState, useEffect, Fragment } from 'react';
import style from './style.module.css';
import phoneService from '../survices/survices'
import Navigation from '../navigation/';
import Footer from '../footer/';
import Details from './details/';


const ProductDetail = (props) => {

    const [phones, getPhones] = useState([]);

    useEffect(() => {
        let dataArr = [];
        phoneService.load().then((data) => {
            for (let phone in data) {
                const phoneInfo = data[phone];
                phoneInfo.id = phone;
                dataArr.push(phoneInfo);
            }
            console.log('useEffect');
            getPhones(dataArr);
        })

    }, [])

    const currentPhone = phones.filter((phone) => phone.id === props.match.params.id)[0]
    console.log(phones);
    console.log(currentPhone);

    return (
        currentPhone ? <Fragment>
            <Navigation />
            <Details data={currentPhone} />
            <Footer />
        </Fragment>
            : <p>loading...</p>
    )

}

export default ProductDetail;