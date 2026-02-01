import { LogOut } from 'lucide-react'
import { Button } from '../Button'

/* eslint-disable @next/next/no-img-element */
export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/ryanoliveir.png"
        className="h-10 w-10 rounded-full"
        alt="profile"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Ryan Oliveira
        </span>
        <span className="tex-zinc-500 truncate text-sm dark:text-zinc-400">
          ryanoliviera@email.com
        </span>
      </div>

      <Button variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
