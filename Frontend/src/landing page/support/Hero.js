import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4 className='fs-3'>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>

            <div className='row p-5 m-3'> {/* mx-5 left & right margin 5 , my-5 top and bottom margin*/}
            <div className='col-6 p-5 '>
                <h1 className="fs-3">Search for an answer or browser help topics to create a ticket</h1>
                <input placeholder='Eg. how do I activate F&O' className='mb-3'/><br/>
                <a href='' className='ml-4'>Track account opening</a>
                <a href='' className='ml-4'>  Track segment activation</a>
                <a href='' className='ml-4'>  Intraday margins</a>
                <a href='' className='ml-4'>  Kite user manual</a>
           </div>
            <div className='col-6 p-5'>
            <h1 className="fs-3">Featured</h1>
            <ol>
                <li><a href=''style={{lineHeight:"2"}}>Current Takeovers and Delisting- January 2024</a></li>
                <li>  <a href='' style={{lineHeight:"2"}}>Latest Industry leverages- MIS & CO</a></li>
            </ol>
            </div>
            </div>
        </section>
     );
}

export default Hero; 