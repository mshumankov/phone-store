import React, { useEffect, useState, Fragment } from 'react';
import Navigation from '../navigation';
import phoneService from '../services/services';
import getData from '../services/getData';
import Phone from './phoneInfo'
import style from './style.module.css';


const Error = () => {
    const [phones, getPhones] = useState([]);
    const [firstPhoneComponent, getFirstPhone] = useState([]);
    const [firstPhoneInfo, loadFirstPhone] = useState({
        battery: null,
        chipset: null,
        display: null,
        mainCamera: null,
        memory: null,
        image: null,
        name: null,
        price: null,
        selfieCamera: null
    })
    const [firstListStyle, loadFirstListStyle] = useState(false);
    const [secondPhoneComponent, getSecondPhone] = useState([]);
    const [secondPhoneInfo, loadSecondPhone] = useState({
        battery: null,
        chipset: null,
        display: null,
        mainCamera: null,
        memory: null,
        image: null,
        name: null,
        price: null,
        selfieCamera: null
    })
    const [secondListStyle, loadSecondListStyle] = useState(false);
    const [thirdPhoneComponent, getThirdPhone] = useState([]);
    const [thirdPhoneInfo, loadThirdPhone] = useState({
        battery: null,
        chipset: null,
        display: null,
        mainCamera: null,
        memory: null,
        image: null,
        name: null,
        price: null,
        selfieCamera: null
    })
    const [thirdListStyle, loadThirdListStyle] = useState(false);

    useEffect(() => {
        phoneService.load().then((data) => {
            const dataResult = getData.dataToArray(data);
            getPhones(dataResult);
        })

    }, []);

    let phoneList = [];

    const choosePhone = (e, listStyle, getPhone, loadPhoneInfo) => {
        const valueInput = e.target.value.toLowerCase();
        phoneList = phones.filter((phone) => {
            let allWords = valueInput.split(' ').filter((word) => word !== '');
            let containWords = true;

            for (let word of allWords) {
                if (!phone.name.toLowerCase().includes(word)) {
                    containWords = false;
                }
            }
            return containWords
        })

        const phoneListComponent = phoneList.map((phone) => <Phone
            phoneSpecs={phone}
            loadPhoneInfo={loadPhoneInfo}
            loadListStyle={listStyle}
            event={e.target}
            key={phone.id}
        />)
        getPhone(phoneListComponent);
        listStyle(true);
    }

    return (
        <Fragment>
            <Navigation />
            <section className={style['compare-presentation']}>
                <div>
                    <h2>Compare specs</h2>
                    <p>Quickly and easily find the best phone for you.</p>
                </div>
            </section>
            <section className='page-wrap'>
                <div className={style['compare-wrap']}>
                    <div className={style.category}></div>
                    <div className={style.data}>
                        <div className={style.search}>
                            <div className={style['serch-input']}>
                                <label>Compare with;</label>
                                <input type="text" placeholder='Please enter model name' onChange={(e) => choosePhone(e, loadFirstListStyle, getFirstPhone, loadFirstPhone)} />
                            </div>
                            <div className={style['phone-list']} style={firstListStyle ? { display: 'block' } : { display: 'none' }}>
                                {firstPhoneComponent}
                            </div>
                        </div>
                        <div className={style.search}>
                            <div className={style['serch-input']}>
                                <label>Compare with;</label>
                                <input type="text" placeholder='Please enter model name' onChange={(e) => choosePhone(e, loadSecondListStyle, getSecondPhone, loadSecondPhone)} />
                            </div>
                            <div className={style['phone-list']} style={secondListStyle ? { display: 'block' } : { display: 'none' }}>
                                {secondPhoneComponent}
                            </div>
                        </div>
                        <div className={style.search}>
                            <div className={style['serch-input']}>
                                <label>Compare with;</label>
                                <input type="text" placeholder='Please enter model name' onChange={(e) => choosePhone(e, loadThirdListStyle, getThirdPhone, loadThirdPhone)} />
                            </div>
                            <div className={style['phone-list']} style={thirdListStyle ? { display: 'block' } : { display: 'none' }}>
                                {thirdPhoneComponent}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style['compare-wrap']}>
                    <div className={style.category}></div>
                    <div className={style.data}>
                        <div className={style['image-name-wrap']} style={firstPhoneInfo.name ? { display: 'block' } : { display: 'none' }}>
                            <div className={style['phone-hedding']}>
                                <h5>{firstPhoneInfo.name}</h5>
                            </div>
                            <div>
                                <img src={firstPhoneInfo.image} alt={firstPhoneInfo.name} />
                            </div>
                        </div>
                        <div className={style['image-name-wrap']} style={firstPhoneInfo.name ? { display: 'block' } : { display: 'none' }}>
                            <div div className={style['phone-hedding']}>
                                <h5>{secondPhoneInfo.name}</h5>
                            </div>
                            <div>
                                <img src={secondPhoneInfo.image} alt={firstPhoneInfo.name} />
                            </div>
                        </div>
                        <div className={style['image-name-wrap']} style={firstPhoneInfo.name ? { display: 'block' } : { display: 'none' }}>
                            <div div className={style['phone-hedding']}>
                                <h5>{thirdPhoneInfo.name}</h5>
                            </div>
                            <div>
                                <img src={thirdPhoneInfo.image} alt={firstPhoneInfo.name} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style['compare-wrap']}>
                    <div className={style.category}>Display</div>
                    <div className={style.data}>
                        <div className={style['data-element']}>
                            <p>{firstPhoneInfo.display}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{secondPhoneInfo.display}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{thirdPhoneInfo.display}</p>
                        </div>
                    </div>
                </div>
                <div className={style['compare-wrap']}>
                    <div className={style.category}>Chipset</div>
                    <div className={style.data}>
                        <div className={style['data-element']}>
                            <p>{firstPhoneInfo.chipset}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{secondPhoneInfo.chipset}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{thirdPhoneInfo.chipset}</p>
                        </div>
                    </div>
                </div>
                <div className={style['compare-wrap']}>
                    <div className={style.category}>Memory</div>
                    <div className={style.data}>
                        <div className={style['data-element']}>
                            <p>{firstPhoneInfo.memory}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{secondPhoneInfo.memory}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{thirdPhoneInfo.memory}</p>
                        </div>
                    </div>
                </div>
                <div className={style['compare-wrap']}>
                    <div className={style.category}>Main Camera</div>
                    <div className={style.data}>
                        <div className={style['data-element']}>
                            <p>{firstPhoneInfo.mainCamera}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{secondPhoneInfo.mainCamera}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{thirdPhoneInfo.mainCamera}</p>
                        </div>
                    </div>
                </div>
                <div className={style['compare-wrap']}>
                    <div className={style.category}>Selfie Camera</div>
                    <div className={style.data}>
                        <div className={style['data-element']}>
                            <p>{firstPhoneInfo.selfieCamera}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{secondPhoneInfo.selfieCamera}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{thirdPhoneInfo.selfieCamera}</p>
                        </div>
                    </div>
                </div>
                <div className={style['compare-wrap']}>
                    <div className={style.category}>Battery</div>
                    <div className={style.data}>
                        <div className={style['data-element']}>
                            <p>{firstPhoneInfo.battery}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{secondPhoneInfo.battery}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{thirdPhoneInfo.battery}</p>
                        </div>
                    </div>
                </div>
                <div className={style['compare-wrap']}>
                    <div className={style.category}>Price</div>
                    <div className={style.data}>
                        <div className={style['data-element']}>
                            <p>{firstPhoneInfo.price}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{secondPhoneInfo.price}</p>
                        </div>
                        <div className={style['data-element']}>
                            <p>{thirdPhoneInfo.price}</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Error;