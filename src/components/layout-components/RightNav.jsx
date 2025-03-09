import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';

const RightNav = () => {
    return (
        <div>
           <h2>right nav is here</h2> 
           <SocialLogin></SocialLogin>
           <div className='mt-10'>
                <FindUs></FindUs>
           </div>
        </div>
    );
};

export default RightNav;