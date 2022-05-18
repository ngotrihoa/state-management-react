import { CounterType } from '../../action';

const initState = {
  valueCounter: 0,
};

const counterReducer = (state = initState, action: any) => {
  switch (action.type) {
    case CounterType.INCREMENT:
      return {
        ...state,
        valueCounter: action.payload
          ? state.valueCounter + action.payload
          : state.valueCounter + 1,
      };

    case CounterType.DECREMENT:
      return {
        ...state,
        valueCounter: action.payload
          ? state.valueCounter - action.payload
          : state.valueCounter - 1,
      };

    default:
      return initState;
  }
};

export default counterReducer;
