export function PageArray(max: number) {
  const array = []
  for (let page = 1; page <= max; page++) {
    array.push(page)
  }
  return array
}
