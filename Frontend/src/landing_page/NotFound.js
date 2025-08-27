import React from 'react'

function NotFound() {
    return ( 
        <div className='container mt-4 pt-4'>
            <div className='row mt-4 pt-4'>
                <div className='col text-center mt-4 pt-4'>
                    <h3 className='mb-4'>404 Not Found</h3>
                    <p className='mt-4 mb-4 pb-4'>
                        Sorry the page you are looking for does not exist.
                    </p>
                    <button onClick={() => window.location.href = '/'} className='btn btn-primary' style={{width:"20%", color:"white", padding:"10px", fontWeight:"bold"}}>Go Home</button>
                </div>
            </div>
        </div>
     );
}

export default NotFound;