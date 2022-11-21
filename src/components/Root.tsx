import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { useLocalStore } from '../stores/useLocalStore'
export const Root: React.FC = () => {
  const { hasReadWelcomes } = useLocalStore()
  return hasReadWelcomes ? <Navigate to='/home'/> : <Navigate to="/welcome/1" />
}
