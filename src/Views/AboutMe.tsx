import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const AboutMe = () => {
  return (
    <Card className="border-neutral-800 bg-neutral-950/60 hover:border-neutral-700">
      <CardContent className="p-6 sm:p-8 space-y-4 text-center sm:text-left text-neutral-300 text-sm sm:text-base leading-relaxed">
        <p className="font-mono text-[#ff5500] text-xs uppercase tracking-widest">
          {`// Introduction`}
        </p>
        <p className="text-white text-base sm:text-lg font-medium">
          Hi there 👋
        </p>
        <p className="text-white text-base sm:text-lg font-medium">
          I&apos;m Tomás, based in Buenos Aires, Argentina 🇦🇷.
        </p>
        <p>
          I am a Software Engineer at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.salesforce.com/products/integration/overview/"
            className="text-[#ff5500] font-semibold hover:underline"
          >
            MuleSoft
          </a>{' '}
          and a Computer Science student at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://unahur.edu.ar/"
            className="text-[#ff5500] font-semibold hover:underline"
          >
            Hurlingham National University (UNAHUR)
          </a>
          .
        </p>
        <p className="text-neutral-400">
          On this website, you will find detailed information about my work experiences, highlighting key projects and
          achievements. Additionally, you can explore my educational background, showcasing the knowledge and expertise
          I have gained over the years.
        </p>
        <p className="text-neutral-400">
          Feel free to browse through my portfolio and explore the various sections to learn more about my
          professional journey. If you have any questions or would like to discuss potential collaborations, feel free to reach out
          through the contact channels below.
        </p>
      </CardContent>
    </Card>
  )
}

export default AboutMe
