import React from 'react';

const Error = ({ phoneSpecs, loadPhoneInfo, loadListStyle, event }) => {
    const loadPhone = () => {
        const phoneInfo = {
            battery: phoneSpecs.battery,
            chipset: phoneSpecs.chipset,
            display: phoneSpecs.display,
            mainCamera: phoneSpecs.mainCamera,
            memory: phoneSpecs.memory,
            image: phoneSpecs.image,
            name: phoneSpecs.name,
            price: phoneSpecs.price,
            selfieCamera: phoneSpecs.selfieCamera
        }
        loadPhoneInfo(phoneInfo);
        loadListStyle(false);
        event.value = '';
    }
    return (
        <div onClick={loadPhone}>
            <img src={phoneSpecs.image} alt={phoneSpecs.name} />
            <h5>{phoneSpecs.name}</h5>
        </div>
    )
}

export default Error;