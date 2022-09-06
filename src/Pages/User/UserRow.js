import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index, updateUser}) => {
    const {email, role} = user;
    
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to make admin')
            }
            return res.json()})
        .then( data => {
            if(data.modifiedCount > 0){
            updateUser(data);
            toast.success('make a admin successfully')
            }
            
        })
    }
    return (
        <tr >
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="bg-transparent hover:bg-secondary font-semibold hover:text-black py-2 px-4 border border-secondary hover:border-transparent rounded">
  Make Admin
</button>}</td>    
        </tr>
    );
};

export default UserRow;