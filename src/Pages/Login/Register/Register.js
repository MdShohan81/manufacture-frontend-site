import React, { useRef } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import { toast } from 'react-toastify';
import Loading from '../../Loading/Loading';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');

    // get navigate
    const navigate = useNavigate();
   
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      //profile update
      const  [updateProfile, updating, updateError] = useUpdateProfile(auth);

      let errorMessages;
    if(error || updateError){
        errorMessages = <div>
                            <p className='text-secondary text-sm'>{'Please put info'}</p>
                        </div>
    }
      if(user){
        navigate(from, { replace: true });
    }

    if(loading || updating){
        return <Loading></Loading>;
    }

      //get user sign value and submit
    const registerHandleSubmit = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await createUserWithEmailAndPassword( email, password);
        await updateProfile({ displayName: name });
        event.target.reset();
        toast.success('send verification mail')
        navigate('/');
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div class="card w-96 bg-base-100 text-base-content shadow-xl border border-1 border-secondary">
            <div class="card-body items-center text-center">
                <h2 class="text-center text-2xl font-semibold text-secondary mb-5 flex justify-center items-center"><MdAccountCircle className='mr-2 mt-1'/>User Register </h2>
                <form onSubmit={registerHandleSubmit}>
                {errorMessages}
                <input type="text" ref={nameRef} placeholder="Enter Name"  className="input input-bordered w-full mb-4 text-lg p-2 text-secondary border-secondary" required/>
                <input type="email" ref={emailRef} placeholder="Enter email"  className="input input-bordered w-full mb-4 text-lg p-2 text-secondary border-secondary" required/>
                <input type="password" ref={passRef} placeholder="Enter Password" className="input input-bordered w-full text-lg p-2 text-secondary border-secondary" required/>
                <button className='btn btn-secondary w-full mt-3 text-white'>Login</button>
                </form>
                <p>
                    New member? <Link to='/register' className='text-success font-semibold'>Register</Link> here
                </p>
                <div class="divider">OR</div>
                <Social></Social>
            </div>
            </div>
        </div>
    );
};

export default Register;