import React from 'react';

const MyDashboard = () => {
    
    return (
        <div>
            <div className='mb-5'>
                <h2 className='text-xl'>Bookings</h2>
            </div>
            {/* Display Houses */}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#No</th>
                            <th>IMG</th>
                            <th>Name</th>
                            <th>Rent per/mo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDashboard;