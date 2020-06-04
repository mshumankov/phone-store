import React, { useState, useEffect, Fragment, useMemo } from 'react';
import phoneService from '../services/services';
import getData from '../services/getData';
import Navigation from '../navigation/';
import Footer from '../footer/';
import Details from './details/';
import Comments from '../comments';
import style from './style.module.css';

const ProductDetail = (props) => {

    const [phones, getPhones] = useState([]);

    useEffect(() => {
        phoneService.load().then((data) => {
            const dataResult = getData.dataToArray(data);
            getPhones(dataResult);
        })

    }, [])

    const currentPhone = useMemo(() => phones.filter((phone) => phone.id === props.match.params.id)[0], [phones, props.match.params.id]);

    return (
        currentPhone ? <Fragment>
            <Navigation />
            <section className={style.wrapper}>
                <Details data={currentPhone} />
                <Comments data={currentPhone} />
            </section>
            <Footer />
        </Fragment>
            : <p>loading...</p>
    )

}

export default ProductDetail;