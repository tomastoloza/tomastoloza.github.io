export interface UnifiedExperienceItem {
  id: string;
  title: string;
  place: string;
  from: string;
  to: string;
  descriptionItems: string[];
  skills: string[];
  link?: string;
  source: 'experience' | 'education';
}