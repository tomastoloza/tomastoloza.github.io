import { adaptEducationItems } from '@/lib/experience-adapter'
import ScrolledCardsSection from '../Views/ScrolledCardsSection'
import React from 'react'

const Education = () => {
  const items = adaptEducationItems()
  return <ScrolledCardsSection title={"Education"} items={items} hasActions={false} />
}

export default Education