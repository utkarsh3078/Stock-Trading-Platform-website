import React from 'react'

function OpenAccount() {
    return ( 
        <div className='container mt-4 pt-4'>
            <div className='row mt-4 pt-4'>
                <div className='col text-center mt-4 pt-4'>
                    <h3 className='mb-4'>Open a Zerodha account</h3>
                    <p className='mt-4 mb-4 pb-4'>Modern platform and apps, <i class="fa-solid fa-indian-rupee-sign"></i>0 investment, and flat <i class="fa-solid fa-indian-rupee-sign"></i>20 intraday anf F&O trades</p>
                    <button className='btn btn-primary' style={{width:"20%", color:"white", padding:"10px", fontWeight:"bold"}}>Sign up for free</button>
                </div>
            </div>
        </div>
     );
}

export default OpenAccount;