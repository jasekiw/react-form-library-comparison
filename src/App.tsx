import { ExampleForm } from './components/ExampleForm'
import { ReactHookExampleForm } from './components/ReactHookExampleForm'
import './App.css'
import { memo } from 'react'

function App() {
  return (
    <div className="app-container">
      <h1>Form Comparison</h1>
      <div className="forms-container">
        <FormikExample />
        <ReactHookExample />
      </div>
    </div>
  )
}

const FormikExample = memo(function FormikExample() {
  return (
    <div className="form-section">
      <h2>Formik Form</h2>
      <ExampleForm />
    </div>
  )
})

const ReactHookExample = memo(function ReactHookExample() {
  return (
    <div className="form-section">
      <h2>React Hook Form</h2>
      <ReactHookExampleForm />
    </div>
  )
})

export default App
