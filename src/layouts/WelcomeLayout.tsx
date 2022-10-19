import * as React from 'react'
import { Outlet } from 'react-router-dom'
export const WelcomeLayout: React.FC = () => {
  return <div><Outlet/></div>
}
