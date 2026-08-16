import { UnifiedExperienceItem } from '@/models/UnifiedExperienceItem'
import type { ExperienceItem } from '@/models/ExperienceItem'
import experienceItems from '@/resources/experience.json'
import educationItems from '@/resources/education.json'

/**
 * Adapter: Normalizes raw Experience JSON into UnifiedExperienceItem.
 * Keeps components agnostic of the source data format.
 */
export const adaptExperienceItems = (): UnifiedExperienceItem[] => {
  return experienceItems.map((item: ExperienceItem) => ({
    id: item.title.replace(/\s+/g, '_').toLowerCase(),
    title: item.title,
    place: item.place,
    from: item.from,
    to: item.to,
    descriptionItems: item.info?.descriptionItems ?? [],
    skills: item.info?.skills ?? [],
    link: item.link,
    source: 'experience',
  }))
}

/**
 * Adapter: Normalizes raw Education JSON into UnifiedExperienceItem.
 * Education data has a different shape (has 'link' instead of 'info'),
 * so this adapter normalizes it to the unified interface.
 */
export const adaptEducationItems = (): UnifiedExperienceItem[] => {
  return educationItems.map((item) => ({
    id: item.title.replace(/\s+/g, '_').toLowerCase(),
    title: item.title,
    place: item.place,
    from: item.from,
    to: item.to,
    descriptionItems: [],
    skills: [],
    link: item.link,
    source: 'education',
  }))
}

/**
 * Combined adapter: returns normalized items for both experience and education.
 * This is the single point of data normalization for the UI.
 */
export const adaptAllItems = (): UnifiedExperienceItem[] => {
  return [...adaptExperienceItems(), ...adaptEducationItems()]
}