import * as React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
export const MainLayout: React.FC = () => {
  const hasRead = localStorage.getItem('hasReadWelcomes')
  return hasRead === 'yes' ? <Navigate to='/home'/> : <div><Outlet/></div>
}
