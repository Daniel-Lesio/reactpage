import React from 'react'

export default function Logo() {
    return (
        <div className='logo' style={{display : 'flex' ,alignItems : 'center'  }}>
                <h1>MyApp</h1>
                <svg viewBox="0 0 500 500" width="50px" height='50px'   id="blobSvg">
                  <path id="blob" d="M419,348Q363,446,266,418.5Q169,391,96.5,320.5Q24,250,96.5,179.5Q169,109,266,81.5Q363,54,419,152Q475,250,419,348Z" fill="#d1d8e0"></path>
                </svg>
                

        </div>

    )
}
