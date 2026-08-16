import AboutMe from './AboutMe'
import Experience from './Experience'
import Education from './Education'
import ContactInfo from './ContactInfo'

type Section = {
  label: string
  Component: React.ComponentType
  icon?: string
}

export const sectionRegistry: Section[] = [
  {
    label: 'ABOUT ME',
    Component: AboutMe,
  },
  {
    label: 'EXPERIENCE',
    Component: Experience,
  },
  {
    label: 'EDUCATION',
    Component: Education,
  },
  {
    label: 'GET IN TOUCH',
    Component: ContactInfo,
  },
]