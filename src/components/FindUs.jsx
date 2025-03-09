import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from "react-icons/fa6";


const FindUs = () => {
    return (
        <div>
          <h2 className=" text-xl font-bold">Find Us on</h2>
           <div className='flex flex-col gap-3'>
                     <h2 className='font-semibold mb-3'>Login with</h2> 
                          <button className='btn'>
                          <FaFacebook className='text-3xl'></FaFacebook>
                          <span className='text-lg'> Login with google</span></button>
                      
                      <button className='btn'>
                          <FaTwitter className='text-3xl'></FaTwitter>
                          <span className='text-lg'> login with gitgub</span></button>
                      <button className='btn'>
                          <FaInstagram className='text-3xl'></FaInstagram>
                          <span className='text-lg'> login with gitgub</span></button>
                  
                  </div> 
        </div>
    );
};

export default FindUs;