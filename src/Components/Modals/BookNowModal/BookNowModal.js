import React, { useContext } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/AuthProvider';

const BookNowModal = ({ product, setSelectedProduct }) => {
    const { user } = useContext(authContext);
    const { email, imgurl, location, productname, sellingprice, _id, } = product;

    const handleBookNow = (event) => {
        event.preventDefault();
        const buyerphone = event.target.buyerphone.value;
        const meetinglocation = event.target.meetinglocation.value;

        const booking = {
            productid: _id,
            selleremail: email,
            buyeremail: user.email,
            buyerphone,
            meetinglocation,
            bookingdate: format(new Date(), 'PP'),
        }

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product Booked');
                    event.target.reset();
                    if (setSelectedProduct) {
                        setSelectedProduct(null);

                    }
                }
            })

    }


    return (
        <div>
            {/* Put this part before </body> tag */}
            < input type="checkbox" id="BookNowModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="BookNowModal" className="btn btn-secondary text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className=' mb-5 flex items-center gap-3'>
                        <img className='h-20 rounded-xl border-2 border-primary-focus' src={imgurl} alt="" />
                        <div>
                            <h3 className="font-bold text-lg">{productname}</h3>
                            <p className='text-xl  text-primary-focus'><span className='font-extrabold'>৳</span> {sellingprice}</p>
                        </div>
                    </div>

                    <form onSubmit={handleBookNow} className="card-body p-0">
                        <div className="form-control gap-1">

                            {/* buyer name */}
                            <p className='text-primary-focus mt-1'>Your Name:</p>
                            <input type="text" className="input input-sm input-bordered" defaultValue={user.displayName} disabled />

                            {/* buyer email */}
                            <p className='text-primary-focus mt-1'>Your Email:</p>
                            <input type="text" className="input input-sm input-bordered" defaultValue={user.email} disabled />

                            {/* buyer phone number */}
                            <p className='text-primary-focus mt-1'>Your Phone No:</p>
                            <input type="text" name='buyerphone' placeholder="Phone Number" className="input input-sm input-bordered" required />

                            {/* loaction */}
                            <p className='text-primary-focus mt-1'>Where do you want to meet in <span className='text-secondary-focus'>{location}</span>?</p>
                            <textarea name='meetinglocation' className="textarea textarea-bordered" placeholder="Location" required></textarea>

                        </div>
                        <div className="form-control mt-2">
                            <button type='submit' className="btn btn-primary text-white hover:bg-secondary capitalize">Book Now</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookNowModal;