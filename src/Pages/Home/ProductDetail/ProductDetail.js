import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaMinus ,FaPlus } from "react-icons/fa";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './ProductDetail.css';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const {productId} = useParams();
    const [ product, setProduct ] = useState({});
    const [ user ] = useAuthState(auth)

    useEffect(() => {
        const url = `https://tranquil-everglades-72932.herokuapp.com/product/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        if(product.availablequantity <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
        
    }
    const decreaseQuantity = () => {
        if(product.minquantity >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);
        
    }

    const handlePlaceOrder = event =>{
        event.preventDefault();
        let price = parseFloat(product.price);
        const order = {
            name: user.displayName,
            email: user.email,
            product: product.name,
            img:product.img,
            price: product.price,
            productId: productId,
            quantity: event.target.quantity.value,
            totalPrice: parseFloat(price * quantity),
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        fetch('https://tranquil-everglades-72932.herokuapp.com/order',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('your order placed successfully');
            event.target.reset();
            
        })
        
      
    }
    return (
        <div className='h-screen px-8 bg-base-200'>
            <h1 className='text-2xl font-semibold py-4 text-center'>you choose this: <span className='text-secondary text-bold'>{product.name}</span></h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 my-8'>
                {/* //details page img */}
                <div className='card p-4 shadow-xl flex justify-center items-center border-2 border-secondary'>
                <img src={product.img} className="product-img" alt="img" />
                </div>
                {/* details page information */}
                <div className='card p-3 rounded-lg shadow-2xl border-secondary border'>
                <h2 class="text-xl ">Name: <span className='text-secondary font-semibold'>{product.name}</span></h2>
                <p className='text-md text-neutral'>Description: {product.description}</p>
                <span className='text-xl py-2'>Price: <span className='text-secondary font-semibold'>${product.price}</span></span> 
                <form onSubmit={handlePlaceOrder}>
                <div class="form-control mb-4">
                <label class="label">
                    <span class="label-text">Enter Quantity</span>
                </label>
                <label class="input-group">
                    <span onClick={decreaseQuantity}><FaMinus/></span>
                    <input type="number" name='quantity' value={quantity} class="input input-bordered focus:outline-none" />
                    <span onClick={increaseQuantity}><FaPlus/></span>
                </label>
                </div>
                
                <label className='form-control'>
                <input type="text"  className="input input-bordered  focus:outline-none mb-2  text-secondary border-secondary" value={user?.displayName}/>
                </label>
                <label className='form-control'>
                <input type="email"  className="input input-bordered  focus:outline-none mb-2  text-secondary border-secondary" value={user?.email}/>
                </label>
                <label className='form-control'>
                <input type="text" name='address' placeholder='Enter Address' className="input input-bordered  focus:outline-none mb-2  text-secondary border-secondary" required/>
                </label>
                <label className='form-control'>
                <input type="text" name='phone' placeholder="Phone number" className="input input-bordered  focus:outline-none mb-2  text-secondary border-secondary" required/>
                </label>
                
                <button className='btn btn-secondary my-3'>Place order</button>
                </form>
                
                
                
            
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetail;