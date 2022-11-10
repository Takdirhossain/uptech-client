import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../contex/AuthContex';
import Myreview from '../pages/Myreview';


const MyReviewAdmin = ({userReview}) => {
    console.log(userReview)
    const { _id, review, displayName, email, service, name, photoURL } = userReview 

    return (
        <div className='border-2 my-10 py-0 flex'>
                <div className="card ">
                    <div className="card-body  text-center">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-start'>{review}</p>
                        <div className="card-actions ">
                            <form className='gap-2 flex'>
                                <input name='data' className='input input-bordered w-full max-w-xs' type="text" placeholder='Update Review ' />
                                <button className="btn btn-primary">update</button>
                            </form>
                            <button className="btn btn-ghost">Delete</button>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
        </div>
       /*  <div>
            {
                myReview.map(userReview=><Myreview userReview={userReview} key={userReview._id} ></MyReview>)
            }
        </div> */
    );
};

export default MyReviewAdmin;