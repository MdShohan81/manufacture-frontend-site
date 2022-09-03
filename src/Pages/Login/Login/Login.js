import React, { useRef } from 'react';
import Social from '../Social/Social';
import { MdAccountCircle } from "react-icons/md";
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { toast } from 'react-toastify';


const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
        console.log(user)
        navigate(from, { replace: true });
      }
      if(loading){
        return <Loading></Loading>;
      }

      const loginHandleSubmit = async event => {
        event.preventDefault();
          const email = emailRef.current.value;
          const password = passRef.current.value;
         await  signInWithEmailAndPassword(email, password);
         navigate(from, { replace: true });
         console.log(email, password);
         toast.success('Login Successfully')
  
          
      };
    return (
        <div className='h-screen flex justify-center items-center'>
            <div class="card w-96 bg-base-100 text-base-content shadow-xl border border-1 border-secondary">
            <div class="card-body items-center text-center">
                <h2 class="text-center text-2xl font-semibold text-secondary mb-5 flex justify-center items-center"><MdAccountCircle className='mr-2 mt-1'/>User Login </h2>
                <form onSubmit={loginHandleSubmit}>
                <input type="email" ref={emailRef} placeholder="email"  className="input input-bordered w-full mb-4 text-lg p-2 text-secondary border-secondary" required/>
                <input type="password" ref={passRef} placeholder="Password" className="input input-bordered w-full text-lg p-2 text-secondary border-secondary" required/>
                <button className='btn btn-secondary w-full mt-3 text-white'>Login</button>
                </form>
                <p>
                    Already member? <Link to='/register' className='text-success font-semibold'>Register</Link> here
                </p>
                <div class="divider">OR</div>
                <Social></Social>
            </div>
            </div>
        </div>
    );
};

export default Login;