// src/Components/NotFound.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NotFound = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <div className="flex items-center flex-col justify-center lg:flex-row py-24 px-6 md:px-24 md:py-10 lg:py-28 gap-16 lg:gap-28">
      <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-offset="200">
        <img className="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" alt="404 Image Large" />
        <img className="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" alt="404 Image Medium" />
        <img className="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" alt="404 Image Small" />
      </div>
      <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-offset="200">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
          Looks like you've found the doorway to the great nothing
        </h1>
        <p className="py-4 text-base text-gray-800">
          The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.
        </p>
        <p className="py-2 text-base text-gray-800">
          Sorry about that! Please visit our homepage to get where you need to go.
        </p>
        <a
          href='/'
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-offset="200"
        >
          Go back to Homepage
        </a>
      </div>
      
    </div>
     <div className='overflow-y-hidden  bg-[#f6f9fc]'>
     <section id="footer">
       <div className="py-3" data-aos="fade-down" data-aos-offset="50">
         <div className="flex justify-center items-center gap-7 pb-4">
           <a href="https://www.facebook.com/profile.php?id=61556502329631&mibextid=ZbWKwL" target="_blank" rel='noreferrer' className="text-gray-900 hover:text-blue-500 text-3xl ease-in duration-200"><i className="fab fa-facebook-f"></i></a>
           <a href="https://x.com/Vitalstats2023?t=ISd8bI71gqFGIULL4_tDsw&s=08" target="_blank" rel='noreferrer' className="text-gray-900 hover:text-black text-3xl ease-in duration-200"><i class="fa-brands fa-square-x-twitter"></i></a>
           <a href="https://www.linkedin.com/company/vital-stats2023/" target="_blank" rel='noreferrer' className="text-gray-900 hover:text-blue-700 text-3xl ease-in duration-200"><i className="fab fa-linkedin"></i></a>
           <a href="https://www.instagram.com/vitalstats2023?igsh=MTNyNHZudzBidXE1Nw==" rel='noreferrer' target="_blank" className="text-gray-900 hover:text-pink-500 text-3xl ease-in duration-200"><i className="fab fa-instagram"></i></a>
         </div>
         <div className='border-t-2 mt-3 border-color-blue mx-5'></div>
         <div className="flex justify-center py-5  mx-auto mt-3 " >
           <p className="text-sm md:text-xl" >© 2024 Vital Health Solutions Pvt Ltd All rights reserved</p>
         </div>
       </div>
     </section>
   </div>
 </>
  );
};

export default NotFound;
