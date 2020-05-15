import React, { useContext, useState } from 'react';
import phoneService from '../../services/services';
import style from './style.module.css';
import '../../index.css';
import { useHistory } from "react-router-dom"
import { IconContext } from 'react-icons';
import { AuthContext } from '../../authentication/Auth';
import { MdShoppingCart, MdKeyboardArrowRight } from 'react-icons/md';
import Price from '../../price';

const Details = ({ data }) => {

    const { currentUser } = useContext(AuthContext);
    const history = useHistory();
    const [errorMessage, getErrorMessage] = useState();

    const addToCart = async () => {
        if (currentUser) {
            try {
                const cartInfo = {
                    email: currentUser.email,
                    image: data.image,
                    phone: data.name,
                    price: data.price,
                    memory: data.memory
                }
                await phoneService.addShoppingCart(cartInfo);
                await history.push('/');
                console.log(cartInfo);
            } catch (error) {
                console.log(error);

            }
        } else {
            getErrorMessage('You need to sign in to use shopping cart. Please sign in')
        }
        console.log(data, currentUser);

    }

    return (
        <IconContext.Provider value={{ className: 'react-icons-btn-shop' }}>
            <article className="page-wrap">
                <div className={style.container}>
                    <figure>
                        <img src={data.image} alt="phone" />
                    </figure>
                    <div className={style.description}>
                        <h1>{data.name}</h1>
                        <div className={style.prices}>
                            <div className={style.perMonth}>
                                <p className={style.priceText}>Monthly price:</p>
                                <Price priceMonth={true} priceAll={data.price} />
                            </div>
                            <div className={style.priceYear}>
                                <p className={style.priceText}>Price:</p>
                                <Price priceAll={data.price} />
                            </div>

                        </div>
                        <div className={style.specifications}>
                            <ul>
                                <li>{`Display: ${data.display}`}</li>
                                <li>{`Chipset: ${data.chipset}`}</li>
                                <li>{`Main Camera: ${data.mainCamera}`}</li>
                                <li>{`SelfieCamera: ${data.selfieCamera}`}</li>
                                <li>{`Memory: ${data.memory}`}</li>
                                <li>{`Battery: ${data.battery}`}</li>
                            </ul>
                        </div>
                        <div className={style.btn}>
                            <button onClick={addToCart}><MdShoppingCart /><span>Add to cart</span><MdKeyboardArrowRight /></button>
                        </div>
                        <div className={style['error-message']}>
                            <p>{errorMessage}</p>
                        </div>
                    </div>
                </div>
            </article>
        </IconContext.Provider>
    )
}

export default Details;