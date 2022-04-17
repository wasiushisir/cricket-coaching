import React from 'react';
import img from '../../img/gggoogle (1).png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const Googlesign = () => {
    const navigate=useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user)
    {
        navigate('/home');

    }
    return (

        <div>
            <div className='d-flex align-items-center mt-3'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>

                </div>

                <p className='px-2 pt-2'>or</p>

                <div style={{ height: '1px' }} className='w-50 bg-primary'>

                </div>



            </div>

            <button onClick={() => signInWithGoogle()} className='w-50 d-block mx-auto  btn btn-primary mt-3'><img className='px-2' style={{ height: '35px' }} src={img} alt="" />
                Google SignIn</button>
            <p className='text-danger text-center'> {error?.message}</p>

        </div>
    );
};

export default Googlesign;