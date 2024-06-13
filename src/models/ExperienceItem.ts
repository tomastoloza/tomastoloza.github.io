export interface ExperienceItem {
  title: string;
  place: string;
  from: string;
  to: string;
  info: {
    descriptionItems: string[];
    skills: string[];
  };
}