export const Dog = ( { theme } ) => {
    return (
        <video
        typeof="video/mp4" 
        loop={true} 
        autoPlay 
        muted 
        src="/video/dogo-studying.mp4"
        className={`h-96 transition duration-300 invert${theme === "dark" ? "-0" : ""}`}/>
    )
}