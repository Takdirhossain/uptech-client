import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://uptech-server-takdirhossain.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])
    return (
        <div>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-10 pb-10'>

                {
                    service.map(serv => <div key={serv._id} className="card  card-compact  bg-base-100 shadow-xl">
                        <figure><img src={serv.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{serv.name}</h2>
                            <p> {
                                serv.description.length > 250 ? 
                                    <> {serv.description.slice(0, 250)  + '...'  } <Link to={`/service/${serv._id}`} className='className="btn btn-primary p-1 text-xl' >Read More</Link> </>
                                    :
                                    serv.description
                            }</p>
                            
                        </div>
                    </div>)
                }
            </div>
           
        </div>
    );
};

export default AllServices;