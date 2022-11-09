import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Allreview = ({ rev, handaleDelete }) => {
    const { name, photo, review, _id } = rev

   

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handaleDelete(_id)} className='w-10'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>
                {review}
                <br />

            </td>

            <th>
                <button className="btn btn-ghost btn-xs">Update</button>
            </th>
        </tr>

    );
};

export default Allreview;