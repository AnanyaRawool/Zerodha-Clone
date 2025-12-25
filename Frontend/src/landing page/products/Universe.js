import React from 'react';
function Universe(s) {
    return ( 
       
        <div className='container mt-5 '>
        <div className='row text-center'>
           <h1>The Zerodha Universe</h1>
           <p>Extend your trading and investment experience even further with our partner platforms</p>
           
            <div className='col-4  p-3 mt-5 '>
                <img src ="media/images/smallcaseLogo.png"  />
                <p className='text-small text-muted mt-3'>Thematic investment platform</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src ="media/images/streakLogo.png" style={{width:"50%"}}/>
                <p className='text-small text-muted mt-3'>Algo and stratergy platform</p>
            </div>
            <div className='col-4 p-3 mt-5'>
               <img src ="media/images/sensibullLogo.svg" style={{width:"60%"}}/>
               <p className='text-small text-muted mt-4'>Options trading platform</p>
            </div>


            <div className='col-4  p-3 mt-5'>
                <img src ="media/images/zerodhaFundhouse.png" style={{width:"60%"}}/>
                <p className='text-small text-muted mt-3'>Thematic investment platform</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src ="media/images/goldenpiLogo.png" style={{width:"60%"}}/>
                <p className='text-small text-muted mt-3'>Bound trading platform platform</p>
            </div>
            <div className='col-4 p-3 mt-5'>
               <img src ="media/images/dittoLogo.png" style={{width:"50%"}}/>
               <p className='text-small text-muted mt-3'>Insurance</p>
            </div>
            <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%", margin:"0 auto"}}>Signup now</button> {/*margin:"0 auto" for button centre of window, className='p-2' increase size of button on window btnprimary chnage colour to blue and text colour change to white , fs-5 font size */}
        </div>
       </div>


     );
}

export default Universe;