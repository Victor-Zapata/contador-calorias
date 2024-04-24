import { Dispatch, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { categories } from "../data/categories"
import type { Form } from "../types"
import { FormActions, FormState } from "../reducers/formReducer";

type InputEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>;
type FormProps = {
    dispatch: Dispatch<FormActions>
    state: FormState
}

const initialState: Form = {
    id: uuidv4(),
    categorie: "Comida",
    activities: "",
    calories: 0
}

const Form = ({ dispatch, state }: FormProps) => {
    const [form, setForm] = useState<Form>(initialState)

    useEffect(() => {
        if (state.activId) {
            const selectedActivity = state.activitiesForm.filter((activity) => activity.id === state.activId)[0]
            setForm(selectedActivity)
        }
    }, [state.activId])



    const handleInputForm = (e: InputEvent) => {
        const isNumber = e.target.type === 'number'
        setForm({
            ...form,
            [e.target.name]: isNumber ? +e.target.value : e.target.value
        })
    }

    const isValidForm = () => {
        const { activities, calories } = form
        return activities.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: "save-form", payload: { newForm: form } })
        setForm({ ...initialState, id: uuidv4() })
    }

    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select onChange={handleInputForm}
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white" value={form.categorie} name="categorie" id="category">
                    {categories.map((category) => {
                        return <option
                            key={category.id}
                            value={category.name}
                        >
                            {category.name}
                        </option>
                    })}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Actividad</label>

                <input
                    type="text"
                    id="activity"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicios, Pesas, Bicicleta"
                    onChange={(e) => handleInputForm(e)}
                    name="activities"
                    value={form.activities}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorías</label>
                <input
                    type="number"
                    id="calories"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Calorías Ej. 300 o 500"
                    onChange={(e) => handleInputForm(e)}
                    name="calories"
                    value={form.calories}
                />
            </div>
            <input
                type="submit"
                className="bg-gray-700 disabled:opacity-25 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
                value={form.categorie === 'Comida' ? "guardar comida" : "guardar ejercicio"}
                disabled={!isValidForm()}
            />

        </form>
    )
}

export default Form