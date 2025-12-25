import React from 'react';
function OpenAccount() {
    return (
      <div className='container p-5'>
      <div className='row text-center'>  {/* in single row we have 12 clm default  ot put any content so we choose row  */}
              <h1 className='mt-5' >Open Zerodha account</h1>
              <p>Modern platforms and apps , ₹0 investment, and ₹20 intraday and F&O</p>
              <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up now</button> {/*margin:"0 auto" for button centre of window, className='p-2' increase size of button on window btnprimary chnage colour to blue and text colour change to white , fs-5 font size */}
      </div>
     </div>
      );
}

export default OpenAccount;