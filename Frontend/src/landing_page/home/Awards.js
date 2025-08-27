import React from 'react'
//Trust Section
function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <h3 className='pb-4'>Trust with confidence</h3>
                    {/* Messages are from here */}
                    <h5 className='pt-4'>Customer-first always</h5>
                    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h5 className='mt-4 pt-4'>No spam or gimmicks</h5>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h5 className='pt-4'>The Zerodha universe</h5>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h5 className='pt-4'>Do better with money</h5>
                    <p>With initiatives like <a href="https://support.zerodha.com/category/trading-and-markets/kite-features/nudges/articles/what-is-nudge" target="_blank" style={{textDecoration:'none', color:"#387ed1", fontWeight:"bold"}}>Nudge</a> and <a href="https://support.zerodha.com/category/console/profile/killswitch/articles/what-is-the-kill-switch" target="_blank" style={{textDecoration:'none', color:"#387ed1", fontWeight:"bold"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <img 
                    src='/assets/ecosystem.png' 
                    alt='ecosystem'
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    ></img>
                    <p className='text-center'>
                        <a className='m-3' href="/products" style={{textDecoration:'none', color:"#387ed1"}}>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                        <a className='m-3' href='https://kite-demo.zerodha.com/dashboard' style={{textDecoration:'none', color:"#387ed1"}}>Try kite demo<i class="fa-solid fa-arrow-right"></i></a>
                    </p>
                </div>
            </div>
            {/*press Logo*/}
            <div className='row'>
                <div className='col text-center pt-4 mt-4'>
                    <img src='/assets/pressLogos.png' alt='press-Logo'></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;