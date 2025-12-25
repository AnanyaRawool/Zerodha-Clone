import React from 'react';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></link>
function Signup() {
    return ( 
        <>
        <div className='container'>

         {/* hero section    */}
        <h4 className='mt-5  text-center'>Open a free demat and trading account online</h4>
        <p className='pd-5 mb-5 text-center'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p> 
       
        <div className='row p-5 mt-5 mb-5'>
            <div className='col-6'>
            <img src='media/images/signup.png' style={{width:"80%"}}/>
            </div>
            <div className='col-6'>
                
                <h3>Signup now</h3>
                <p>Or track your existing application</p>

                {/* calling section */}
                <div class="input-group flex-nowrap mb-4">
                <span class="input-group-text" id="addon-wrapping" >+91</span>
                <input type="text" class="form-control text-muted" placeholder="Enter your mobile number" aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>

                <button className='p-2 btn btn-primary fs-5 mb-3'  style={{width:"20%", margin:"0 auto"}}>Get OTP</button>
                <p className='fs-7'>By proceeding, you agree to the Zerodha terms & privacy policy.</p>
                <hr/>
                <p className='fs-7'>Looking to open NRI account?<a>click here</a></p>
            </div>
        </div>  

            
              {/* investment options  */}
            <div className='row'>
            <h4 className='mt-5 mb-5 text-center'>Investment options with Zerodha demat account</h4>
                <div className='col-3'>
                <img src='media/images/stocks.png' style={{width:"70%"}}/>
                </div>
                <div className='col-3'>
                    <h4>Stocks</h4>
                    <p>Invest in all exchange-listed securities</p>
                </div>
                <div className='col-3'>
                <img src='media/images/mutualFunds.png' style={{width:"70%"}}/>
                </div>
                <div className='col-3'>
                    <h4>Mutual funds</h4>
                    <p>Invest in commission-free direct mutual funds</p>
                    </div>
            </div>
            <div className='row mb-5'>
                <div className='col-3'>
                <img src='media/images/IPO.png' style={{width:"70%"}}/>
                </div>
                <div className='col-3'>
                    <h4>IPO</h4>
                    <p>Apply to the latest IPOs instantly via UPI</p>
                </div>
                <div className='col-3'>
                <img src='media/images/futures&options.png' style={{width:"70%"}}/>
                </div>
                <div className='col-3'>
                    <h4>Futures & options</h4>
                    <p>Hedge and mitigate market risk through simplified F&O trading</p>
                    </div>
                <button className='p-2 btn btn-primary fs-5 mb-3'  style={{width:"20%", margin:"0 auto"}}>Explore Investments</button>
            </div>
  

         {/* demat account */}
        <div className='row mb-5'>
        <h4 className='mt-5 mb-5 text-center'>Investment options with Zerodha demat account</h4>
            <div className='col-6'>
            <img src='media/images/dematAcc.png' style={{width:"70%"}}/>
            </div>
            <div className='col-6 mt-5'>
                <h5>Enter the requested details</h5>
                <hr/>
                <h5>Complete e-sign & verification</h5>
                <hr/>
                <h5>Start investing!</h5>
            </div>
        </div>
           

        {/* benifits  */}
         <div className='row mt-5'>
            <div className='col-6'>
            <img src='media/images/benefits.png' style={{width:"70%"}}/>
            <h4 className='mt-5 mb-5 text-center'>Benefits of opening a Zerodha demat account</h4>
            </div>
            <div className='col-6'>
               <h5>Unbeatable pricing</h5>
                <p className='text-muted'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p><br/>
                <h5>Best investing experience</h5>
                <p className='text-muted'>Simple and intuitive trading platform with an easy-to-understand user interface.</p><br/>
                <h5>No spam or gimmicks</h5>
                <p className='text-muted'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p><br/>
                <h5>The Zerodha universe</h5>
                <p className='text-muted'>More than just an app — gain free access to the entire ecosystem of our partner products.</p><br/>
            </div>
            </div>  
            
            {/* explore different account type */}
            <div className='row mt-5'>
            <h4 className='mt-5 mb-5 text-center'>Explore different account types</h4>
                <div className='col-4'>
                <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                <h5 class="card-title">Individual Account</h5>
                <p class="card-text text-muted">Invest in equity, mutual funds and derivatives</p>
               </div>
                </div>
                </div>
                <div className='col-4'>
                <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                <h5 class="card-title">HUF Account</h5>
                <p class="card-text text-muted">Make tax-efficient investments for yuor family.</p>
               </div>
                </div>
                </div>
                <div className='col-4'>
                <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                <h5 class="card-title">NRI Account</h5>
                <p class="card-text text-muted">Invest in equity, mutual funds, debentures, and more.</p>
               </div>
                </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-4'>
                <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                <h5 class="card-title">Minor Account</h5>
                <p class="card-text text-muted">Teach your little ones about money & invest for their future with them</p>
               </div>
                </div>
                </div>
                <div className='col-4'>
                <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                <h5 class="card-title">Coporate/ LLP/ Partnership</h5>
                <p class="card-text text-muted">Manage your business surplus and investments easily</p>
               </div>
                </div>
                </div>
                <div className='col-4'></div>
            </div>


            {/* FAQ */}
            <h4 className='mt-5 mb-4 text-start'>FAQ</h4>
            <hr/>
            <div class="btn-group">
            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
            What is a Zerodha account?
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
           <li><button class="dropdown-item text-muted" type="button">A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.</button></li> </ul>
           </div>
           <hr/>
            <div class="btn-group">
            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
            What documents are required to open a demat account?
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
           <li><button class="dropdown-item text-muted" type="button">The following documents are required to open a Zerodha account online:</button></li> 
           <li><button class="dropdown-item text-muted" type="button">PAN number</button></li> 
           <li><button class="dropdown-item text-muted" type="button">Aadhaar Card (Linked with a phone number for OTP verification)</button></li> 
           <li><button class="dropdown-item text-muted" type="button">Cancelled cheque or bank account statement (To link your bank account)</button></li> 
           <li><button class="dropdown-item text-muted" type="button">Income proof (Required only if you wish to trade in Futures & options)</button></li> 
           </ul>
           </div>
           <hr/>
            <div class="btn-group">
            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
            Is Zerodha account opening free?
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
           <li><button class="dropdown-item text-muted" type="button">Yes, It is completely free.</button></li> </ul>
           </div>
           <hr/>
            <div class="btn-group">
            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
            Are there any maintenance charges for a demat account?
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
           <li><button class="dropdown-item text-muted" type="button">The account maintaince charges is appliacable based on the account type.</button></li> 
           <li><button class="dropdown-item text-muted" type="button">For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.</button></li> 
           <li><button class="dropdown-item text-muted" type="button">For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.</button></li> 
           </ul>
           </div>
           <hr/>
            <div class="btn-group">
            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
            Can I open a demat account without a bank account?
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
           <li><button class="dropdown-item text-muted" type="button">To open a demat account, you must have a bank account in your name.</button></li> 
           <li><button class="dropdown-item text-muted" type="button">If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a</button></li> 
           <li><button class="dropdown-item text-muted" type="button">cancelled cheque or a bank statement to link your bank account to Zerodha.</button></li> 
           </ul>
           </div>


            {/* open an account  */}
            <div className='row text-center mt-5'>  {/* in single row we have 12 clm default  ot put any content so we choose row  */}
              <h1 className='mt-5' >Open Zerodha account</h1>
              <p>Modern platforms and apps , ₹0 investment, and ₹20 intraday and F&O</p>
              <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up now</button> {/*margin:"0 auto" for button centre of window, className='p-2' increase size of button on window btnprimary chnage colour to blue and text colour change to white , fs-5 font size */}
            </div>


        </div>
        </>
    );
}

export default Signup;