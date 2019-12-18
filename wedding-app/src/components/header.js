import React from 'react'

import { Route, Link } from 'react-router-dom';
import Photos from './photos'
import HeroPhoto from './heroPhoto';


const Header = () => {
  return (
    <div>
       <nav className='header'>
          <Link to='./main'><h3 className='nav-head'>Main</h3></Link>
        <Link to='./photos'><h3 className='nav-head'>Photos</h3></Link>
        
          <h3 className='nav-head'>Registry</h3>
      </nav>
  
      
      {/* <Route
        path='/photos' component={Photos} /> */}
      
      {/* <Route
        path='./main' component={HeroPhoto} /> */}
      


    </div>
  )
}







export default Header 