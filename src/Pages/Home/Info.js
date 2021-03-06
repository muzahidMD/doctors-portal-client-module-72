import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 text-white px-12'>
            <InfoCard cardTitle={"Opening Hours"} cardDes={"Lorem Ipsum is simply dummy text of the pri"} bgClass={'bg-gradient-to-r from-secondary to-primary'} img={clock}></InfoCard>

            <InfoCard cardTitle={"Visit Our Location"} cardDes={"Brooklyn, NY 10036, United States"} bgClass={'bg-accent'} img={marker}></InfoCard>

            <InfoCard cardTitle={"Contact Us Now"} cardDes={"+000 123 456789"} bgClass={'bg-gradient-to-r from-secondary to-primary'} img={phone}></InfoCard>
        </div>
    );
};

export default Info;