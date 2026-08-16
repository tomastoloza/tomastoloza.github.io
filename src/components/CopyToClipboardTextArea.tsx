import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'

const CopyToClipboardTextArea = ({ value }: { value: string }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error('Failed to copy', e)
    }
  }

  return (
    <div className="flex items-center gap-2 border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-mono text-neutral-200 hover:border-neutral-700 transition-colors">
      <span className="select-all">{value}</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={copyToClipboard}
        className="h-7 w-7 text-neutral-400 hover:text-[#ff5500] hover:bg-neutral-900"
        aria-label="Copy email address"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-[#ff5500]" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </Button>
    </div>
  )
}

export default CopyToClipboardTextArea
