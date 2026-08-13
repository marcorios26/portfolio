export type SkillCategory = 'frontend' | 'backend' | 'databases-devops';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface SkillCategoryMeta {
  id: SkillCategory | 'all';
  label: string;
}
