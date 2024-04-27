// O(n)

export const getMissingNumbers = (array: number[], length: number): number[] => {
  const missingNumbers: number[] = []
  const countOfMissingNumbers = 2

  if (array[0] !== 1) {
    missingNumbers.push(1)
  }

  if (array.at(-1) !== length) {
    missingNumbers.push(length)
  }

  for (let i = 0; i < length - 1; i += 1) {
    if (missingNumbers.length === countOfMissingNumbers) return missingNumbers

    const diff = array[i + 1] - array[i]

    if (diff > 1) {
      for (let j = 1; j < diff; j += 1) {
        missingNumbers.push(array[i] + j)
      }
    }
  }

  return missingNumbers
}
