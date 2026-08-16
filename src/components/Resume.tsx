import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { FileText, Loader2 } from 'lucide-react'
import { createPDFContent, experienceData, educationData } from '@/lib/pdf'

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

export default function Resume() {
  const [isGenerating, setIsGenerating] = useState(false)

  const createResume = async () => {
    try {
      setIsGenerating(true)

      const pdfMake = (await import('pdfmake/build/pdfmake')).default
      const pdfFonts = (await import('pdfmake/build/vfs_fonts')).default
      pdfMake.vfs = pdfFonts.pdfMake.vfs

      const content = createPDFContent(
        experienceData as Parameters<typeof createPDFContent>[0],
        educationData as Parameters<typeof createPDFContent>[1]
      )

      const documentDefinition = {
        content,
        styles: {
          header: {
            fontSize: 14,
            bold: true,
            margin: [0, 6, 0, 6] as [number, number, number, number],
          },
          subheader: {
            fontSize: 10,
            bold: true,
            margin: [0, 6, 0, 6] as [number, number, number, number],
          },
          info: {
            fontSize: 8,
            margin: [0, 6, 0, 6] as [number, number, number, number],
          },
          bullet: {
            fontSize: 8,
            margin: [0, 6, 0, 6] as [number, number, number, number],
          },
        },
      }

      // @ts-ignore
      pdfMake.createPdf(documentDefinition).download('tomas-toloza-resume.pdf')
    } catch (err) {
      console.error('Failed to generate PDF:', err)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={createResume}
          disabled={isGenerating}
          variant="outline"
          size="icon"
          className="border-neutral-800 hover:border-[#ff5500] hover:text-[#ff5500] flex items-center gap-2 h-10 w-10"
        >
          {isGenerating ? (
            <Loader2 className="h-4 w-4 animate-spin text-[#ff5500]" />
          ) : (
            <FileText className="h-4 w-4" />
          )}
        </Button>
      </TooltipTrigger>
      <TooltipContent>DOWNLOAD RESUME (PDF)</TooltipContent>
    </Tooltip>
  )
}