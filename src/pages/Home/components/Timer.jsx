import { useEffect, useState } from "react"
import { useSound } from "use-sound"

export const Timer = ({
        minutesWork, setMinutesWork, 
        minutesBreak, setMinutesBreak, 
        setCurrentSerie, pomodogoSeries, 
        setPomodogoSeries, isRuning, 
        setIsRuning, currentSerie, 
        startBark, setReset, 
        reset}) => {
    const [workTime, setWorkTime] = useState(minutesWork*60)
    const [isBreakTime, setIsBreakTime] = useState(false)
    const [gogoBark] = useSound("/sounds/gogogo-bark.ogg")
    const [finalBark] = useSound("/sounds/final-bark.ogg") 

    useEffect(() => {
        if (reset){
            setWorkTime(60*minutesWork)
            setCurrentSerie(0)
            setReset(false)
            setIsRuning(false)
            return
        }
        if (currentSerie >= pomodogoSeries) {             
            setIsRuning(false)
            setWorkTime(0)
            return
        }
        else if(isRuning) {
            const interval = setInterval(() => {
                setWorkTime((prevTime) => {
                    if (prevTime === 0 && isBreakTime) {
                        setIsBreakTime(false)
                        gogoBark()
                        return minutesWork*60
                    } else if (prevTime === 0) {
                        setCurrentSerie(currentSerie + 1)
                        setIsBreakTime(true)
                        finalBark()
                        return minutesBreak*60
                    } else {
                        return prevTime -1
                    }
                })
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isRuning, reset, isBreakTime, currentSerie, pomodogoSeries])

    const hoursRemaining = Math.floor(workTime/3600).toString().padStart(2, "0")
    const minutesRemaining = Math.floor((workTime%3600)/60).toString().padStart(2, "0")
    const secondsRemaining = (workTime%60).toString().padStart(2, "0")

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-white text-xl">
                <li className="list-none flex gap-1">
                    {[...Array(currentSerie)].map((e, i) => (<ul className="bg-yellow-200 h-5 w-5 rounded-full" />))}
                    {[...Array(pomodogoSeries-currentSerie)].map((e, i) => (<ul className="border-2 border-slate-400 h-5 w-5 rounded-full" />))}
                </li>
            </div>
            <div className="text-white text-6xl flex items-center">
                <li className="list-none items-center flex gap-2">
                    <ul className="w-20 h-20 flex justify-center items-center">{hoursRemaining}</ul>:
                    <ul className="w-20 h-20 flex justify-center items-center">{minutesRemaining}</ul>:
                    <ul className="w-20 h-20 flex justify-center items-center">{secondsRemaining}</ul>
                </li>
            </div>
        </div>
    )
}