import React, { Fragment, useEffect, useState, useContext, useCallback, useMemo } from 'react';
import Navigation from '../navigation/';
import phoneService from '../services/services';
import getData from '../services/getData';
import Product from './shoppingProduct';
import { AuthContext } from '../authentication/Auth';
import style from './style.module.css';
import { AiOutlineShopping } from 'react-icons/ai';
import Footer from '../footer/';

const ShoppingCart = ({ history }) => {

    const [shoppingCartData, getShoppingCartData] = useState([]);
    const [removeProduct, getRemoveProduct] = useState('');
    const [succesMessage, changeSuccessMessage] = useState(false);

    const { currentUser } = useContext(AuthContext);
    const shipping = 6;

    useEffect(() => {
        phoneService.loadShoppingCart()
            .then((data) => {
                const dataResult = getData.dataToArray(data);
                getShoppingCartData(dataResult)
            })
    }, [removeProduct]);


    const userProducts = useMemo(() => shoppingCartData && currentUser ? shoppingCartData.filter((product) => product.email === currentUser.email) : [], [currentUser, shoppingCartData]);
    const shoppingProducts = useMemo(() => userProducts.map((product) => <Product
        productInfo={product}
        removeProductService={removeProduct}
        getRemoveProduct={getRemoveProduct}
        key={product.id}
    />), [removeProduct, userProducts])

    const totalMonth = useCallback(() => {
        let price = 0;

        if (userProducts) {
            for (const phone of userProducts) {
                price += (Number(((Number(phone.price) * 1.05) / 12).toFixed(0)) + 0.99)
            }
        }

        return price.toFixed(2)
    }, [userProducts])

    const totalPayment = useCallback(() => {
        let price = 0;

        if (userProducts) {
            for (const phone of userProducts) {
                price += phone.price - 0.01
            }
        }

        return price.toFixed(2)
    }, [userProducts])

    const buyProduct = useCallback(async (ev) => {
        const btnText = ev.currentTarget.textContent
        let monthlyPayment;
        let data;

        if (btnText === 'Buy buy with a one-time payment') {
            monthlyPayment = false;
            data = {
                products: userProducts,
                user: currentUser.email,
                monthlyPayment,
                price: totalPayment()
            }
        } else {
            monthlyPayment = true;
            data = {
                products: userProducts,
                user: currentUser.email,
                monthlyPayment,
                price: totalMonth()
            }
        }

        try {
            await phoneService.addShoppingOrder(data);

            for (const product of userProducts) {
                await phoneService.removeShoppingCartProduct(product.id);
            }
            getRemoveProduct(undefined);
            changeSuccessMessage(true);
            setTimeout(() => {
                history.push('/phone-store/');
            }, 3000)

        } catch (error) {
            console.log(error);
        }
    }, [totalMonth, totalPayment, userProducts, currentUser, history])

    return (
        <Fragment>
            <section className={style['success-message']} style={succesMessage ? { display: 'flex' } : { display: 'none' }}>
                <p>Your order is successful</p>
            </section>
            <Navigation />
            <section className={style['cart-presentation']}>
                <div>
                    <h2>Power up with M22 Financing</h2>
                    <p>Buy the latest phones with M22 Financing. With convenient terms up to 12 months at 5% APR.</p>
                </div>
            </section>
            <div className='page-wrap'>
                <div className={style['section-wrap']}>
                    <section className={style.header}>
                        <h1>Shopping Cart</h1>
                        <p>Browse your shopping cart and shop in 3 easy steps</p>
                    </section>
                    <section>{shoppingProducts}</section>
                    <section className={style.total}>
                        <h4>Total amount per month: <span>${totalMonth()}</span></h4>
                        <h4>Total one-time payment: <span>${totalPayment()}</span></h4>
                        <p>Shipping: <span>${shipping.toFixed(2)}</span></p>
                    </section>
                    <section className={style['btn-wrap']}>
                        <div className={style['btn-payment']}>
                            <button className='react-icons-btn-form' onClick={buyProduct}>Buy with a one-time payment<AiOutlineShopping /></button>
                            <button className='react-icons-btn-form' onClick={buyProduct}>Buy with a monthly payment<AiOutlineShopping /></button>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default ShoppingCart;