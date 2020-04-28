import React from 'react';
import Price from '../../price';
import style from './style.module.css';
import phoneService from '../../services/services'

const Product = ({ productInfo, getRemoveProduct }) => {

    const removeProduct = async () => {
        try {
            await phoneService.removeShoppingCartProduct(productInfo.id);
            await getRemoveProduct(productInfo.id);
            console.log('done');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <article className={style['product-wrap']}>
            <figure className={style['image-wrap']}>
                <div>
                    <img src={productInfo.image} alt="phone" />
                </div>
                <figcaption>
                    <h4>{productInfo.phone}</h4>
                    <p>Memory {productInfo.memory}</p>
                </figcaption>
            </figure>
            <div className={style['payment-button-wrap']}>
                <div className={style['payment-wrap']}>
                    <div>
                        <p>One-time payment: </p>
                        <Price priceAll={productInfo.price} />
                    </div>
                    <div className={style.payment}>
                        <p>Monthly payment:</p>
                        <Price priceMonth={true} priceAll={productInfo.price} />
                    </div>
                </div>
                <button onClick={removeProduct}>x</button>
            </div>
        </article>
    )
}
export default Product;