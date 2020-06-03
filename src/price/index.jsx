import React, { Fragment } from 'react';
import style from './style.module.css';


const Price = (props) => {


    const pricePerMonth = () => {
        const price = Number(((props.priceAll * 1.05) / 12).toFixed(0));
        return price;
    }

    const priceMarketing = () => {
        const price = props.priceAll - 1;
        return price;
    }

    if (!props.priceAll) {
        return null;
    }

    return (
        <Fragment>
            {props.priceMonth ? (
                <p className={style['price-number']}><span className={style.currency}>$ </span>{`${pricePerMonth()},`}<span className={style.coins}>99 </span></p>
            ) : (
                    <p className={style['price-number']}><span className={style.currency}>$ </span>{`${priceMarketing()},`}<span className={style.coins}>99 </span></p>
                )}

        </Fragment>
    )
}

export default Price;