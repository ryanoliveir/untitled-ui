import { ComponentProps } from 'react'

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <>
      <textarea
        {...props}
        className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20"
      />
      <span className="text-sm font-normal text-zinc-500">
        275 characters left
      </span>
    </>
  )
}
