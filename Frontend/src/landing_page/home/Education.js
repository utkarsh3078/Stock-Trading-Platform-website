import React from 'react'

function Education() {
    return ( 
        <div className='container mt-4 pt-4'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img 
                    src='/assets/education.svg'
                    alt='education'
                    ></img>
                </div>
                <div className='col-lg-6'>
                    <h3 className='mt-4'>Free and open market education</h3>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='https://zerodha.com/varsity/' style={{textDecoration:"none", color:"#387ed1"}}>Varsity<i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='https://tradingqna.com/' style={{textDecoration:"none", color:"#387ed1"}}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;