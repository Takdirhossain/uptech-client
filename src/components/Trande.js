import React from 'react';

const Trande = () => {
    return (
        <div>
            <h2 className='text-6xl font-bold text-center'>latest Technology</h2>
            <div className="hero  latest py-20">
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className='w-2/3 '>

                        <img src='/' className="   " alt='' />

                    </div>
                    <div className='w-2/3'>

                        <label className='banner-title  bg-blue p-2 rounded-full'>LATEST TECHNOLOGIES</label>
                        <h1 className="text-6xl mt-5 font-bold">All your needs <span className='text-6xl font-normal'>just <br /> in one app</span> </h1>
                        <p className="py-6 mt-5 mr-3 ">  Pellentesque at posuere tellus. Ut sed dui justo. Phasellus scelerisque turpis arcu, ut pulvinar lectus tristique non. ia faucibus nunc, vel pellentesque nibh condimentum non.  </p>
                        <button className="btn bg-blue">Read More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Trande;