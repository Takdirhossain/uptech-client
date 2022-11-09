import React, { useContext, useEffect, useState } from 'react';
import { version } from 'react-dom';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Allreview from '../components/Allreview';
import { MainContext } from '../contex/AuthContex';

const Service = () => {
    const { user } = useContext(MainContext)
    const data = useLoaderData()
    const [reviewed, setReviewed] = useState([])
    const { name, img, description, _id } = data

    const handaleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const review = event.target.review.value
        const name = user?.displayName
        const photo = user?.photoURL
        const addreview = { service: _id, name, review, photo, }

     
        fetch(`http://localhost:5000/review`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addreview)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
            })

    }
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
            const newReview = data.filter(rv => {
                return rv.service === _id
            })
            setReviewed(newReview)
           
        })
    }, [_id, reviewed])
    return (
       <div>
         <div className="card card-side bg-base-100 shadow-xl grid md:grid-cols-1 lg:grid-cols-2 p-3 mt-28 mb-28">
            <img className='rounded' src={img} alt="Movie" />
            <div className="card-body">
                <div className='flex justify-start	'>
                    <p className='2xl font-bold'>{user?.displayName}</p>
                    <img className='w-10' src={user?.photoURL} alt="" />
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div>
                    <form onSubmit={handaleSubmit} className="card-actions justify-end">

                        <textarea name='review' className="textarea textarea-bordered w-full py-2 px-3 resize-none rounded-sm" placeholder="Add A Review" required />

                        <button type='submit' className="btn btn-primary">Add a review</button>
                    </form>
                </div>
            </div>
        </div>
        <div>
        <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                       


                    </tbody>

        {
            reviewed.map(rev => <Allreview key={rev._id} rev={rev}></Allreview> )
        }


                </table>
            </div>
        </div>
        
       </div>
    );
};

export default Service;