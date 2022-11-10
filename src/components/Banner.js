import React from 'react';
import mobileapp from '../assets/mobapp-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faPlay } from '@fortawesome/free-solid-svg-icons';

import './Style.css'
const Banner = () => {
    return (
        <div className="hero  py-20">
            <div className="hero-content flex flex-col lg:flex-row">

                <div className='w-2/3'>

                    <label className='banner-title bg-blue p-2 rounded-full'>4.87 OF 5 USER RATING</label>
                    <h1 className="text-6xl mt-5 font-bold">The best rated <br /> app of the month</h1>
                    <p className="py-6 border-l-2 mt-5 mr-3 ">  Pellentesque at posuere tellus. Ut sed dui justo. Phasellus scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel inalis de minna.</p>
                    <div className='mt-5'>
                        <button className="btn  "> <FontAwesomeIcon className='mr-2' icon={faAppleAlt}></FontAwesomeIcon> App Store</button>
                        <button className="btn bg-blue ml-5"> <FontAwesomeIcon className='mr-2' icon={faPlay}></FontAwesomeIcon> Play Store</button>
                    </div>
                </div>
                <div className='w-2/3 '>

                    <img src={mobileapp} className="   " alt='' />

                </div>
            </div>
        </div>
    );
};

export default Banner;