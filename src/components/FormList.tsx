import { Dispatch } from "react"
import { FormActions } from "../reducers/formReducer"
import { Form } from "../types"
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

type FormListProps = {
    activitiesForm: Form[]
    dispatch: Dispatch<FormActions>
}

const FormList = ({ activitiesForm, dispatch }: FormListProps) => {
    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center"> {activitiesForm.length < 1 ? ('La lista está vacía') : ('Comidas y Actividades')} </h2>

            {
                activitiesForm.map((item) => {
                    return <div className="px-5 py-10 bg-white mt-5 flex justify-between shadow" key={item.id}>
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${item.categorie === 'Comida' ? "bg-lime-500" : " bg-orange-500"}`}>{item.categorie}</p>
                            <p className="text-2xl font-bold pt-5">{item.activities}</p>
                            <p className="font-black text-4xl text-lime-500">
                                {item.calories}{' '}
                                <span>Calorias</span>
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => dispatch({ type: 'set-activeId', payload: { id: item.id } })}
                            >
                                <PencilSquareIcon
                                    className="h-8 w-8 text-gray-800"
                                />
                            </button>
                            <button
                                onClick={() => dispatch({ type: 'delete-form', payload: { id: item.id } })}
                            >
                                <TrashIcon
                                    className="h-8 w-8 text-red-500"
                                />
                            </button>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default FormList