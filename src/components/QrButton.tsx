import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { QrCode } from 'lucide-react'

const QrButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 border-neutral-800 hover:border-[#ff5500] hover:text-[#ff5500]"
              aria-label="Show QR Code"
            >
              <QrCode className="h-4 w-4" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>SHOW QR CODE</TooltipContent>
      </Tooltip>

      <DialogContent className="sm:max-w-md bg-black border-neutral-800">
        <DialogHeader>
          <DialogTitle>QR CODE</DialogTitle>
          <DialogDescription>
            Scan to open tomastoloza.xyz on your mobile device
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center p-4 bg-black border border-neutral-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/qr-tomastoloza-xyz.svg"
            alt="QR Code for tomastoloza.xyz"
            className="w-56 h-56 object-contain invert"
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default QrButton
