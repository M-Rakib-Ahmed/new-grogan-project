import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';

const SocialLogin = () => {
    return (
        <div className='flex flex-col gap-3'>
           <h2 className='font-semibold mb-3'>Login with</h2> 
                <button className='btn'>
                <FaGoogle className='text-3xl'></FaGoogle>
                <span className='text-lg'> Login with google</span></button>
            
            <button className='btn'>
                <FaGithub className='text-3xl'></FaGithub>
                <span className='text-lg'> login with gitgub</span></button>
        
        </div>
    );
};

export default SocialLogin;