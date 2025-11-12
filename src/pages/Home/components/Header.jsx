import { useState } from "react"

export const Header = ({ mode, setMode }) => {
    const [iconOpacity, setIconOpacity] = useState(1)
    
    const handleSwitchMode = () => {
        setIconOpacity(0)
        setTimeout(() => {
            mode === "dark" ? setMode("light") : setMode("dark")
            setIconOpacity(1)}
            , 300)
    }

    return (
        <header className={`h-16 pr-10 pl-10 flex items-center justify-between select-none transition duration-300 bg-${mode === "dark" ? "black" : "white"}`}>
            <span className={`text-${mode === "dark" ? "white" : "black"} transition duration-500 text-2xl font-bold`}>
                Pomodogo
            </span>
            <button className={`transition duration-300 opacity-${iconOpacity} text-white`} onClick={handleSwitchMode}>
                <img className="h-6" src={mode === "dark" ? "/images/dark-mode.png" : "/images/light-mode.png"} alt="" />
            </button>
        </header>
    )
}