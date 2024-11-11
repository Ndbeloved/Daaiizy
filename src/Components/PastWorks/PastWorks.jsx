import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import styles from "./PastWorks.module.css"
import { useRef, useState } from "react";

export default function PastWorks() {
    const scrollContainerRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className={styles.container}>
            <div className={styles.upper}>
                <div className={styles.caption}>
                    <p>View my past works <span></span></p>
                    <h1>LIFESTYLE</h1>
                </div>

                <div className={styles.svgContainer}>
                    <FaArrowLeft />
                    <FaArrowRight />
                </div>
            </div>

            <div 
                className={`${styles.carousel} ${isDragging && styles.grabbing }`}
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}
