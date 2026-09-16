export function getNearestStageIndex(stageCenters: number[], viewportAnchor: number, fallbackIndex: number) {
  let nearestIndex = fallbackIndex
  let nearestDistance = Number.POSITIVE_INFINITY

  stageCenters.forEach((center, index) => {
    const distance = Math.abs(center - viewportAnchor)
    if (distance < nearestDistance) {
      nearestDistance = distance
      nearestIndex = index
    }
  })

  return nearestIndex
}
