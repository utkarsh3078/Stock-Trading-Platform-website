import React from 'react'

function Footer() {
    return ( 
        <footer style={{backgroundColor:'rgb(240,240,240)'}}>
        <div className='container mt-4 pt-3 border-top'>
            <div className='row mt-4 pt-3'>
                <div className='col-3'>
                    <div className='footer-logo'>
                        <img src='/assets/logo.svg' alt='logo' style={{width:'50%'}}></img>
                    </div>
                    <p className='mt-3'>© 2010 - 2025, Zerodha Broking Ltd.</p>
                    <p>All rights reserved</p>
                    <ul>
                        <li>
                            {/* images of socoial media platforms */}
                        </li>
                    </ul>
                </div>
                <div className='col-9'>
                    <div className='row'>
                        <div className='col-3'>
                            <h5>Account</h5>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Open demat account</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Minor demat account</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>NRI demat account</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Commodity</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Dematerialisation</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Fund Transfer</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>MTF</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Referal Progarm</p></a>
                        </div>
                        <div className='col-3'>
                            <h5>Support</h5>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Contact us</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Support Portal</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>How to file a complaint?</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Sataus of your complaint</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Bulletin</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Circular</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Z-long blog</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Downloads</p></a>
                        </div>
                        <div className='col-3'>
                            <h5>Company</h5>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>About</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Philosophy</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Press & media</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Careers</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Zerodha Cares (CSR)</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Zerodha.tech</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Open Source</p></a>
                        </div>
                        <div className='col-3'>
                            <h5>Quick Links</h5>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Upcoming IPO</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Bokerage charges</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Market holidays</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Economic calender</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Calculator</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Markets</p></a>
                            <a href='#' style={{textDecoration:'none', color:"black", opacity:'0.5'}}><p>Sectors</p></a>
                        </div>
                    </div>
                </div>
                <div className='mt-3 text-muted' style={{fontSize:'13px'}}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                    <div class='footer-graveyard-links text-center'>
                    <ul>
                        <li  style={{display:"inline-block", marginRight:"21px"}}><a style={{textDecoration:"none", color:'black', opacity:'0.5'}} rel='nofollow' href='#'>NSE</a></li>
                        <li  style={{display:"inline-block", marginRight:"21px"}}><a style={{textDecoration:"none", color:'black', opacity:'0.5'}} rel='nofollow' href='#'>BSE</a></li>
                        <li style={{display:"inline-block", marginRight:"21px"}}><a style={{textDecoration:"none", color:'black', opacity:'0.5'}} rel='nofollow' href='#'>Terms & conditions</a></li>
                        <li style={{display:"inline-block", marginRight:"21px"}}><a style={{textDecoration:"none", color:'black', opacity:'0.5'}} rel='nofollow' href='#'>MCX</a></li>
                        <li style={{display:"inline-block", marginRight:"21px"}}><a style={{textDecoration:"none", color:'black', opacity:'0.5'}} rel='nofollow' href='#'>Policies & procedures</a></li>
                        <li style={{display:"inline-block", marginRight:"21px"}}><a style={{textDecoration:"none", color:'black', opacity:'0.5'}} rel='nofollow' href='#'>Privacy & Policy</a></li>
                        <li style={{display:"inline-block", marginRight:"21px"}}><a style={{textDecoration:"none", color:'black', opacity:'0.5'}} rel='nofollow' href='#'>Disclosure</a></li>
                        <li style={{display:"inline-block", marginRight:"21px"}}><a style={{textDecoration:"none", color:'black', opacity:'0.5'}} rel='nofollow' href='#'>For investor's attention</a></li>
                        <li style={{display:"inline-block", marginRight:"21px"}}><a style={{textDecoration:"none", color:'black', opacity:'0.5'}} rel='nofollow' href='#'>Investor charter</a></li>
                    </ul>
                    {/* nofollow is for search engine not for users */}
                    </div>
                </div>
            </div>
        </div>
         </footer>
     );
}

export default Footer;