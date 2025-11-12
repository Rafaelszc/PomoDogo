import { Header } from "./components/Header"
import { Timer } from "./components/Timer"
import { Buttons } from "./components/Buttons"
import { Dog } from "./components/Dog"
import { useState } from "react"
import { useSound } from "use-sound"

export const Home = () => {
    const [minutesWork, setMinutesWork] = useState(45)
    const [minutesBreak, setMinutesBreak] = useState(15)    
    const [reset, setReset] = useState(false)
    const [currentSerie, setCurrentSerie] = useState(0)
    const [isRuning, setIsRuning] = useState(false)
    const [startBark] = useSound("/sounds/start-bark.ogg")   
    const [pomodogoSeries, setPomodogoSeries] = useState(4)
    const [mode, setMode] = useState("dark")

    const buttonsProps = {
        minutesWork,
        setMinutesWork,
        minutesBreak,
        setMinutesBreak,
        currentSerie,
        setCurrentSerie,
        pomodogoSeries,
        setPomodogoSeries,
        isRuning,
        setIsRuning,
        startBark,
        setReset,
        mode
    }

    const timerProps = {
        ...buttonsProps,
        reset
    }

    return (
        <main className={`bg-${mode === "dark" ? "black" : "white"} transition duration-300 h-screen flex flex-col`}>
            <Header mode={mode} setMode={setMode} />
            <div className="h-full flex flex-col items-center justify-center">
                <Timer {...timerProps} />
                <Dog mode={mode} />
                <Buttons {...buttonsProps} />
            </div>
        </main>
    )
}