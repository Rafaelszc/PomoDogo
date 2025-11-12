import { useState } from "react";
import { Options } from "./Options";
import { CSSTransition } from "react-transition-group";

export const Buttons = ({
    minutesWork, setMinutesWork,
    minutesBreak, setMinutesBreak,
    currentSerie, setCurrentSerie,
    pomodogoSeries, setPomodogoSeries,
    isRuning, setIsRuning,
    startBark, setReset,
    mode}) => {
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
            <button className="h-12 w-12 transition-colors duration-300 rounded-full flex justify-center items-center" onClick={() => {setIsRuning(!isRuning); if (!isRuning && pomodogoSeries-currentSerie > 1) startBark()}}>
                <img className={`h-10 invert${mode === "dark" ? "" : "-0"}`} src={isRuning ? "/images/pause.png" : "/images/play.png"} alt="" />
            </button>
            <button className="h-12 w-12 transition-colors duration-300 rounded-full flex justify-center items-center" onClick={() => setReset(true)}>
                <span className={`w-7 h-7 bg-${mode === "dark" ? "white" : "black"}`} />
            </button>
            <button className={`${isRuning ? "hidden" : "flex"} h-12 w-12 rounded-full transition-colors duration-300 justify-center items-center`} onClick={() => setOnClose(false)}>
                <img className={`h-10 invert${mode === "dark" ? "" : "-0"}`} src="/images/settings.png" alt="" />
            </button>
            
            {!onClose && <Options {...optionsProps} />}
        </div>
    )
}