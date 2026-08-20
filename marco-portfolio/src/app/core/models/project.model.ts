export interface Project {
  id: string;
  name: string;
  imageUrl?: string;
  status: 'merged' | 'in-review';
  description: string;
  impact: string;
  repositoryUrl?: string;
  tags: string[];
}
