import React from 'react'; // imr
function Hero() { //ffc
    return ( 
       <div className='container p-5'>
        <div className='row text-center'>  {/* in single row we have 12 clm default  ot put any content so we choose row  */}
               <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>  {/*margin bottom 5% mb-5, margin top mt */}
                <h1 className='mt-5' >Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup now</button> {/*margin:"0 auto" for button centre of window, className='p-2' increase size of button on window btnprimary chnage colour to blue and text colour change to white , fs-5 font size */}
        </div>
       </div>
     );
}

export default Hero;
