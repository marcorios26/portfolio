export interface Project {
  id: string;
  name: string;
  status: 'merged' | 'in-review';
  description: string;
  impact: string;
  tags: string[];
}
