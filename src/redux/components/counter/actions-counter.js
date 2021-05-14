import { action } from "redux/data-actions"

export const actionTypesCounter = {
  INCREMENT: 'INCREMENT',
  INCREMENT_ASYNC: 'INCREMENT_ASYNC',
  DECREMENT: 'DECREMENT',
}

export const actionsCounter = {
  increment: () => action(actionTypesCounter.INCREMENT),
  incrementAsync: () => action(actionTypesCounter.INCREMENT_ASYNC),
  decrement: () => action(actionTypesCounter.DECREMENT),
}
