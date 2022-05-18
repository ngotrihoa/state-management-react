import { CounterType } from './actionType';

export const incrementCounterAction = (payload?: number) => {
  return {
    type: CounterType.INCREMENT,
    payload,
  };
};

export const decrementCounterAction = (payload?: number) => {
  return {
    type: CounterType.DECREMENT,
    payload,
  };
};
