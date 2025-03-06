import React from 'react'
import { useState } from 'react'
import Togglmenue from './Tooglemenue/page'
const ToggleNav = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (<>
    <div className='flex justify-between bg-black items-center pl-4 pr-4'>
       <Togglmenue/>
<img className='h-10 lg:h-15 md:h-15 '
          src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"/>

<img className='h-6 lg:h-8 md:h-8' src='https://i.imgur.com/i9BXIUb.png'/>


    </div></>
    
  )
}

export default ToggleNav