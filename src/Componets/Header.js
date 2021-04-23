import React from 'react';
import Typed from 'react-typed'

const Header = () => {
    return (
       <div className="header-wrapper">
           <div className="main-info">
               <h1>practice practice and practice</h1>

               <Typed 
               className='typed-text'
               strings={['Web Design','Web Devlopment',"Game Devlopment","Hosting",'Facebook Ads']}
               typeSpeed={60}
               backSpeed={50}
               loop
               
               />
               <div className="btn btn-dark contractButton"> contract me</div>
           </div>
       </div>
    );
};

export default Header;