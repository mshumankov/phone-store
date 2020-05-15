import React, { Fragment } from 'react';
import style from './style.module.css';
import Map from './map'
import Navigation from '../navigation'

const AboutUs = () => {
    return (
        <Fragment>
            <Navigation />
            <section className={style['about-presentation']}>
                <div>
                    <h2>What we do?</h2>
                    <p>M22 gives you a chance to quickly and easily find the phone you want.</p>
                    <p>And have it delivered to your home in no time, regardless of your location.</p>
                </div>
            </section>
            <section className={'page-wrap'}>
                <div className={style['about-info']}>
                    <div>
                        <h3>Customurs love us</h3>
                        <p>We have been in the business for quite a while now, and it that time we have
                        not only managed to make close relationships with numerous suppliers all
                        over the world, but also to recognize what people need. This means that we
                        are always able to offer all the latest phones, great prices, reliable service,
                    fast delivery and premium customer support.</p>
                    </div>
                    <div>
                        <h3>Team</h3>
                        <p>Collective experience of our team members and the years we have spent in the business
                        allowed us to develop a vast network of suppliers, ensuring that our customers will
                        always find what they are looking for. This also means that we are able to offer great
                        prices, which are constantly being updated and follow the shifts in the market.</p>
                    </div>
                </div>
                <div className={style.contact}>
                    <h2>Contact</h2>
                    <div>
                        <article>
                            <h4>General information:</h4>
                            <address>
                                <p>str. Tri Ushi 20</p>
                                <p>Sofia</p>
                                <p>Bulgaria</p>
                            </address>
                        </article>
                        <article className={style.border}>
                            <h4>Customer support:</h4>
                            <p>info@m22.eu</p>
                            <p>Call: +359 2 2063 3245</p>
                            <p>Monday through Friday</p>
                            <p>08:30AM to 02:30PM</p>
                        </article>
                        <article className={style.border}>
                            <h4>Warranty handling</h4>
                            <p>Regarding correct postal address for returning the product and
                            service after purchase please contact our customer service on:</p>
                            <p>warranty@m22.eu</p>
                        </article>
                    </div>
                </div>
            </section>
            <Map />
        </Fragment>

    )
}

export default AboutUs;