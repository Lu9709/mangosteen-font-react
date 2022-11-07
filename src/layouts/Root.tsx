import * as React from 'react'
import { Navigate } from 'react-router-dom'
export const Root: React.FC = () => {
  const hasRead = localStorage.getItem('hasReadWelcomes')
  return hasRead === 'yes' ? <Navigate to='/home'/> : <Navigate to="/welcome/1" />
}
