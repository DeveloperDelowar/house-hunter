import React from 'react';

const AddNewHouse = () => {
    return (
        <div className=' flex items-center justify-center'>
            <form className=' shadow-md w-[350px] p-3'>
                <h3 className='text-2xl font-bold mb-2 text-center'>Add New House</h3>

                <label htmlFor="">Name</label>
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Address</label>
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">City</label>
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Bed rooms</label>
                <input type="number" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor=""> Room size</label>
                <input type="number" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Rent per/mon</label>
                <input type="number" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Phone</label>
                <input type="tel" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Availability Date</label>
                <input type="date" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" required />

                <label htmlFor="">Picture</label>
                <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs mb-5" required />

                <label htmlFor="">Description</label>
                <textarea placeholder="Description here" className="textarea textarea-bordered textarea-sm w-full max-w-xs" required ></textarea>

                <div className='flex justify-center'>
                    <button className="btn btn-neutral mt-5">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddNewHouse;