import React from 'react'
import { sectionRegistry } from './sectionRegistry'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function Sections() {
  return (
    <div className="space-y-12">
      {sectionRegistry.map((section) => (
        <div key={section.label} className="space-y-6">
          <div className="relative flex items-center justify-center py-4">
            <Separator className="absolute inset-0 m-auto" />
            <div className="relative z-10 bg-black px-4">
              <Badge variant="orange" className="px-3 py-1 font-mono tracking-widest text-xs">
                {section.label}
              </Badge>
            </div>
          </div>
          <section className="space-y-4">{React.createElement(section.Component)}</section>
        </div>
      ))}
    </div>
  )
}