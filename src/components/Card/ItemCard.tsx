import * as React from 'react'
import { UnifiedExperienceItem } from '@/models/UnifiedExperienceItem'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExperienceDialog } from '@/components/Dialog/ExperienceDialog'
import { ChevronRight } from 'lucide-react'

interface ExperienceCardProps {
  experienceItem: UnifiedExperienceItem
  hasActions?: boolean
}

export const ItemCard = ({ experienceItem, hasActions }: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className="min-w-[280px] sm:min-w-[340px] max-w-[380px] flex-shrink-0 flex flex-col justify-between border-neutral-800 bg-neutral-950/70 hover:border-[#ff5500] transition-colors scroll-snap-align-start group">
      <CardHeader className="space-y-1">
        <CardTitle className="text-base font-bold text-white group-hover:text-white pt-1">
          {experienceItem.title}
        </CardTitle>
        <div className="flex flex-col justify-between gap-2">
          <Badge variant="secondary" className="text-[10px] text-neutral-400 w-fit">
            {experienceItem.place}
          </Badge>
          <span className="font-mono text-xs text-[#ff5500]">
            {experienceItem.from} – {experienceItem.to}
          </span>
        </div>
      </CardHeader>
      {hasActions && (
        <CardFooter className="pt-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full flex items-center justify-between border-neutral-800 hover:border-[#ff5500] hover:text-[#ff5500]"
            onClick={() => setIsOpen(true)}
          >
            <span>DETAILS</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
          <ExperienceDialog
            experienceItem={experienceItem}
            isOpen={isOpen}
            onOpenChange={setIsOpen}
          />
        </CardFooter>
      )}
    </Card>
  )
}