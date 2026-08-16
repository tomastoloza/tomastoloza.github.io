import { ExperienceItem } from '@/models'
import experienceItems from '@/resources/experience.json'
import educationItems from '@/resources/education.json'

type ContentItem =
  | string
  | { text: string; style?: string }
  | {
      canvas: {
        type: string
        x1: number
        y1: number
        x2: number
        y2: number
        lineWidth: number
        lineColor?: string
      }[]
    }
  | { ul: string[] }
  | { ol: string[] }
  | ContentItem[]

type Content = ContentItem[]

const hr = ({
  color,
  lineWidth,
}: {
  color?: string
  lineWidth: number
}) => ({
  canvas: [
    {
      type: 'line',
      x1: 0,
      y1: 0,
      x2: 595 - 2 * 40,
      y2: 0,
      lineWidth,
      lineColor: color,
    },
  ],
})

function createPDFContent(
  experienceData: ExperienceItem[],
  educationData: ExperienceItem[]
): Content {
  const content = []

  content.push({ text: 'Tomas Toloza', style: 'header' })
  content.push({ text: 'tomasezequieltoloza@gmail.com', style: 'info' })
  content.push({ text: 'https://tomastoloza.xyz', style: 'info' })
  content.push({ text: 'Buenos Aires, Argentina', style: 'info' })

  content.push(hr({ color: 'black', lineWidth: 2 }))

  content.push({ text: 'Experience', style: 'header' })
  experienceData.forEach((experience) => {
    content.push({
      text: `${experience.title} @ ${experience.place}`,
      style: 'subheader',
    })
    content.push({
      text: `${experience.from} - ${experience.to}`,
      style: 'info',
    })
    if (experience.info) {
      content.push({ ul: experience.info.descriptionItems, style: 'bullet' })
      content.push({ text: 'Skills:', style: 'subheader' })
      content.push({ ul: experience.info.skills, style: 'bullet' })
    }
  })

  content.push(hr({ color: 'black', lineWidth: 2 }))

  content.push({ text: 'Education', style: 'header' })
  educationData.forEach((education) => {
    content.push({
      text: `${education.title} @ ${education.place}`,
      style: 'subheader',
    })
    content.push({
      text: `${education.from} - ${education.to}`,
      style: 'info',
    })
    if (education.info) {
      if (education.info.descriptionItems) {
        content.push({ ul: education.info.descriptionItems, style: 'bullet' })
      }
      if (education.info.skills) {
        content.push({ text: 'Skills:', style: 'subheader' })
        content.push({ ul: education.info.skills, style: 'bullet' })
      }
    }
  })

  return content
}

export { createPDFContent }

export const experienceData = experienceItems
export const educationData = educationItems