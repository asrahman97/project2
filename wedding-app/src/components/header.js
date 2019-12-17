import React from 'react'

import { Route, Link } from 'react-router-dom';
import Photos from './photos'


const Header = () => {
  return (
    <div>
       <nav className='header'>
          <h3 className='nav-head'>RSVP</h3>
        <Link to='./photos'><h3 className='nav-head'>Photos</h3></Link>
        
          <h3 className='nav-head'>Registry</h3>
      </nav>
  
      
      <Route
        path='/photos' component={Photos} />

    </div>
  )
}







export default Header 