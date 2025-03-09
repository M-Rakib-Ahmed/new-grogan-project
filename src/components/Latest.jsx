import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
    return (
        <div className="flex justify-center items-center gap-2 bg-gray-200 p-3 rounded-md">
           <p className="bg-red-500 text-white px-3 py-1 ">Latest</p>
          <Marquee pauseOnHover={true} className="space-x-10">
               <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis itaque reprehenderit </Link>
               <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis itaque reprehenderit </Link>
               <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perspiciatis itaque reprehenderit </Link>
          </Marquee>
        </div>
    );
};

export default Latest;