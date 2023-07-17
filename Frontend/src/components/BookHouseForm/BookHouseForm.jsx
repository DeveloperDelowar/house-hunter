
const BookHouseForm = () => {
    return (
        <div className=' h-screen flex items-center justify-center'>
            <form className=' shadow-md w-[350px] p-3'>
                <h3 className='text-2xl font-bold mb-2 text-center'>Let's Book</h3>

                <label htmlFor="">Name</label>
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" />

                <label htmlFor="">Email</label>
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" />

                <label htmlFor="">Phone</label>
                <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs mb-2" />

                <div className='flex justify-center'>
                    <button className="btn btn-neutral mt-5">Booked</button>
                </div>
            </form>
        </div>
    );
};

export default BookHouseForm;