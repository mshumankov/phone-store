import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import phoneService from '../services/services';
import getData from '../services/getData';
import PhoneCard from '../phoneCard';

const PhoneList = () => {

    const [phones, getPhones] = useState([]);

    useEffect(() => {
        phoneService.load().then((data) => {
            const dataResult = getData.dataToArray(data);
            getPhones(dataResult);
        })

    }, []);

    let phoneList = phones.map((phone) => <PhoneCard phoneInfo={phone} key={phone.id} />)

    return (
        <div className="page-wrap">
            <section className={style['phone-list']}>{phoneList}</section>
        </div>
    )
}

export default React.memo(PhoneList);