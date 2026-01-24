'use client'
import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-4">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            type={file.type}
            state="progress"
          />
        )
      })}
    </div>
  )
}
