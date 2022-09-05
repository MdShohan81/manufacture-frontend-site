import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorMessages;
    
    //token 
    const [token] = useToken(user)

    if(token){
        navigate(from, { replace: true });
    }
    if(loading){
        return <Loading></Loading>
    }
    if(error){
        errorMessages = <div>
        <p className='text-secondary'>{'something gone wrong'}</p>
    </div>
    }
    return (
            <div>
            <div className='w-full'>
            {errorMessages}
            <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-md lg:px-12 btn-secondary"><FaGoogle className='mr-4 text-2xl'/>Continue With Google</button>
            </div>
            </div>
    );
};

export default Social;