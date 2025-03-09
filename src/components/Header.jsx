import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 p-3'>
         <div className="log">
            <img className='w-[300px]' src={logo} alt="" />
            </div> 
            <h2 className='text-gray-400 text-lg'>Journalism Without Fear or Favour</h2>
            <p className='text-gray-400 text-lg'>{moment().format("dddd, MMMM Do YYYY,")}</p>
        </div>
    );
};

export default Header;