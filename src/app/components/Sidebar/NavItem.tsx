import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavProps) {
  return (
    <a
      className="group flex items-center gap-3 rounded px-3 py-2 text-zinc-500 hover:bg-violet-50"
      href=""
    >
      <Icon className="h-6 w-6" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 group-hover:text-violet-400" />
    </a>
  )
}
