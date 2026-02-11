import React from 'react'
import NavBar from '../components/NavBar'

const PublicLayout = ({children}) => {
  return (
    <div>
      <NavBar/>
      {children}
    </div>
  )
}

export default PublicLayout