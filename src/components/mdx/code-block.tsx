'use client'

import { Check, Copy } from 'lucide-react'
import { type ComponentPropsWithoutRef, useRef, useState } from 'react'

export function CodeBlock({ children, ...props }: ComponentPropsWithoutRef<'pre'>) {
  const [copied, setCopied] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  const handleCopy = async () => {
    const text = preRef.current?.textContent ?? ''
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative my-6 rounded-lg border border-border overflow-hidden">
      <div className="relative group">
        <pre ref={preRef} {...props} className="!my-0 !rounded-none !border-0">
          {children}
        </pre>
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 rounded-md text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-foreground"
          aria-label="Copy code"
        >
          <div className="relative w-4 h-4">
            <Copy
              size={16}
              className={`absolute inset-0 transition-all duration-200 ${copied ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
            />
            <Check
              size={16}
              className={`absolute inset-0 transition-all duration-200 ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            />
          </div>
        </button>
      </div>
    </div>
  )
}
