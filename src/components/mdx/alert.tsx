import { AlertCircle, AlertTriangle, CheckCircle, Info, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'info' | 'warning' | 'danger' | 'success'

interface AlertProps {
  variant?: Variant
  title?: string
  children: ReactNode
}

const variantStyles: Record<Variant, { container: string; icon: LucideIcon; title: string }> = {
  info: {
    container: 'border-l-blue-400/60 bg-blue-50/50 dark:border-l-blue-500/40 dark:bg-blue-950/20',
    icon: Info,
    title: 'text-stone-700 dark:text-stone-300',
  },
  warning: {
    container:
      'border-l-amber-400/60 bg-amber-50/50 dark:border-l-amber-500/40 dark:bg-amber-950/20',
    icon: AlertTriangle,
    title: 'text-stone-700 dark:text-stone-300',
  },
  danger: {
    container: 'border-l-red-400/60 bg-red-50/50 dark:border-l-red-500/40 dark:bg-red-950/20',
    icon: AlertCircle,
    title: 'text-stone-800 dark:text-stone-200',
  },
  success: {
    container:
      'border-l-emerald-400/60 bg-emerald-50/50 dark:border-l-emerald-500/40 dark:bg-emerald-950/20',
    icon: CheckCircle,
    title: 'text-stone-700 dark:text-stone-300',
  },
}

export function Alert({ variant = 'info', title, children }: AlertProps) {
  const styles = variantStyles[variant]
  const Icon = styles.icon

  return (
    <div className={`my-6 rounded-r-lg border-l-4 p-4 ${styles.container}`}>
      <div className={`flex items-center gap-2 font-medium ${styles.title}`}>
        <Icon size={16} />
        {title && <span>{title}</span>}
      </div>
      <div className="mt-2 text-sm text-stone-600 dark:text-stone-400">{children}</div>
    </div>
  )
}
