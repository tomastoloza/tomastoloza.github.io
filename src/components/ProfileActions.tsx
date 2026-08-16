import React from 'react'
import QrButton from './QrButton'
import Resume from './Resume'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function ProfileActions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 w-full">
      <QrButton />
      <Resume />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 border-neutral-800 hover:border-[#ff5500] hover:text-[#ff5500]"
            asChild
          >
            <a href="https://github.com/tomastoloza" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="h-4 w-4" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>GITHUB</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 border-neutral-800 hover:border-[#ff5500] hover:text-[#ff5500]"
            asChild
          >
            <a href="https://www.linkedin.com/in/tomas-toloza" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="h-4 w-4" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>LINKEDIN</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 border-neutral-800 hover:border-[#ff5500] hover:text-[#ff5500]"
            asChild
          >
            <a href="mailto:tomasezequieltoloza@gmail.com" aria-label="Email">
              <FaEnvelope className="h-4 w-4" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>EMAIL</TooltipContent>
      </Tooltip>
    </div>
  )
}