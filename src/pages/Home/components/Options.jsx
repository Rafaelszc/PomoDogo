import { useState } from "react"

export const Options = ({ 
    setOnClose, minutesWork, 
    setMinutesWork, minutesBreak, 
    setMinutesBreak, pomodogoSeries, 
    setPomodogoSeries }) => {
        const workHours = Math.floor(minutesWork/60)
        const breakHours = Math.floor(minutesBreak/60)
        const maxWorkMinutes = 60*5
        const maxBreakMinutes = 90
        const maxPomodogoSeries = 10
        const [popUpAnimation, setPopUpAnimation] = useState("fade-in")

        const handleClose = () => {
            setPopUpAnimation("fade-out")
            setTimeout(() => {setOnClose(true)}, 500)
        }

        return (
            <div className={`${popUpAnimation} fixed w-full h-full top-0 left-0`} style={{backdropFilter: "blur(2px)"}}>
                <div className="flex flex-col gap-8 z-30 fixed w-1/2 h-5/6 rounded-xl bg-black border-gray-500 border overflow-scroll animate-arise" style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <button className="w-6 bg-white rounded-full ml-6 mt-6 transition-colors duration-300 hover:bg-slate-300" onClick={handleClose}>
                        <img className="h-6" src="/images/close.png" alt="" />
                    </button>
                    <div className="w-full flex items-center justify-center flex-col gap-3 text-white font-bold text-3xl">
                        <img className="h-40 p-6 rounded-full bg-gray-900" src="/images/dog-nose.svg" alt="" />
                        <span>Pomodogo</span>
                    </div>
                        <li className="flex items-center justify-center flex-col w-full gap-5 text-white">
                            <ul className="list-none w-5/6 h-28 rounded-xl flex justify-between items-center bg-gray-950 border border-gray-500 pl-10 pr-10">
                                <span className="text-lg">Work Time</span>
                                <li className="flex list-none justify-center items-center text-2xl">
                                    <ul className="flex flex-col text-center w-10">
                                        <button 
                                        className="border border-b-0 w-full rounded-t-md border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                                        onClick={() => minutesWork+60 >= maxWorkMinutes ? 0 : setMinutesWork(minutesWork+60)}>+</button>
                                        <span className="border border-gray-500 w-full">{workHours.toString().padStart(2, "0")}</span>
                                        <button 
                                        className="border border-t-0 w-full rounded-b-md border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                                        onClick={() => minutesWork <= 60 ? 0 : setMinutesWork(minutesWork-60)}>-</button>
                                    </ul>
                                    <ul className="w-8 text-center">:</ul>
                                    <ul className="flex flex-col text-center w-10">
                                        <button 
                                        className="border border-b-0 w-full rounded-t-md border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                                        onClick={() => minutesWork >= maxWorkMinutes ? 0 : setMinutesWork(minutesWork+1)}>+</button>
                                        <span className="border border-gray-500 w-full">{(minutesWork%60).toString().padStart(2, "0")}</span>
                                        <button 
                                        className="border border-t-0 w-full rounded-b-md border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                                        onClick={() => minutesWork <= 1 ? 0 : setMinutesWork(minutesWork-1)}>-</button>
                                    </ul>
                                    
                                </li>
                            </ul>
                            <ul className="list-none w-5/6 h-28 rounded-xl flex justify-between items-center bg-gray-950 border border-gray-500 pl-10 pr-10">
                                <span className="text-lg">Break Time</span>
                                <li className="flex list-none justify-center items-center text-2xl">
                                    <ul className="flex flex-col text-center w-10">
                                        <button 
                                        className="border border-b-0 w-full rounded-t-md border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                                        onClick={() => minutesBreak+60 >= maxBreakMinutes ? 0 : setMinutesBreak(minutesBreak+60)}>+</button>
                                        <span className="border border-gray-500 w-full">{breakHours.toString().padStart(2, "0")}</span>
                                        <button 
                                        className="border border-t-0 w-full rounded-b-md border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                                        onClick={() => minutesBreak <= 60 ? 0 : setMinutesBreak(minutesBreak-60)}>-</button>
                                    </ul>
                                    <ul className="w-8 text-center">:</ul>
                                    <ul className="flex flex-col text-center w-10">
                                        <button 
                                        className="border border-b-0 w-full rounded-t-md border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                                        onClick={() => minutesBreak+1 >= maxBreakMinutes ? 0 : setMinutesBreak(minutesBreak+1)}>+</button>
                                        <span className="border border-gray-500 w-full">{(minutesBreak%60).toString().padStart(2, "0")}</span>
                                        <button 
                                        className="border border-t-0 w-full rounded-b-md border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                                        onClick={() => minutesBreak <= 1 ? 0 : setMinutesBreak(minutesBreak-1)}>-</button>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="list-none w-5/6 h-28 rounded-xl flex justify-between items-center bg-gray-950 border border-gray-500 pl-10 pr-10">
                                <span className="text-lg">Pomodogo Series</span>
                                <div className="text-2xl flex justify-center items-center text-center">
                                    <button 
                                    className="w-10 border rounded-l-md border-r-0 border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                                    onClick={() => pomodogoSeries <= 1 ? 0 : setPomodogoSeries(pomodogoSeries-1)}>-</button>
                                    <span className="w-8 border border-gray-500">{pomodogoSeries}</span>
                                    <button 
                                    className="w-10 border rounded-r-md border-l-0 border-gray-500 transition-colors duration-300 hover:bg-gray-800"
                                    onClick={() => pomodogoSeries >= maxPomodogoSeries ? 0 : setPomodogoSeries(pomodogoSeries+1)}>+</button>
                                </div>
                            </ul>
                        </li>
                </div>
            </div>
        )
    }