import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { IconContext } from "react-icons";

const SocialsBox = () => {
  return (
    <div className='flex justify-center w-full  py-5 '>
        <div className='flex flex-col text-center'>
            <h2 className='text-black font-semibold text-font '>#ManchesterFOP </h2>
            <div className='flex md:flex-row flex-col my-10 shadow-lg bg-white items-center '>
                <IconContext.Provider value={{ className: "socials-icon", size: 50}}>
                    <a href='https://instagram.com/manchesterfop?igshid=MzMyNGUyNmU2YQ==' target='_blank' className='w-full '>
                        <div id='insta' className='socials hover:bg-red-500 border-l-0' >
                            <FaInstagram className='socials-icon '/>
                        </div>
                    </a>
              
                    <a href='https://podcasters.spotify.com/pod/show/manchesterfop' target='_blank' className='w-full '>
                        <div id='spotify' className='socials hover:bg-green-500'>
                            <FaSpotify className='socials-icon'/>
                        </div>
                    </a>
                    <a href='https://www.youtube.com/@manchesterfop?sub_confirmation=1' target='_blank' className='w-full '>
                        <div id='youtube' className='socials hover:bg-black hover:text-white'>
                            <FaYoutube className='socials-icon'/>
                        </div>
                    </a>
                    <a href='https://www.facebook.com/manchesterfop/' target='_blank' className='w-full '>
                        <div id='facebook' className='socials hover:bg-green-500'>
                            <FaFacebook className='socials-icon'/>
                        </div>
                    </a>
                    <a href='https://twitter.com/manchesterfop' target='_blank' className='w-full '>
                        <div id='twitter' className='socials border-r-0 hover:bg-red-500'>
                            <FaTwitter className='socials-icon'/>
                        </div>
                    </a>
                </IconContext.Provider>
            </div>
        </div>
    </div>
  )
}

export default SocialsBox
