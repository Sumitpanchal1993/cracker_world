import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
     <footer>
       <div className='contact'>
        Contact: <br/>
        Sumit Panchal<br/>
        Mobile : 8349102532<br/>
       </div>
       <div className='address'>
        Address: <br/>
        28 Vivekanand Colony
        Moti Bunglaw Dewas
        Madhya Pradesh
       </div>
       <div className='social'>
        Follow Us on:
        <a href="">Facebook</a>
        <a href="https://www.instagram.com/charbhuja_fireworks/" target='_blank'>Instagram</a>
        <a href="">Youtube</a>
       </div>
       <div className='lice'>
        License No:<br/>
        012346789<br/>
        123453688<br/>
       </div>
     </footer>
       <div className="copyright">
        All rights reserved <br />
        Site Designed, Developed & Maintened By: Sumit Panchal
       </div>
    </>
  )
}

export default Footer
