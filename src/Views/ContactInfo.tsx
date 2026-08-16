import React from 'react'
import CopyToClipboardTextArea from '@/components/CopyToClipboardTextArea'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <Card className="border-neutral-800 bg-neutral-950/60 hover:border-neutral-700 text-center">
      <CardContent className="p-6 sm:p-8 flex flex-col items-center gap-4">
        <p className="font-mono text-[#ff5500] text-xs uppercase tracking-widest">
          {`// Direct Communication`}
        </p>
        <p className="text-sm sm:text-base text-neutral-300 max-w-md">
          Interested in discussing projects, architecture, or potential collaborations? Feel free to reach out directly.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <CopyToClipboardTextArea value="tomasezequieltoloza@gmail.com" />
          <Button
            variant="primary"
            size="default"
            asChild
            className="h-10 px-4"
          >
            <a href="mailto:tomasezequieltoloza@gmail.com">
              <FaEnvelope className="mr-2 h-3.5 w-3.5" />
              <span>SEND EMAIL</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ContactInfo
