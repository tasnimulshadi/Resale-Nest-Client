import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns'
import { authContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

//  information. After submitting the form, a modal/toast with a message will pop up to inform the user. Please remember, they must be a seller to add a product (think about the verification process for the admin access). After adding the product, you will then be redirected to the My Products Page.

const districts = ["Barguna", "Barisal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur", "Bandarban", "Brahmanbaria", "Chandpur", "Chittagong", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira", "Jamalpur", "Mymensingh", "Netrakona", "Sherpur", "Dhaka", "Bogra", "Chapainawabganj", "Joypurhat", "Naogaon", "Natore", "Pabna", "Rajshahi", "Sirajganj", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon", "Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"]


const AddProduct = () => {
    const { user } = useContext(authContext);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    //categories
    useEffect(() => {
        fetch('https://ph-assignment-12-used-products-resale-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);


    const handleProductFrom = event => {
        event.preventDefault();
        const form = event.target;
        const productname = form.productname.value;
        const originalprice = form.originalprice.value;
        const sellingprice = form.sellingprice.value;
        const imgurl = form.imgurl.value;
        const condition = form.condition.value;
        const categoryId = form.categoryId.value;
        const usedyears = form.usedyears.value;
        const description = form.description.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const product = {
            productname,
            originalprice,
            sellingprice,
            imgurl,
            condition,
            categoryId,
            usedyears,
            description,
            location,
            phone,

            email: user.email,
            postdate: format(new Date(), 'PP'),
            sold: false,
            advertise: false
        }
        // console.log(product);

        fetch('https://ph-assignment-12-used-products-resale-server.vercel.app/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Product Created');
                    navigate('/dashboard/myproduct');
                }
            })

    }


    return (
        <div className="w-full ">
            <h2 className='my-5 text-2xl font-semibold text-primary text-center'>Add <span className='text-secondary capitalize'>Product</span>
            </h2>
            <form onSubmit={handleProductFrom} className="card-body pt-0">
                <div className="form-control gap-3">

                    {/* name */}
                    <p className='text-primary-focus'>Product Name:</p>
                    <input type="text" name='productname' placeholder="Product Name" className="input input-bordered" required />

                    {/* original price */}
                    <p className='text-primary-focus'>Original Price:</p>
                    <input type="number" name='originalprice' placeholder="Product Original Price" className="input input-bordered" required />
                    {/* selling price */}
                    <p className='text-primary-focus'>Selling Price:</p>
                    <input type="number" name='sellingprice' placeholder="Product Selling Price" className="input input-bordered" required />

                    {/* image */}
                    <p className='text-primary-focus'>Product Image:</p>
                    <input type="text" name='imgurl' placeholder="Product Image Url" className="input input-bordered" required />

                    {/* condition */}
                    <p className='text-primary-focus'>Select Product Condition:</p>
                    <select name="condition" className="select w-full input-bordered">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>

                    {/* category */}
                    <p className='text-primary-focus'>Select Product Category:</p>
                    <select name="categoryId" className="select w-full input-bordered">
                        {
                            categories.map((category) => <option
                                key={category._id}
                                value={category._id}
                            >
                                {category.name}</option>)
                        }
                    </select>

                    {/* use year */}
                    <p className='text-primary-focus'>Years of Uses:</p>
                    <input type="number" name="usedyears" defaultValue='1' className="input input-bordered" required />

                    {/* seller mobile number */}
                    <p className='text-primary-focus'>Seller Phone:</p>
                    <input type="tel" name='phone' placeholder="Seller Phone Number" className="input input-bordered" required />

                    {/* location */}
                    <p className='text-primary-focus'>Select Seller Location:</p>
                    <select name="location" defaultValue={'Dhaka'} className="select w-full input-bordered">
                        {
                            districts.map((district) => <option key={district}>{district}</option>)
                        }
                    </select>

                    {/* description */}
                    <p className='text-primary-focus'>Product Description:</p>
                    <textarea name='description' className="textarea textarea-bordered" placeholder="Product Description" required></textarea>

                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary text-white hover:bg-secondary capitalize">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;