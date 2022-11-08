import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {


  const handalesubmit = event => {
    event.preventDefault()
    const form = event.target
    const name = form.serviceName.value
    const price = form.servicePrice.value
    const description = form.description.value
    const img = form.image.value
    const service = {
      name,
      price,
      description,
      img
    }
    fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          Swal.fire(
            'Good job!',
            'Your Service Added!',
            'success'
            )
            form.reset()
        }
      })
  }
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-0">
      <div className="flex items-center justify-center mt-36 mb-36">
        <div data-aos="fade-up" data-aos-duration="1000" className=' md:w-[48%] lg:w-2/6 px-4 py-5 rounded shadow hover:shadow-md'>
          <h3 className="text-3xl text-center mb-3">Add Product</h3>
          <form onSubmit={handalesubmit}>
            <div className="mb-2">
              <input type="text" placeholder="Service Name" name='serviceName' className="input input-bordered  w-full py-2 px-3 resize-none rounded-sm" required />
            </div>

            <div className="mb-2">
              <input type="text" placeholder="Service price" name='servicePrice' className="input input-bordered  w-full py-2 px-3 resize-none rounded-sm" required />

            </div>

            <div className="mb-1">

              <textarea name='description' className="textarea textarea-bordered w-full py-2 px-3 resize-none rounded-sm" placeholder="Description" required />

            </div>
            <div className="mb-2">
              <textarea name='image' className="textarea textarea-bordered w-full py-2 px-3 resize-none rounded-sm" placeholder="Image Url" required />
            </div>
            <button className="btn bg-blue w-full" to='/'> Add Service </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;