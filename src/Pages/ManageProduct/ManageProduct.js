import React from 'react';
import { toast } from 'react-toastify';
import useProducts from '../../hooks/useProducts';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();
    const deleteProduct = id => {
        const proceed = window.confirm('are you sure');
        if(proceed){
            const url =`https://tranquil-everglades-72932.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = products.filter(item => item._id !== id);
                setProducts(remaining, data);
                toast.success('Inventory Delete Successfully')
            })
        }

    }


    return (
        <div className='my-8'>
            <h1 className='text-center text-3xl font-bold my-8 text-secondary'>All Products</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4  mt-10'>
                {
                    products.map(product => <div key={product._id} class="card lg:max-w-lg md:max-w-md sm:max-w-sm bg-base-100 shadow-xl">
                    <figure><img src={product.img} alt="Shoes" className='h-80'/></figure>
                    <div class="card-body">
                        <h2 class="text-xl font-semibold">{product.name}</h2>
                        <p className='text-md text-neutral'>{product.description}</p>
                        <p className='flex justify-between'>
                        <span className='text-secondary font-bold text-xl'>MinQnty: {product.minquantity}</span> 
                        <span className='text-secondary font-bold text-xl'>Stock: {product.availablequantity}</span>
                        </p>
                        <div class="flex justify-between items-center my-2">
                        <h3 className='text-neutral font-semibold text-xl'>Price: ${product.price}</h3>
                        <button onClick={() => deleteProduct(product._id)} class="btn btn-md btn-secondary px-8">Delete</button>
                        </div>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;