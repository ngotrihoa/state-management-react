export enum PriorityTypeEnum {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export enum StatusTypeEnum {
  TODO = 'TODO',
  COMPLETED = 'COMPLETED',
}

export interface TodoModel {
  id: string;
  content: string;
  status: StatusTypeEnum;
  order: number;
  priority: PriorityTypeEnum;
}

export interface TodoPayload extends Partial<TodoModel> {
  content: TodoModel['content'];
}

export class Todo implements TodoModel {
  id;
  content;
  status;
  order;
  priority;

  constructor({ id, content, order, priority, status }: TodoModel) {
    this.id = id;
    this.content = content;
    this.order = order;
    this.priority = priority;
    this.status = status;
  }
}
