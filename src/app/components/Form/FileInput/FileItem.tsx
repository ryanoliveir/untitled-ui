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
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    deleteButton: '',
  },
  variants: {
    state: {
      complete: {
        container: 'border-violet-500 dark:border-violet-300/30',
      },
      progress: {
        container: 'dark:border-zinc-700',
      },
      error: {
        container:
          'bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30',
        icon: 'border-error-50 bg-error-100 text-error-600  dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
        deleteButton:
          'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300',
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
            <span className="text-sm font-medium text-error-700 dark:text-error-400">
              Upload field, please try again.
            </span>
            <span className="text-sm text-error-500 dark:text-error-500">
              {name}
            </span>
          </div>
          <button className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300">
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <div
                className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400"
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
          <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white dark:fill-violet-900 dark:text-violet-500" />
        </Button>
      ) : (
        <Button variant="ghost" type="button" className={deleteButton()}>
          <Trash2 className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
