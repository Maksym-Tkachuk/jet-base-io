import Input from 'src/components/Input'
import { useForm } from 'src/features/Form/useForm'

import './styles.css'

type FormProps = {
  onSubmit: (array: number[], length: number) => void
}

const Form = ({ onSubmit }: FormProps): JSX.Element => {
  const {
    arrayLengthInput,
    handleArrayLengthInputChange,
    handleNumbersInputChange,
    handleSubmit,
    numbersInput,
  } = useForm(onSubmit)

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        label="Enter numbers separated by a space:"
        type="text"
        value={numbersInput}
        placeholder="1 2 3 4 6 7 9 10"
        onChange={handleNumbersInputChange}
      />

      <Input
        required
        label="Enter array length:"
        type="number"
        value={arrayLengthInput}
        placeholder="10"
        onChange={handleArrayLengthInputChange}
      />

      <button type="submit" className="button">
        Calculate
      </button>
    </form>
  )
}

export default Form
