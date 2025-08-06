import React from 'react'

function Pricing() {
    return ( 
        <div className='container mt-4'>
            <div className='row pt-4'>
                <div className='col-lg-6'>
                    <h3>Unbeatable Pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a className='m-3' href="/pricing" style={{textDecoration:'none', color:"#387ed1"}}>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                {/* images div */}
                <div className='col-lg-6 flex flex-col'>
                    <div className='col-lg-2 col-md-3' style={{width:'150px', height:'150px'}}>
                    <img 
                    src='/assets/pricing0.svg' 
                    alt='princing0'
                    style={{width: "100px", height:"100px"}}
                    ></img>
                    <p>Free account opening</p>
                </div>
                <div className='col-lg-2 col-md-3'>
                    <img 
                    src='/assets/pricing0.svg' 
                    alt='pricing0'
                    style={{width: "100px", height:"100px"}}
                    ></img>
                    <p>Free Equity delivery and direct mutual funds</p>
                </div>
                <div className='col-lg-2 col-md-3'>
                    <img 
                    src='/assets/pricing20.svg' 
                    alt='pricing20'
                    style={{width: "100px", height:"100px"}}
                    ></img>
                    <p>IntraDay and F&O</p>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;