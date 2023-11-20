export type PriorityType = 'HIGH' | 'MEDIUM' | 'LOW';

export interface TodoModel {
  id: string;
  content: string;
  status: string;
  order: number;
  priority: PriorityType;
}
