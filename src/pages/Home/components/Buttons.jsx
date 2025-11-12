import { useState } from "react";
import { Options } from "./Options";
import { CSSTransition } from "react-transition-group";

export const Buttons = ({
    minutesWork, setMinutesWork,
    minutesBreak, setMinutesBreak,
    currentSerie, setCurrentSerie,
    pomodogoSeries, setPomodogoSeries,
    isRuning, setIsRuning,
    startBark, setReset}) => {
    const [onClose, setOnClose] = useState(true)
    const optionsProps = {
        setOnClose,
        minutesWork,
        setMinutesWork,
        minutesBreak,
        setMinutesBreak,
        pomodogoSeries,
        setPomodogoSeries
        }

    return (
        <div className="flex gap-4">
            <button className="h-12 w-12 hover:bg-slate-300 transition-colors duration-300 bg-white rounded-full flex justify-center items-center" onClick={() => {setIsRuning(!isRuning); if (!isRuning && pomodogoSeries-currentSerie > 1) startBark()}}>
                <img className="h-10" src={isRuning ? "/images/pause.png" : "/images/play.png"} alt="" />
            </button>
            <button className="h-12 w-12 hover:bg-slate-300 transition-colors duration-300 bg-white rounded-full flex justify-center items-center" onClick={() => setReset(true)}>
                <span className="w-7 h-7 bg-black" />
            </button>
            <button className={`${isRuning ? "hidden" : "flex"} h-12 w-12 rounded-full bg-white hover:bg-slate-300 transition-colors duration-300 justify-center items-center`} onClick={() => setOnClose(false)}>
                <img className="h-10" src="/images/settings.png" alt="" />
            </button>
            {!onClose && <Options {...optionsProps} />}
        </div>
    )
}