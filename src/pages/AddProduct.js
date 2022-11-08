import React from 'react';

const AddProduct = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-0">
      <div className="flex items-center justify-center mt-36 mb-36">
        <div data-aos="fade-up" data-aos-duration="1000" className=' md:w-[48%] lg:w-2/6 px-4 py-5 rounded shadow hover:shadow-md'>
          <h3 className="text-3xl text-center mb-3">Add Product</h3>
          <form action="">
            <div className="mb-2">
            <input type="text"  placeholder="Service Name"  name='service-price' className="input input-bordered  w-full py-2 px-3 resize-none rounded-sm" />
            </div>

            <div className="mb-2">
            <input type="text"  placeholder="Service price"  name='service-price' className="input input-bordered  w-full py-2 px-3 resize-none rounded-sm" />

            </div>
            
            
            <div className="mb-1">
              
              <textarea className="textarea textarea-bordered w-full py-2 px-3 resize-none rounded-sm" placeholder="Description"></textarea>

            </div>
            <div className="mb-2">
            <textarea className="textarea textarea-bordered w-full py-2 px-3 resize-none rounded-sm" placeholder="Description"></textarea>
            </div>
            <button className="btn bg-blue w-full" to='/'> Add SErvice </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;