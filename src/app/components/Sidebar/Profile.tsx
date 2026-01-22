import { LogOut } from 'lucide-react'

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
        <span className="tex-zinc-700 text-sm font-semibold">
          Ryan Oliveira
        </span>
        <span className="tex-zinc-500 truncate text-sm">
          ryanoliviera@email.com
        </span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
