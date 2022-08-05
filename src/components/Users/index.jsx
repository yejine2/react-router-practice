import React from 'react'
import { Outlet } from 'react-router-dom'

function Users() {
  return (
    <div>
      <p>Users</p>
      <Outlet />
    </div>
  )
}

export default Users
