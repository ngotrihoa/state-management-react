export type PriotityType = 'HIGH' | 'MEDIUM' | 'LOW';

export interface PriorityItemProps {
  value: string;
  label: string;
  color: string;
}

type PriorityProps = {
  [key in PriotityType]: PriorityItemProps;
};

export const priority: PriorityProps = {
  HIGH: {
    value: 'high',
    label: 'High',
    color: 'red',
  },
  MEDIUM: {
    value: 'medium',
    label: 'Medium',
    color: 'blue',
  },
  LOW: {
    value: 'low',
    label: 'Low',
    color: 'gray',
  },
};

export const statusTodoType = {
  COMPLETED: 'completed',
  TODO: 'todo',
};
