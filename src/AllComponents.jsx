import React, { useState, useEffect } from 'react'
import churchLogo from './assets/Logo.jpg'
import publicityImg from './assets/Publicity.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import youtube from './assets/youtube.png'
import { CgMoreVertical } from "react-icons/cg";

const AllComponents = () => {
  const [isPreLoaderVisible, setIsPreLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreLoaderVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {/* Pre-loader */}
    <div className='relative h-svh font-poppins'>
      {isPreLoaderVisible ? (
        <div className='h-svh flex items-center justify-center flex-col'>
          <img loading='lazy' src={churchLogo} alt='logo' className='-mt-[120px] w-[200px]'/>
          <p className='text-[19px] font-medium -mt-[9px]'>Our Mission, Is Missions!</p>
          <div className="absolute bottom-[140px] left-0 w-full flex justify-center">
            <span className="loader"></span>
          </div>
          <div className='absolute bottom-[30px] w-full flex items-center flex-col'>
            <img loading='lazy' src={publicityImg} alt='Publicity image' className='w-[50px]' />
            <p className='text-[10px] font-medium'>Developed by AGCM Publicity</p>
          </div>
        </div>
      ) : (
        <div className="h-svh font-poppins bg- w-full bg-cover bg-center bg-background-image">
          <img loading='lazy' src={churchLogo} alt='logo' className='w-[100px] mx-auto mt-2'/>
          <p className='text-center font-medium text-[10px] -mt-2'>Our Missions, Is Missions!</p>
          <p className='text-center font-normal text-[15px] mb-4 mt-5'>Welcome to the official link tree of AGCM KNUST #spreadtheword</p>
          <div className='w-full flex items-center flex-col mt-10'>
            <a href='https://www.instagram.com/agcmknust?igsh=Y244cjIyMGVpam5r' className='bg-black w-[90%] py-2 px-3 rounded-xl flex items-center justify-between'>
              <div>
                <img loading='lazy' src={instagram} alt='ig image' className='w-[65px] inline'/>
                <div className='inline-block align-middle ml-2'>
                  <p className='text-white'>Instagram</p>
                  <p className='text-white text-[12px]'>@agcmknust</p>
                </div>
              </div>
              <div>
                <CgMoreVertical className='text-white' />
              </div>
            </a>

            <a href='https://x.com/agcmKNUST' className='bg-black w-[90%] py-2 px-3 rounded-xl flex items-center justify-between mt-3'>
              <div>
                <img loading='lazy' src={twitter} alt='x image' className='w-[65px] inline-block'/>
                <div className='inline-block align-middle ml-2'>
                  <p className='text-white'>X</p>
                  <p className='text-white text-[12px]'>@agcmknust</p>
                </div>
              </div>
              <div>
                <CgMoreVertical className='text-white' />
              </div>
            </a>

            <a href='https://www.facebook.com/agcmKNUST' className='bg-black w-[90%] py-2 px-3 rounded-xl flex items-center justify-between mt-3'>
              <div>
                <img loading='lazy' src={facebook} alt='facebook image' className='w-[65px] inline-block'/>
                <div className='inline-block align-middle ml-2'>
                  <p className='text-white'>Facebook</p>
                  <p className='text-white text-[12px]'>@agcmknust</p>
                </div>
              </div>
              <div>
                <CgMoreVertical className='text-white' />
              </div>
            </a>

            <a href='https://youtube.com/@agcmknustgh?si=rRen7OA2V26E4qqf' className='bg-black w-[90%] py-2 px-3 rounded-xl flex items-center justify-between mt-3'>
              <div>
                <img loading='lazy' src={youtube} alt='youtube image' className='w-[65px] inline-block'/>
                <div className='inline-block align-middle ml-2'>
                  <p className='text-white'>YouTube</p>
                  <p className='text-white text-[12px]'>@agcmknust</p>
                </div>
              </div>
              <div>
                <CgMoreVertical className='text-white' />
              </div>
            </a>
          </div>
          <div className='mt-10 bottom-[30px] w-full flex items-center flex-col'>
            <img loading='lazy' src={publicityImg} alt='Publicity image' className='w-[50px]' />
            <p className='text-[10px] font-medium'>Developed by AGCM Publicity</p>
          </div>
        </div>
      )}
    </div>
      {/* Main content section ends */}
    </>
  
    
  )
}

export default AllComponents