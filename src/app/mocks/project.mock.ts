import { Project } from '../models/project.model';

export const MOCK_PROJECT: Project[] = [
  {
    id: 'p1',
    name: 'Angular project signal',
    description: 'Angular project new version with signal',
    createdAt: new Date(),
  },
  {
    id: 'p2',
    name: 'Angular project RxJs',
    description: 'Angular project new version with RxJs',
    createdAt: new Date(),
  },
];
