import { formatBytes } from '@/utils/format-bytes'
import {
  CheckCircle2,
  Film,
  Trash2,
  UploadCloud,
  File,
  Image as ImageIcon,
} from 'lucide-react'
import { Button } from '../../Button'
import { tv, VariantProps } from 'tailwind-variants'

const FileItemVariants = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: '',
  },
  variants: {
    state: {
      complete: {
        container: 'border-violet-500',
      },
      progress: {
        container: '',
      },
      error: {
        container: 'bg-error-25 border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-900',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

export interface FileItemProps extends VariantProps<typeof FileItemVariants> {
  name: string
  size: number
  type: string
}

const fileTypes = {
  image: {
    label: 'image',
    types: ['.png', '.jpg', '.jpeg', 'image/png', 'image/jpeg'],
    icon: <ImageIcon className="h-4 w-4" />,
  },
  file: {
    label: 'file',
    types: [
      '.doc',
      '.docx',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'pdf',
      'application/pdf',
    ],
    icon: <File className="h-4 w-4" />,
  },
  video: {
    label: 'video',
    types: ['video'],
    icon: <Film className="h-4 w-4" />,
  },

  unknown: {
    label: 'unknown',
    types: [],
    icon: <UploadCloud className="h-4 w-4" />,
  },
}

const getFileItemIcon = (fileType: string) => {
  const matched = Object.values(fileTypes).find((ft) =>
    ft.types?.some((t) => fileType.toLowerCase().includes(t.toLowerCase())),
  )

  return matched?.icon || fileTypes.unknown.icon
}

export function FileItem({ name, size, type, state }: FileItemProps) {
  const { container, icon, deleteButton } = FileItemVariants({ state })

  return (
    <div className={container()}>
      <div className={icon()}>{getFileItemIcon(type)}</div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">
              Upload field, please try again.
            </span>
            <span className="text-error-500 text-sm">{name}</span>
          </div>
          <button className="text-error-700 hover:text-error-900 text-sm font-semibold">
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 w-4/5 rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <Button variant="ghost" type="button">
          <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
        </Button>
      ) : (
        <Button variant="ghost" type="button" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
