/*
 * Set url params string from objects
 * @Params params=object, excludeEmptyValue=boolean, sort=boolean
 * @Return string of url params
 */
export function parseParams(
  params = {},
  excludeEmptyValue = true,
  sort = true
) {
  const paramsArray = []
  Object.entries(params).forEach((param) => {
    if (excludeEmptyValue) {
      if (param[1]) {
        paramsArray.push(`${param[0]}=${encodeURIComponent(param[1])}`)
      }
    } else {
      paramsArray.push(`${param[0]}=${encodeURIComponent(param[1])}`)
    }
  })

  if (sort) paramsArray.sort()

  return paramsArray.length ? `?${paramsArray.join('&')}` : ''
}

export function isEmptyObject(obj) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false
    }
  }

  return JSON.stringify(obj) === JSON.stringify({})
}
