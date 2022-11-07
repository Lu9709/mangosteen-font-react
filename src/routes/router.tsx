import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayouts'
import { NotFoundPage } from '../pages/NotFoundPage'
import { WelcomeRoutes } from './WelcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <div>Home</div>
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      WelcomeRoutes
    ]
  }
])
