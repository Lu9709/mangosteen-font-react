import { useLocation, useOutlet } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import type { ReactNode } from 'react'
const map: Record<string, ReactNode> = {}
export const WelcomeLayout: React.FC = () => {
  const location = useLocation() // 获取当前地址栏的信息
  const outlet = useOutlet()
  map[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 5000 }
  })
  return transitions((style, pathname) => {
    return <animated.div key={pathname} style={style}>
      <div style={{ textAlign: 'center' }}>
        {map[pathname]}
      </div>
    </animated.div>
  })
}
