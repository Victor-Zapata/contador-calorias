import Form from "./components/Form"
import { useReducer } from "react"
import { formReducer, initialState } from "./reducers/formReducer"
import FormList from "./components/FormList"

function App() {

  const [state, dispatch] = useReducer(formReducer, initialState)

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorías</h1>
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
          />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <FormList activitiesForm={state.activitiesForm} />
      </section>
    </>
  )
}

export default App
