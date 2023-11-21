export interface TodoEntity {
  id: string;
  content: string;
  status: 'TODO' | 'COMPLETED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';

  //diff
  num_order: number;
  create_by: string;
  create_at: Date;
}
