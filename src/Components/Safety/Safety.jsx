import React, { useContext } from 'react'
import './safety.css'
import DataContext from '../../Context/Context';
import Overview from './Overview';
import Cutomers from './Cutomers';
import Captains from './Captains';

const Safety = () => {
  const navs = ["Overview","Customers","Captains"];
  const {safetyNav,setSafetyNav} = useContext(DataContext)

  return (
    <div className='safety-container'>
        <div className="nav-containers px-2 px-md-4">
          {navs.map((nav,index)=>(
            <p className='safety-nav' key={index} onClick={()=>setSafetyNav(nav)}>{nav}</p>
          ))}
        </div>
      <div className='main'>
      {
            (safetyNav === "Overview") ? (<Overview />) : (safetyNav === "Customers") ? (<Cutomers />) : (<Captains />)
           }
      </div>
      
    </div>
  )
}

export default Safety