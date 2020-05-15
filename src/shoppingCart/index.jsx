import React, { Fragment, useEffect, useState, useContext } from 'react';
import Navigation from '../navigation/';
import phoneService from '../services/services';
import getData from '../services/getData';
import Product from './shoppingProduct';
import { AuthContext } from '../authentication/Auth';
import style from './style.module.css';
import { AiOutlineShopping } from 'react-icons/ai';


const ShoppingCart = () => {

    const [shoppingCartData, getShoppingCartData] = useState([]);
    const [removeProduct, getRemoveProduct] = useState('');
    let userProducts = [];
    let shoppingProducts = [];
    const { currentUser } = useContext(AuthContext);
    let shipping = 0;

    useEffect(() => {
        phoneService.loadShoppingCart()
            .then((data) => {
                const dataResult = getData.dataToArray(data);
                getShoppingCartData(dataResult)
            })
    }, [removeProduct]);

    if (currentUser && shoppingCartData) {
        userProducts = shoppingCartData.filter((product) => product.email === currentUser.email);
        shoppingProducts = userProducts.map((product) => <Product
            productInfo={product}
            removeProductService={removeProduct}
            getRemoveProduct={getRemoveProduct}
            key={product.id}
        />)
        shipping = 6;
    }

    const totalMonth = () => {
        let price = 0;

        if (userProducts) {
            for (const phone of userProducts) {
                //console.log(phone.price);
                price += (Number(((Number(phone.price) * 1.05) / 12).toFixed(0)) + 0.99)
            }
        }

        return price.toFixed(2)
    }

    const totalPayment = () => {
        let price = 0;

        if (userProducts) {
            for (const phone of userProducts) {
                //console.log(phone.price);
                price += phone.price - 0.01
            }
        }

        return price.toFixed(2)
    }

    const buyProduct = async (ev) => {
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
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <Navigation />
            <section className={style['cart-presentation']}>
                <div>
                    <h2>Power up with M22 Financing</h2>
                    <p>Buy the latest phones with M22 Financing. With convenient terms up to 12 months at 5% APR.</p>
                </div>
            </section>
            <div className='page-wrap'>
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
                        <button className='react-icons-btn-form' onClick={buyProduct}>Buy buy with a one-time payment<AiOutlineShopping /></button>
                        <button className='react-icons-btn-form' onClick={buyProduct}>Buy buy with a monthly payment<AiOutlineShopping /></button>
                    </div>
                </section>
            </div>

        </Fragment>
    )
}

export default ShoppingCart;