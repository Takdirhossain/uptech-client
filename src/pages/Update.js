import React, {  } from 'react';
import {  useLoaderData,  } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const currentuser = useLoaderData()
   
    const {_id} = currentuser
    const handaleUpdate = e => {
        e.preventDefault()
        const review = e.target.review.value
        const data = {
            review: review

        }
        fetch(`https://uptech-server-takdirhossain.vercel.app/review/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
             
        })
    }

    return (
        <div>
            <form onSubmit={handaleUpdate} className="card-actions justify-end mt-28 mb-28">

                <textarea defaultValue={currentuser.review} name='review' className="textarea textarea-bordered w-full py-2 px-3 resize-none rounded-sm" placeholder="Add A Review" required />

                <button type='submit' className="btn btn-primary">Update review</button>
            </form>
        </div>
    );
};

export default Update;