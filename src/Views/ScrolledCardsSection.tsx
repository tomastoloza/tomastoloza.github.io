import React from 'react'
import { ItemCard } from '@/components'
import { UnifiedExperienceItem } from '@/models/UnifiedExperienceItem'

interface ScrolledCardsSectionProps {
  title?: string
  items: UnifiedExperienceItem[]
  hasActions?: boolean
}

const ScrolledCardsSection = ({ items, hasActions }: ScrolledCardsSectionProps) => {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth px-1">
        {items.map((item) => (
          <ItemCard
            experienceItem={item}
            key={item.title}
            hasActions={hasActions}
          />
        ))}
      </div>
    </div>
  )
}

export default ScrolledCardsSection