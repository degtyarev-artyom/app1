export const GETToObj = get => {
  if (!get) return null
  return get.slice(1).split('&').reduce((accum, current) => {
    const [key, value] = current.split('=')
    return { ...accum, [key]: value }
  }, {})
}

export const objToGET = obj => {
  const objStr = Object.entries(obj).reduce((accum, current) => {
    const [key, value] = current
    return `${accum}&${key}=${value}`
  }, '').slice(1)
  return `?${objStr}`
}
