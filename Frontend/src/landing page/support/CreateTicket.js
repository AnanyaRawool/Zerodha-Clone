import React from 'react';
function CreateTicket() {
    return ( 
      <div className='container'>
        <div className='row p-5 mt-5 mb-5'>
            <h1 className='fs-2'>To create a ticket, select a relevent topic.</h1>
       

        <div className='col-4 p-5 mt-5 mb-5' >
            <h4 className='fs-3 mb-3' ><i class="fa-solid fa-circle-plus"></i> Account Opening</h4>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Online Account Opening</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Offline Account Opening</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Partnership and HUF Account Opening</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>NRI Account Opening</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Charges at Zerodha</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Getting Scarted</a><br/>
        </div>

        <div className='col-4 p-5 mt-5 mb-5'>
            <h4 className='fs-3 mb-3'><i class="fa-solid fa-circle-notch"></i> Console</h4>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}} >Report</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Ledger</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Portfolio</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>60 day challenge</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>IPO</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Referral Program</a><br/>
        </div>

        <div className='col-4 p-5 mt-5 mb-5'>
            <h4 className='fs-3 mb-3'><i class="fa-solid fa-circle-notch"></i> Coin</h4>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Understanding Mutual Funds</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>About coin</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Buying and selling through coin</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Starting an SIP</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Managing your Portfolio</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Coin App</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Moving to Coin</a><br/>
            <a href='' style={{textDecoration:"none" , lineHeight:"2.5"}}>Goverment Securities</a><br/>
        </div>
        </div>
      </div>
     );
}

export default CreateTicket;