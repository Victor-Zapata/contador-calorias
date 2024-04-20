import { Form } from "../types"

type FormListProps = {
    activitiesForm: Form[]
}

const FormList = ({ activitiesForm }: FormListProps) => {
    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Comidas y Actividades</h2>
            {
                activitiesForm.map((item) => {
                    return <div className="px-5 py-10 bg-white mt-5 flex justify-between" key={item.id}>
                        <div className="space-y-2 relative">
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${item.categorie === 'Comida' ? "bg-lime-500" : " bg-orange-500"}`}>{item.categorie}</p>
                            <p className="text-2xl font-bold pt-5">{item.activities}</p>
                            <p className="font-black text-4xl text-lime-500">
                                {item.calories}{' '}
                                <span>Calorias</span>
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                })
            }
        </>
    )
}

export default FormList