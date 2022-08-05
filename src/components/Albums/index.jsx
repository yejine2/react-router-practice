import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Albums() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate(-1, { replace: true })}>뒤로가기</button>
      <Outlet />
    </div>
  )
}

export default Albums
