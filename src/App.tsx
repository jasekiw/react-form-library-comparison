import { FormikExampleForm } from './components/FormikExampleForm'
import { ReactHookExampleForm } from './components/ReactHookExampleForm'
import { TanstackFormExample } from './components/TanstackFormExample'
import './App.css'
import { memo } from 'react'

function App() {
  return (
    <div className="app-container">
      <h1>Form Comparison</h1>
      <div className="forms-container">
        <div className="form-section">
          <h2>Formik Form</h2>
          <FormikExample />
        </div>
        <div className="form-section">
          <h2>React Hook Form</h2>
          <ReactHookExample />
        </div>
        <div className="form-section">
          <h2>Tanstack Form</h2>
          <TanstackExample />
        </div>
      </div>
    </div>
  )
}

const FormikExample = memo(function FormikExample() {
  return (
    <div className="form-section">
      <h2>Formik Form</h2>
      <FormikExampleForm />
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
});

const TanstackExample = memo(function TanstackExample() {
  return (
    <div className="form-section">
      <h2>Tanstack Form</h2>
      <TanstackFormExample />
    </div>
  )
});
export default App
