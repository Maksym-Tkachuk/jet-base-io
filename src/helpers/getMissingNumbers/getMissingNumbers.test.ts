import { describe, expect, it } from 'vitest'

import { getMissingNumbers } from '.'

describe('getMissingNumbers', () => {
  it('should return [4, 9] if there are no numbers inside the list', () => {
    expect(getMissingNumbers([1, 2, 3, 5, 6, 7, 8, 10], 10)).toEqual([4, 9])
  })

  it('should return [1, 10] if there are no numbers on the edges', () => {
    expect(getMissingNumbers([2, 3, 4, 5, 6, 7, 8, 9], 10)).toEqual([1, 10])
  })

  it('should return [3, 4] if two consecutive numbers are missing', () => {
    expect(getMissingNumbers([1, 2, 5, 6, 7, 8, 9, 10], 10)).toEqual([3, 4])
  })

  it('should return [10, 4] if missing numbers inside and at the edge of a sequence', () => {
    expect(getMissingNumbers([1, 2, 3, 5, 6, 7, 8, 9], 10)).toEqual([10, 4])
  })

  it('should return [8, 1] if missing numbers inside and at the edge of a sequence', () => {
    expect(getMissingNumbers([2, 3, 4, 5, 6, 7, 9, 10], 10)).toEqual([1, 8])
  })

  it('should return an array with two missing numbers if there are exactly two missing numbers', () => {
    expect(getMissingNumbers([1, 2, 4, 5, 6, 8, 10], 10)).toEqual([3, 7])
  })

  it('should return an empty array if all numbers are present in the list', () => {
    expect(getMissingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toEqual([])
  })
})
