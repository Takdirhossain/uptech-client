import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const currentuser = useLoaderData()
//     const [user, setUser] = useState({currentuser})
// const handaleUpdate = event => {
//     event.preventDefault()
//     const review = event.target.review.value 
//     fetch(`http://localhost:3000/update/${currentuser._id}`, {
//         method: "PUT",
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(review)
//     })
    
// }
// const handaleUserInput = e => {
//     const input = e.target.name
//     const value = e.target.value
//     const newUser = { ...user }
//     newUser[input] = value
//     setUser(newUser)
// }
    return (
        <div>
            <form  className="card-actions justify-end mt-28 mb-28">

                <textarea  defaultValue={currentuser.review} name='review' className="textarea textarea-bordered w-full py-2 px-3 resize-none rounded-sm" placeholder="Add A Review" required />

                <button type='submit' className="btn btn-primary">Update review</button>
            </form>
        </div>
    );
};

export default Update;