import { NavLink } from 'react-router-dom'
import c from 'classnames'
import s from './Welcome1.module.scss'
export const Welcome1: React.FC = () => {
  return <div className={c(s.wrapper, s.blue)}>1<NavLink to="/welcome/2">下一页</NavLink></div>
}
