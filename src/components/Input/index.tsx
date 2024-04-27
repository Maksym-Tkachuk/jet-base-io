import { useId, type InputHTMLAttributes } from 'react'

import './styles.css'

type InputProps = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, ...props }: InputProps): JSX.Element => {
  const id = useId()

  return (
    <label htmlFor={id}>
      {label}
      <input id={id} onChange={e => e} {...props} />
    </label>
  )
}

export default Input
