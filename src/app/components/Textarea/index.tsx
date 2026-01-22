import { ComponentProps } from 'react'

export interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <>
      <textarea
        {...props}
        className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      />
      <span className="text-sm font-normal text-zinc-500">
        275 characters left
      </span>
    </>
  )
}
