import React from 'react';
import background from '../assets/app-bannerimg.png'
const Trande = () => {
    return (
        <div>
            <h2 className='text-6xl font-bold text-center'>Teande Technology</h2>
            <div className="hero  latest py-20">
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className='w-2/3 '>

                        <img src={background} className="   " alt='' />

                    </div>
                    <div className='w-2/3 ml-20'>

                        <label className='banner-title  bg-blue p-2 rounded-full'>LATEST TECHNOLOGIES</label>
                        <h1 className="text-6xl mt-5 font-bold">Trend   <span className='text-6xl font-normal'>app with it’s easy ecosystem</span> </h1>
                        <p className="py-6 mt-5 mr-3 ">  Pellentesque at posuere tellus. Ut sed dui justo. Phasellus scelerisque turpis arcu, ut pulvinar lectus tristique non. ia faucibus nunc, vel pellentesque nibh condimentum non.  </p>
                        <progress className="progress progress-secondary w-56" value="0" max="100"></progress><br />
                        <progress className="progress progress-secondary w-56" value="10" max="100"></progress><br />
                        <progress className="progress progress-secondary w-56" value="40" max="100"></progress><br />
                        <progress className="progress progress-secondary w-56" value="70" max="100"></progress><br />
                        <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Trande;