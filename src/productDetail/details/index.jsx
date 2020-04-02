import React from 'react';
import style from './style.module.css';
import '../../index.css';
import { IconContext } from 'react-icons';
import { MdShoppingCart, MdKeyboardArrowRight } from 'react-icons/md';
import Price from '../../price';

const Details = (props) => {

    return (
        <IconContext.Provider value={{ className: 'react-icons-btn-shop' }}>
            <article className="page-wrap">
                <div className={style.container}>
                    <figure>
                        <img src={props.data.image} alt="phone" />
                    </figure>
                    <div className={style.description}>
                        <h1>{props.data.name}</h1>
                        <div className={style.prices}>
                            <div className={style.perMonth}>
                                <p className={style.priceText}>Monthly price:</p>
                                <Price priceMonth={true} priceAll={props.data.price} />
                            </div>
                            <div className={style.priceYear}>
                                <p className={style.priceText}>Price:</p>
                                <Price priceAll={props.data.price} />
                            </div>

                        </div>
                        <div className={style.specifications}>
                            <ul>
                                <li>{`Display: ${props.data.display}`}</li>
                                <li>{`Chipset: ${props.data.chipset}`}</li>
                                <li>{`Main Camera: ${props.data.mainCamera}`}</li>
                                <li>{`SelfieCamera: ${props.data.selfieCamera}`}</li>
                                <li>{`Memory: ${props.data.memory}`}</li>
                                <li>{`Battery: ${props.data.battery}`}</li>
                            </ul>
                        </div>
                        <div className={style.btn}>
                            <button><MdShoppingCart /><span>Add to card</span><MdKeyboardArrowRight /></button>
                        </div>
                    </div>
                </div>
            </article>
        </IconContext.Provider>
    )
}

export default Details;