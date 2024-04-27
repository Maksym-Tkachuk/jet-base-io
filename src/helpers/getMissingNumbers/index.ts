export const getMissingNumbers = (array: number[], length: number): number[] => {
  const missingNumbers: number[] = []

  if (array[0] !== 1) {
    missingNumbers.push(1)
  }

  if (array[array.length - 1] !== length) {
    missingNumbers.push(length)
  }

  for (let i = 0; i < length - 1; i += 1) {
    if (missingNumbers.length === 2) return missingNumbers

    const diff = array[i + 1] - array[i]

    if (diff > 1) {
      for (let j = 1; j < diff; j += 1) {
        missingNumbers.push(array[i] + j)
      }
    }
  }

  return missingNumbers
}
