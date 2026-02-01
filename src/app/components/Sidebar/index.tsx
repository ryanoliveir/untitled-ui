'use client'
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
  Menu,
} from 'lucide-react'

import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

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
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
