
type CalorieDisplayProps = {
    calories?: number
    text: string
    netCalories?: number
}

const CalorieDisplay = ({ calories, text, netCalories }: CalorieDisplayProps) => {
    return (
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-6xl text-orange">{calories} <span className={netCalories! < 0 ? "text-green-500" : "text-red-500"}>{netCalories}</span> </span>
            {text}
        </p>
    )
}

export default CalorieDisplay