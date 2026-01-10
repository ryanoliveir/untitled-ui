import { Logo } from './Logo'
import {
  Home,
  BarChart2,
  Layers,
  SquareCheckBig,
  Flag,
  Users,
  LifeBuoy,
  Settings,
  Search,
} from 'lucide-react'

import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'

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

const bottomItems = [
  {
    title: 'Suport',
    icon: LifeBuoy,
  },
  {
    title: 'Settings',
    icon: Settings,
  },
]

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <nav className="space-y-0.5">
        {menuItems.map((item) => {
          return (
            <NavItem key={item.title} title={item.title} icon={item.icon} />
          )
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          {bottomItems.map((item) => {
            return (
              <NavItem key={item.title} title={item.title} icon={item.icon} />
            )
          })}
        </nav>
        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200"></div>
        <Profile />
      </div>
    </aside>
  )
}
