import { useLocation, useOutlet } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import type { ReactNode } from 'react'
import { useRef } from 'react'
export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation() // 获取当前地址栏的信息
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 }
  })
  return transitions((style, pathname) => {
    return <animated.div key={pathname} style={style}>
        {map.current[pathname]}
    </animated.div>
  })
}
