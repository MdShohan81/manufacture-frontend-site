import React, {
  useEffect,
  useState
} from 'react';
import UserRow from './UserRow';




const User = () => {



    const [users, setUsers] = useState([]);
    const [update, updateUser] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/user', {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [update])


    return ( <
      div >
      <
      h1 > All user {
        users.length
      } < /h1> <
      div class = "overflow-x-auto" >
      <
      table class = "table w-full" >

      <
      thead >
      <
      tr >
      <
      th > sl < /th> <
      th > Email < /th> <
      th > Make Admin < /th> <
      /tr> <
      /thead> <
      tbody >

      {
        users.map((user, index) => < UserRow key = {
            user._id
          }
          user = {
            user
          }
          index = {
            index
          }
          updateUser = {
            updateUser
          } >
          < /UserRow>)
        }

        <
        /tbody> <
        /table> <
        /div> <
        /div>
      );
    };

    export default User;