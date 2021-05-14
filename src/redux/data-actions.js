export const [REQUEST, SUCCESS, ERROR] = ['REQUEST', 'SUCCESS', 'ERROR']

export const actionTypesRSE = (NAME) => ({
  [REQUEST]: `${NAME}_${REQUEST}`,
  [SUCCESS]: `${NAME}_${SUCCESS}`,
  [ERROR]: `${NAME}_${ERROR}`,
})

export const action = (type, payload = {}) => ({ type, ...payload })
