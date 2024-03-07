import React from 'react'
import './PageLoader.css'

function PageLoader() {
    return (
        <div className='loader'>
            <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
            </div>
        </div>
    )
}

export default PageLoader
