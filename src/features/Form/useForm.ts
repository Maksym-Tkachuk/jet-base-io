import { useState } from 'react'

import type { ChangeEvent, FormEvent } from 'react'

export const useForm = (onSubmit: (array: number[], length: number) => void) => {
  const [numbersInput, setNumbersInput] = useState('')
  const [arrayLengthInput, setArrayLengthInput] = useState('')

  const handleNumbersInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNumbersInput(e.target.value)
  }

  const handleArrayLengthInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setArrayLengthInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const length = Number(arrayLengthInput)
    const array = numbersInput.split(' ').map(Number)

    onSubmit(array, length)
  }

  return {
    handleArrayLengthInputChange,
    handleNumbersInputChange,
    handleSubmit,
    arrayLengthInput,
    numbersInput,
  }
}
