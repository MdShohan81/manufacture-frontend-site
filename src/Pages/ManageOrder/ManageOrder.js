import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
  

    useEffect(() => {
        if (admin) {
          const url = "https://tranquil-everglades-72932.herokuapp.com/allOrders";
          fetch(url, {
            method: "Get",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
        }
      }, [admin]);

    return (
        <div>
            <h3>Total Order: {orders.length}</h3>
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
        <th>Address</th>
        <th>phone</th>
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
            <td>{order.address}</td>
            <td>{order.phone}</td>
            <td><button><FiTrash2 className='ml-3 text-secondary text-xl'/></button></td>
            <td><button className='text-secondary'>pending</button></td>
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

export default ManageOrder;