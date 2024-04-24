import Form from "./components/Form"
import { useEffect, useReducer } from "react"
import { formReducer, initialState } from "./reducers/formReducer"
import FormList from "./components/FormList"
import CalorieTracker from "./components/CalorieTracker"

function App() {

  const [state, dispatch] = useReducer(formReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activitiesForm));
  }, [state.activitiesForm]);

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorías</h1>
          {
            state.activitiesForm.length > 0 ? <button
              onClick={() => dispatch({ type: "delete-all" })}
              className="bg-slate-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm"
            >Reiniciar App</button> : null
          }

        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>
      <section className="bg-slate-800 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker
            activitiesForm={state.activitiesForm}
          />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <FormList dispatch={dispatch} activitiesForm={state.activitiesForm} />
      </section>
    </>
  )
}

export default App
