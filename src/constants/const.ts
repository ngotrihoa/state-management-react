export type PriotityType = 'HIGH' | 'MEDIUM' | 'LOW';
export type StatusTodoType = 'completed' | 'todo';

export interface PriorityItemProps {
  value: string;
  label: string;
  color: string;
}

export type PriorityProps = {
  [key in PriotityType]: PriorityItemProps;
};

export const PRIORITY: PriorityProps = {
  HIGH: {
    value: 'HIGH',
    label: 'High',
    color: 'red',
  },
  MEDIUM: {
    value: 'MEDIUM',
    label: 'Medium',
    color: 'blue',
  },
  LOW: {
    value: 'LOW',
    label: 'Low',
    color: 'gray',
  },
};

export const statusTodoType = {
  COMPLETED: 'completed',
  TODO: 'todo',
};
