import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'

interface ExperienceDialogProps {
  experienceItem: import('@/models/UnifiedExperienceItem').UnifiedExperienceItem
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export const ExperienceDialog = ({ experienceItem, isOpen, onOpenChange }: ExperienceDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button
          className="hidden"
          aria-label="Details"
        >
          <span className="sr-only">DETAILS</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-black border-neutral-800">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge
              variant="orange"
              className="rounded-full bg-[#ff5500] border border-[#ff5500] px-2.5 py-0.5 text-[10px] font-bold text-black inline-flex items-center"
            >
              {experienceItem.place}
            </Badge>
            <span className="font-mono text-xs text-neutral-400">
              {experienceItem.from} – {experienceItem.to}
            </span>
          </div>
          <DialogTitle>{experienceItem.title}</DialogTitle>
          <DialogDescription>Role Overview & Key Deliverables</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-2">
          {experienceItem.descriptionItems.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#ff5500]">
                Responsibilities & Achievements
              </h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                {experienceItem.descriptionItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#ff5500] font-mono mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {experienceItem.skills.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#ff5500]">
                Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {experienceItem.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-neutral-700 bg-neutral-900 text-neutral-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}