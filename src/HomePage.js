import React from 'react'
import {Link} from 'react-router-dom'


const HomePage = (props) => {
    return (
        <div className='login'>
            <h1>Welcome!</h1>
                <h2 className='welcome'
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/login';
                        }}
                > Login</h2>
            
                <h2 className='welcome'
                        type="button"
                        onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/login';
                        }}
                > Sign Up</h2>

        </div>
    )
}

export default HomePage 