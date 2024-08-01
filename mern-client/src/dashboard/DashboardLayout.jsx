import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div className="flex flex-col md:flex-row">
    <SideBar className="md:w-1/4 w-full" /> {/* Adjust width as necessary */}
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  </div>
  )
}

export default DashboardLayout