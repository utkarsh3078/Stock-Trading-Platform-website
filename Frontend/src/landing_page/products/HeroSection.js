import React from 'react'

function HeroSection() {
    return ( 
        <div className='container'>
            <br/><br/>
            <div className='text-center mt-4 pt-4 border-bottom'>
                <h3 style={{opacity:'0.9'}}>Zerodha Products</h3>
                <p className='mt-3 text-muted' style={{fontSize:'20px'}}>Sleek, modern, and intuitive trading platforms</p>
                <p className='mt-3 pt-3'>Check out our <a href='#' style={{textDecoration:'none', color:"#387ed1", fontWeight:'bold'}}>investment offerings<i class="fa-solid fa-arrow-right"></i></a></p>
                <br/><br/><br/><br/>
            </div>
            <br/>
        </div>
     );
}

export default HeroSection;