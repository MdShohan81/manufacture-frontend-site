import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const MyReview = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast.success('Review added Successfully');
            
        })
    };
    return (
        <div className='h-screen flex justify-center items-center'>
            <div class="card w-96 bg-base-100 text-base-content shadow-xl border border-1 border-secondary">
            <div class="card-body items-center text-center">
                <h2 class="text-center text-2xl font-semibold text-secondary mb-5 flex justify-center items-center">Add Review </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name"  className="input input-bordered w-full mb-2 text-lg p-1 text-secondary border-secondary" {...register("name")} required/>
                <input type="url" placeholder="Review photo url"  className="input input-bordered w-full mb-2 text-lg p-1 text-secondary border-secondary" {...register("picture")} required/>
                <input type="text" placeholder="write comment"  className="input input-bordered w-full mb-2 text-lg p-1 text-secondary border-secondary" {...register("description")} required/>
                <input type="number" placeholder="Rating"  className="input input-bordered w-full mb-2 text-lg p-1 text-secondary border-secondary" {...register("ratings")} required/>
                
                <button className='btn btn-secondary w-full mt-3 text-white'>Submit</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default MyReview;