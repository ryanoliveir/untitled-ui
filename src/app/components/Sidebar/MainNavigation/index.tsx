import {
  Home,
  BarChart2,
  Layers,
  SquareCheckBig,
  Flag,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'

const menuItems = [
  {
    title: 'Home',
    icon: Home,
  },
  {
    title: 'Dashboard',
    icon: BarChart2,
  },
  {
    title: 'Projects',
    icon: Layers,
  },
  {
    title: 'Tasks',
    icon: SquareCheckBig,
  },
  {
    title: 'Reporting',
    icon: Flag,
  },
  {
    title: 'Users',
    icon: Users,
  },
]

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      {menuItems.map((item) => {
        return <NavItem key={item.title} title={item.title} icon={item.icon} />
      })}
    </nav>
  )
}
