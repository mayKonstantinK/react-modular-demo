export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function incrementCounter() {
  return { type: INCREMENT_COUNTER };
}
export function decrementCounter() {
  return { type: DECREMENT_COUNTER };
}

const INITIAL_STATE = { value: 0 };

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return Object.assign({}, {
        value: state.value + 1
      });
    case 'DECREMENT_COUNTER':
      return Object.assign({}, {
        value: state.value - 1
      });
    default:
      return state;
  }
}
export default counterReducer;