export interface ExperienceMetric {
  label: string;
  value: string;
  kind: 'add' | 'remove'; // 'add' => mejora (+), 'remove' => reducción (-)
}

export interface Experience {
  company: string;
  slug: string; // usado como "branch" en el estilo git-log
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  metrics: ExperienceMetric[];
  stack: string[];
}
