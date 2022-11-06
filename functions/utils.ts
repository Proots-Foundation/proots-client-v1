export const insertAt = (
  target: string,
  charToInsert: string,
  position: number,
) => {
  return target.slice(0, position) + charToInsert + target.slice(position)
}

export const replace = (
  target: string,
  charToInsert: string,
  from: number,
  to: number,
) => {
  return (
    target.substring(0, from) +
    charToInsert +
    target.substring(to, target.length)
  )
}

export const checkBetween = (index: number, start: number, end: number) => {
  if (index >= start && index <= end) {
    return true
  }
  return false
}

type Range = {
  start: number
  end: number
}
export const checkIntersect = (rangeA: Range, rangeB: Range) => {
  const minRange = rangeA.start < rangeB.start ? rangeA : rangeB
  const maxRange = minRange == rangeA ? rangeB : rangeA

  //min ends before max starts -> no intersection
  if (minRange.end < maxRange.start) return null //the ranges don't intersect

  return {
    start: maxRange.start,
    end: minRange.end < maxRange.end ? minRange.end : maxRange.end,
  }
}
