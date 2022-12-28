export class ExperienceItem {

  constructor(title: string, company: string, from: string, to: string, href?: string, imageSrc?: string) {
    this.title = title;
    this.company = company;
    this.from = from;
    this.to = to;
    this.href = href;
    this.imageSrc = imageSrc;
  }

  title: string
  company: string
  from: string
  to: string
  href?: string
  imageSrc?: string
}
