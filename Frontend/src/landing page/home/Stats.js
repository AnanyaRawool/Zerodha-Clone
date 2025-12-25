import React from 'react';
function Stats() {
    return (
        <div classname='container p-3'>
           <div className='row p-5'>
               <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>{/*fs-2 font size of h1 heading . mb-5 for distance btn 1st and 2nd heading*/}
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.3+ crors customers trust Zerodha with 3.5+ lakh crore of worth of equity investments.</p>

                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notication. High quality apps that you use at your pace, the way you like</p>

                <h2 className='fs-4'>The Zerodha universe</h2>
                <p className='text-muted'>Not just an app , but a whole ecosystem.Our investments in 30+ fintech startups offered you tailored services specific to yuor needs.</p>{/*className='text-muted' mesn content in */}
                <h2 className='fs-4'>Do better with your money</h2>
                <p className='text-muted'>With initiatives like Nudge and Kill switch, we dont just facilitate transactons,but actively help you do better with your money.</p>

               </div>
               <div className='col-6 p-5'>
                <img src='media/images/ecosystem.png' style={{width:"90%"}}/>
                <div className='text-center'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>{/*margin at x axies mx.p-5 padding-5*/}
                    <a href=''style= {{textDecoration:"none"}}>Try kite demo <i class="fa-solid fa-arrow-right-long"></i></a>{/* style={{textDecoration:"none" for remove underline under Try kite demo*/}
                </div>
               </div>
           </div>
        </div>

      );
}

export default Stats;