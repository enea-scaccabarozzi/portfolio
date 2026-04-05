'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

function getPageIndex(path: string): number {
  const p = path.replace(/^\/(it|en)/, '') || '/'
  if (p === '/') return 0
  if (p === '/experience') return 1
  if (p === '/projects') return 2
  if (p === '/blog') return 3
  if (p.startsWith('/blog/')) return 4
  return 0
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 1,
  }),
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prevPathname = useRef(pathname)
  const direction = useRef(1)

  if (pathname !== prevPathname.current) {
    const prevIndex = getPageIndex(prevPathname.current)
    const currIndex = getPageIndex(pathname)
    direction.current = currIndex >= prevIndex ? 1 : -1
    prevPathname.current = pathname
  }

  return (
    <div className="overflow-x-clip">
      <AnimatePresence mode="popLayout" custom={direction.current} initial={false}>
        <motion.div
          key={pathname}
          custom={direction.current}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {
              type: 'tween',
              duration: 0.7,
              ease: [0.32, 0.72, 0, 1],
            },
            opacity: {
              duration: 0.6,
              ease: [0.4, 0, 0.6, 1],
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
