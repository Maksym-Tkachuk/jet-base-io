import { useState } from 'react'

import Form from 'src/features/Form'
import { getMissingNumbers } from 'src/helpers/getMissingNumbers'

import './App.css'

const App = (): JSX.Element => {
  const [missedNumbers, setMissedNumbers] = useState<number[]>([])

  return (
    <div className="container">
      <h1>
        {missedNumbers[0]} - {missedNumbers[1]}
      </h1>
      <Form
        onSubmit={(array, length) => {
          setMissedNumbers(getMissingNumbers(array, length))
        }}
      />
    </div>
  )
}

export default App
