import React, { useContext, useEffect, useState } from 'react';
import MyReviewAdmin from '../components/MyReviewAdmin';
import { MainContext } from '../contex/AuthContex';

const Myreview = () => {
    /* const { _id, addReview, displayName, email, service, servicesName, photoURL } = userReview */
    const {user}=useContext(MainContext)
    const [myReview,setMyReview]=useState([]) 
    // console.log(myReview)
    
     useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyReview(data))
    },[user?.email])

    return (
    <div>
        <div>
            {
                myReview.map(userReview=><MyReviewAdmin userReview={userReview} key={userReview._id} ></MyReviewAdmin>)
            }
        </div> 
   
            {/* <div className='border-2 my-10 py-0 flex'>
                <div className="card ">
                    <div className="card-body  text-center">
                        <h2 className="card-title">{servicesName}</h2>
                        <p className='text-start'>{addReview}</p>
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
        </div> */}
         </div>
    );
};

export default Myreview;