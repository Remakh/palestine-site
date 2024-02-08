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
    <div className='flex justify-center w-full'>
        <div className='flex flex-col'>
           
            <div className='flex my-10 shadow-lg bg-white'>
                <IconContext.Provider value={{ className: "socials-icon", size: 50}}>
                    <a href='https://instagram.com/manchesterfop?igshid=MzMyNGUyNmU2YQ==' target='_blank'>
                        <div id='insta' className='socials' >
                            <FaInstagram className='socials-icon'/>
                        </div>
                    </a>
              
                    <a href='https://podcasters.spotify.com/pod/show/manchesterfop' target='_blank'>
                        <div id='spotify' className='socials'>
                            <FaSpotify className='socials-icon'/>
                        </div>
                    </a>
                    <a href='https://www.youtube.com/@manchesterfop?sub_confirmation=1' target='_blank'>
                        <div id='youtube' className='socials'>
                            <FaYoutube className='socials-icon'/>
                        </div>
                    </a>
                    <a href='https://www.facebook.com/manchesterfop/' target='_blank'>
                        <div id='facebook' className='socials'>
                            <FaFacebook className='socials-icon'/>
                        </div>
                    </a>
                    <a href='https://twitter.com/manchesterfop' target='_blank'>
                        <div id='twitter' className='socials border-r-0'>
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