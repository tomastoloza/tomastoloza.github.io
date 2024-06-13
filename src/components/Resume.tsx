"use client";

import FileIcon from "./Icon/FileIcon";
import experienceItems from "../resources/experience.json";
import educationItems from "../resources/education.json";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {ExperienceItem} from "../models";
import TooltipButton from "./TooltipButton";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

type ContentItem =
  | string
  | { text: string; style?: string }
  | {
  canvas: { type: string; x1: number; y1: number; x2: number; y2: number; lineWidth: number; lineColor?: string }[]
}
  | { ul: string[] }
  | { ol: string[] }
  | ContentItem[];

type Content = ContentItem[];


function generatePDF(content: Content) {
  // Create a document definition object
  const documentDefinition = {
    content,
    styles: {
      header: {
        fontSize: 14,
        bold: true,
        margin: [0, 6, 0, 6],
      },
      subheader: {
        fontSize: 10,
        bold: true,
        margin: [0, 6, 0, 6],
      },
      info: {
        fontSize: 8,
        margin: [0, 6, 0, 6],
      },
      bullet: {
        fontSize: 8,
        margin: [0, 6, 0, 6],
      },
    },
  };
  // @ts-ignore
  pdfMake.createPdf(documentDefinition).download('tomas-toloza-resume.pdf');
}

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

function createPDFContent(experienceData: ExperienceItem[], educationData: ExperienceItem[]) {
  const content = [];

  // Add content for experienceData
  content.push({text: 'Tomas Toloza', style: 'header'});
  content.push({text: 'tomasezequieltoloza@gmail.com', style: 'info'});
  content.push({text: 'https://tomastoloza.xyz', style: 'info'});
  content.push({text: 'Buenos Aires, Argentina', style: 'info'});

  content.push(hr({color: "black", lineWidth: 2}));

  content.push({text: 'Experience', style: 'header'});
  experienceData.forEach((experience) => {
    content.push({text: experience.title + ` @ ${experience.place}`, style: 'subheader'});
    content.push({text: `${experience.from} - ${experience.to}`, style: 'info'}); // Add from and to
    if (experience.info) {
      content.push({ul: experience.info.descriptionItems, style: "bullet"});
      content.push({text: "Skills:", style: "subheader"});
      content.push({ul: experience.info.skills, style: "bullet"});
    }
  });

  content.push(hr({color: "black", lineWidth: 2}));

  content.push({text: 'Education', style: 'header'});

  educationData.forEach((education) => {
    content.push({text: education.title + ` @ ${education.place}`, style: 'subheader'});
    content.push({text: `${education.from} - ${education.to}`, style: 'info'}); // Add from and to
    if (education.info) {
      if (education.info.descriptionItems) {
        content.push({ul: education.info.descriptionItems, style: "bullet"});
      }
      if (education.info.skills) {
        content.push({text: 'Skills:', style: 'subheader'});
        content.push({ul: education.info.skills, style: "bullet"});
      }
    }
  });

  return content;
}

export default function Resume() {

  const createResume = () => {
    const pdfContent = createPDFContent(experienceItems, educationItems);
    generatePDF(pdfContent);
  }

  return <TooltipButton onClick={createResume} tooltipLabel={"Download resume"} label={"Resume"} icon={<FileIcon/>}/>
}