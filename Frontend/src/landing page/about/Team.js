import React from 'react';
function Team() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5 border-top'>
            <h1 className=' text-center'>People</h1>
        </div>
        <div className='row p-5 text-muted' 
        style={{lineHeight:"1.8", fontSize:"1.2em"}}>
           <div className='col-6 p-3 text-center'>
           <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%" , width:"60%"}}/> {/*for round u=image we use style={{borderRadius:"100%"} , width to reduce size of image */}
           <h4 className='mt-3'>Nithin Kamath</h4>
           <h6>Founder, CEO</h6>
           </div>
           
           <div className='col-6 p-5 text-muted'>
           <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
           <br/><br/>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
           <br/><br/>Playing basketball is his zen.
           <br/><br/>Connect on  <a href='#' style={{textDecoration:"none"}}>Homepage</a>/<a href='#' style={{textDecoration:"none"}}>TradingQnA</a>/ <a href='#' style={{textDecoration:"none"}}>Twitter</a>
           </p>
            </div>
        </div>
        
    </div>
     );
}

export default Team;