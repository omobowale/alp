import React from 'react'
import NavBar from './commons/NavBar/NavBar'

function Layout(props) {
  return (
    <div>
        <div>
            <NavBar />
        </div>
        <div className='mt-8'>

        </div>
        <div className='w-4/5 m-auto'>
            {props.children}
        </div>
    </div>
  )
}

export default Layout