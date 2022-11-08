import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const data = useLoaderData()
    const { name, img, description } = data
    return (
        <div className="card card-side bg-base-100 shadow-xl grid md:grid-cols-1 lg:grid-cols-2 p-3 mt-28 mb-28">
            <img className='rounded' src={img} alt="Movie" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add a review</button>
                </div>
            </div>
        </div>
    );
};

export default Service;