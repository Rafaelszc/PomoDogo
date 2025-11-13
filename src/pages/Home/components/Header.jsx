import { useState } from "react"

export const Header = ({ theme, setTheme }) => {
    const [iconOpacity, setIconOpacity] = useState(1)
    
    const handleSwitchTheme = () => {
        setIconOpacity(0)
        setTimeout(() => {
            theme === "dark" ? setTheme("light") : setTheme("dark")
            setIconOpacity(1)}
            , 300)
    }

    return (
        <header className={`h-16 pr-10 pl-10 flex items-center justify-between select-none transition duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
            <span className={`text-${theme === "dark" ? "white" : "black"} transition duration-500 text-2xl font-bold`}>
                Pomodogo
            </span>
            <button className={`transition duration-300 opacity-${iconOpacity} text-white`} onClick={handleSwitchTheme}>
                <img className="h-6" src={theme === "dark" ? "/images/dark-mode.png" : "/images/light-mode.png"} alt="" />
            </button>
        </header>
    )
}