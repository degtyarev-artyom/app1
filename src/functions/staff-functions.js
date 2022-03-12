export const addKeys = arr => arr.map((item, key) => {
  return {
    item,
    key: `.${key}`
  }
})

export const t = v => v === null ? null : v?.__proto__.constructor.name
