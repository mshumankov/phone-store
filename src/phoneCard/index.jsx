import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import Price from '../price';

const PhoneCard = (props) => {
    const { price, image, id } = props.phoneInfo;

    return (
        <div className={style.card}>
            <Link to={`/phone-store/phone/${id}`}>
                <figure>
                    <img src={image} alt='phone' />
                </figure>
            </Link>
            <Link to={`/phone-store/phone/${id}`}>
                <h4>{props.phoneInfo.name}</h4>
            </Link>
            <div>Price: <Price priceAll={price} /></div>
        </div>
    )
}

export default PhoneCard;