import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
        fetch(`http://localhost:5000/order?email=${user.email}`, {
          method: 'GET',
          headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => {
          console.log('res', res);
          if(res.status === 401 || res.status === 403){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/');
          }
          return res.json()})
        .then(data => {
          setOrders(data)
        })
        }
        
    }, [user]);

    const deleteOrder = id => {
      const proceed = window.confirm('Do you want to cancel order');
      if(proceed){
        const url = `http://localhost:5000/order/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data){
          console.log(data);
          const remaining = orders.filter(order => order._id !== id);
          setOrders(remaining);
          toast.success('Successfully cancel your order')
        }
      })
      }

    }

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
        <th>Total</th>
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
            <td>{order.totalPrice}</td>
            <td>{order.email}</td>
            <td><button onClick={() => deleteOrder(order._id)}><FiTrash2 className='ml-3 text-secondary text-xl'/></button></td>
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