import { adaptExperienceItems } from '@/lib/experience-adapter'
import ScrolledCardsSection from '../Views/ScrolledCardsSection'
import React from 'react'

const Experience = () => {
  const items = adaptExperienceItems()
  return <ScrolledCardsSection title={"Experience"} items={items} hasActions={true} />
}

export default Experience