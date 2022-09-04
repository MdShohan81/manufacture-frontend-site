import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FiTrash2 } from "react-icons/fi";
import auth from '../../firebase.init';
const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if(user){
        fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
        }
        
    }, [user]);

    return (
        <div>
            <h3>My Order: {orders.length}</h3>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>SL</th>
        <th>Product</th>
        <th>Img</th>
        <th>Name</th>
        <th>quantity</th>
        <th>email</th>
        <th>Cancel</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
     {
         orders.map((order, index) => <tr key={order.id}>
            <th>{index + 1}</th>
            <td>{order.product}</td>
            <td><img class="mask mask-square w-10" src={order.img} alt='img'/></td>
            <td>{order.name}</td>
            <td>{order.quantity}</td>
            <td>{order.email}</td>
            <td><button><FiTrash2 className='ml-3 text-secondary text-xl'/></button></td>
            <td><button className='text-secondary'>Payment</button></td>
            <td>
               
            </td>
          </tr>)
     }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Order;