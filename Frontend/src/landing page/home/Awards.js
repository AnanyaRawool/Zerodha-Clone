import React from 'react'; // imr
function Awards() { //ffc
    return ( 
        <div className='container mt-5 mb-5'>{/*margin bottom 5 it is upper limit ther is no mb-10 */}
            <div className='row'> {/* division is 50% as half for img and half for content for this we have to divide row halfly . as row have 12 clm we divide it to col-6 */}
            <div className='col-6 p-5'>  {/* if we write col-lg-6 col-sm-12 it mean on large screen(laptops) it should look half on small screen(mobile) it look cover whole row */}
            <img src='media/images/largestBroker.svg'/> {/*in 1st we have img*/} {/*svg is special img format which created by using code contain numbers this number are get highlighted by different colour . benifit of using this is not get pixelet as we zoom in or out */}
            </div>
            <div className='col-6 p-5 mt-3'>
                <h1>Largest stock broker in India</h1>
                <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
                <div className='row'>
                    <div className='col-6'>
                    <ul>
                    <li>
                        <p>Future and Options</p>
                    </li>
                    <li>
                        <p>Commodity derivatives</p>
                    </li>
                    <li>
                        <p>Currency derivatives</p>
                    </li>
                </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                    <li>
                        <p>Stocks & IPOs</p>
                    </li>
                    <li>
                        <p>Direct mutual funds</p>
                    </li>
                    <li>
                        <p>Bonds and Govt. Securities</p>
                    </li>
                </ul>
                    </div>
                </div>
                 <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
            </div>
            </div>
        </div>
     );
}

export default Awards;
