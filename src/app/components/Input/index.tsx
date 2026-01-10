import { ComponentProps } from 'react'

export interface InputProps {
  className: string
}

interface InputPrefixProps extends ComponentProps<'div'> {}

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

interface InputControlProps extends ComponentProps<'input'> {}

export function Control(props: InputControlProps) {
  return (
    <input
      {...props}
      className="text-zinc-90 hover flex-1 border-0 bg-transparent p-0 placeholder-zinc-600"
    />
  )
}

interface InputRootProps extends ComponentProps<'div'> {}

export function Root(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
