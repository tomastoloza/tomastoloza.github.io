import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export default function ProfileLanding() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center sm:text-left">
      <div className="relative group">
        <Avatar className="h-28 w-28 sm:h-36 sm:w-36 border-2 border-neutral-800 group-hover:border-[#ff5500] transition-colors">
          <AvatarImage src="https://github.com/tomastoloza.png" alt="Tomás Toloza" />
          <AvatarFallback>TT</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col items-center sm:items-start space-y-2">
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-display">
          Tomás Toloza
        </h1>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <Badge variant="secondary">BUENOS AIRES, AR</Badge>
        </div>
        <p className="text-sm sm:text-base font-mono text-neutral-400">
          * Software Engineer <span className="text-[#ff5500]">@ MuleSoft</span>
        </p>
        <p className="text-sm sm:text-base font-mono text-neutral-400">
          * CS Student <span className="text-[#ff5500]">@ UNAHUR</span>
        </p>
      </div>
    </div>
  )
}