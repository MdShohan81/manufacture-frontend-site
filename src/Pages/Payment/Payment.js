import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../Loading/Loading'



const stripePromise = loadStripe('pk_test_51Lf2DfFYHdkb91RGbOa4v4oDwCcd8I9iFWhM2QQyMa89wa0yu7H3burCYmuu3QKeZwxcvyt15VfPBgZ1hCkndRq400jsF0hF2f');

const Payment = () => {
    const {id} = useParams();
    const url = `https://tranquil-everglades-72932.herokuapp.com/order/${id}`;

    const {data: order, isLoading} = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers:{
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res => res.json()));

      if(isLoading){
        return <Loading></Loading>
      }
    

    return (
        <div>
            <div class="card mx-auto mt-4 w-96 bg-base-100  shadow-2xl">
                <div class="card-body ">
                    <h2 class="card-title">User Name: <span className='text-secondary'>{order.name}</span> </h2>
                    <h2 class="card-title">Product Name: <span className='text-secondary'>{order.product}</span> </h2>
                    <h2 class="card-title">Product Quantity: <span className='text-secondary'>{order.quantity}</span> </h2>
                    <h2 class="card-title">Total Price: <span className='text-secondary'>${order.totalPrice}</span> </h2>
                    
                    
                </div>
            </div>
            <div class="card mx-auto mt-4 w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                <CheckoutForm order={order}/>
                </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;