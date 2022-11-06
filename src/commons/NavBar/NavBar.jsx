import React from 'react'
import "./NavBar.css"

function NavBar() {
    return (
        <div className='nav flex gap-5 py-3 justify-center' style={{ fontWeight: "500" }}>
            <div>Alphalex </div>
            <div>Home</div>
            <div>Start a Business</div>
            <div>Templates</div>
            <div>The Hub</div>
            <div>About Us</div>
            <div>Contact Us</div>
        </div>
    )
}

export default NavBar