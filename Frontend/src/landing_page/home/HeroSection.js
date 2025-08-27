import React from 'react'

function HeroSection() {
    return ( 
        <div className='container p-5'>
            <div className='row justify-content-center align-items-center' style={{ minHeight: '60vh' }}>
                <div className='col text-center'>
                    <img 
                        src='/assets/homeHero.png' 
                        alt='HomeHero'
                        style={{
                            width: '1000px',      // Adjust width as needed
                            height: 'auto',      // Maintain aspect ratio
                            objectFit: 'contain',// Contain within box
                            margin: '0 auto',    // Center horizontally
                            display: 'block'
                        }}
                        className='mb-5'
                    />
                    <h1 className='pt-3'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivates, mutual funds, ETFs, bonds, and more.</p>
                    <button className='btn btn-primary' style={{width:"20%", color:"white", padding:"10px", fontWeight:"bold"}}>Sign up for free</button>
                    {/* backgroundColor:"#387ed1" */}
                </div>
            </div>
        </div>
     );
}

export default HeroSection;