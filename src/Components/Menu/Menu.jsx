import { useState } from "react"
import "./Menu.css"
import { FaXmark } from "react-icons/fa6"
import AnimatedText from "../AnimatedText/AnimatedText"

function Menu({isMenuOpen, setIsMenuOpen}) {

    return (
        <section className={isMenuOpen ? "menu open" : "menu"}>
            <div className="center">
                <div className="close" onClick={()=> setIsMenuOpen(false)}>
                    <FaXmark />
                </div>

                <AnimatedText text={"HOME"} color={"#fff"} size={"7vw"} />
                <AnimatedText text={"ABOUT"} color={"#fff"} size={"7vw"} />
                <AnimatedText text={"PRICING"} color={"#fff"} size={"7vw"} />
                <AnimatedText text={"INSTAGRAM"} color={"#fff"} size={"7vw"} />
            </div>
        </section>
    )
}

export default Menu