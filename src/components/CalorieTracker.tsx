import { useMemo } from "react"
import { Form } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
    activitiesForm: Form[]
}

const CalorieTracker = ({ activitiesForm }: CalorieTrackerProps) => {

    const caloriesConsumed = useMemo(() => activitiesForm.reduce((total, activity) => activity.categorie === 'Comida' ? total + activity.calories : total, 0), [activitiesForm])

    const caloriesBurned = useMemo(() => activitiesForm.reduce((total, activity) => activity.categorie === 'Ejercicio' ? total + activity.calories : total, 0), [activitiesForm])

    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">Resumen de Calorías</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-5">

                <CalorieDisplay
                    calories={caloriesConsumed}
                    text="Consumidas"
                />

                <CalorieDisplay
                    calories={caloriesBurned}
                    text="Quemadas"
                />

                <CalorieDisplay
                    netCalories={caloriesConsumed - caloriesBurned}
                    text="Totales"
                />
            </div>

        </>
    )
}

export default CalorieTracker