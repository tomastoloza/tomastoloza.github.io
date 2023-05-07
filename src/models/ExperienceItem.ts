export class ExperienceItem {
  title: string;
  company: string;
  from: string;
  to: string;
  href?: string;
  imageSrc?: string;
  info: string;

  constructor(title: string, company: string, from: string, to: string,  info: string, href?: string, imageSrc?: string,) {
    this.title = title;
    this.company = company;
    this.from = from;
    this.to = to;
    this.href = href;
    this.imageSrc = imageSrc;
    this.info = info;
  }
}
