import { useState } from "react"
import { categories } from "../data/categories"

//type InputEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>;

const Form = () => {
    const [form, setForm] = useState({
        categorie: "",
        activities: "",
        calories: 0
    })

    const handleInputForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    console.log(form)
    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
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
                    onChange={() => handleInputForm(event)}
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
                    onChange={() => handleInputForm(event)}
                    name="calories"
                    value={form.calories}
                />
            </div>
            <input
                type="submit"
                className="bg-gray-700 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
                value="guardar comida o guardar ejercicio"
            />

        </form>
    )
}

export default Form