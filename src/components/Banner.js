import React from 'react';
import mobileapp from '../assets/mobapp-1.png'


import './Style.css'
const Banner = () => {
    return (
        <div className="hero  py-20">
            <div className="hero-content flex flex-col lg:flex-row">

                <div className='w-2/3'>

                    <label className='banner-title bg-blue p-2 rounded-full'>4.87 OF 5 USER RATING</label>
                    <h1 className="text-6xl mt-5 font-bold">The best rated <br /> app of the month</h1>
                    <p className="py-6 border-l-2 mt-5 mr-3 ">  Pellentesque at posuere tellus. Ut sed dui justo. Phasellus scelerisque turpis arcu, ut pulvinar lectus tristique non. Nam laoreet, risus vel inalis de minna.</p>
                  <button className='bg-blue'>Buy now</button>
                </div>
                <div className='w-2/3 '>

                    <img src={mobileapp} className="   " alt='' />

                </div>
            </div>
        </div>
    );
};

export default Banner;