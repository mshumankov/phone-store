import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import phoneService from '../survices/survices'
import PhoneCard from '../phoneCard'

const PhoneList = () => {

    const [phones, getPhones] = useState([]);

    useEffect(() => {
        let dataArr = [];
        phoneService.load().then((data) => {
            for (let phone in data) {
                const phoneInfo = data[phone];
                phoneInfo.id = phone;
                dataArr.push(phoneInfo);
            }
            getPhones(dataArr);
        })

    }, []);

    let phoneList = phones.map((phone) => <PhoneCard phoneInfo={phone} key={phone.id} />)

    return (
        <div className="page-wrap">
            <section className={style['phone-list']}>{phoneList}</section>
        </div>
    )
}

export default PhoneList;