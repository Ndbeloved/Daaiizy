import AnimatedText from "../../src/Components/AnimatedText/AnimatedText"
import Navigation from "../../src/Components/Navigation/Navigation"
import "./HomePage.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { motion, useInView } from "framer-motion"
import image1 from "../../src/assets/Images/pfp-2.png"
import image2 from "../../src/assets/Images/pfp-5jpg.jpg"
import image3 from "../../src/assets/Images/pfp-6.png"
import highlighter from "../../src/assets/Images/highlighter.png"
import Menu from "../../src/Components/Menu/Menu"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowRight, FaArrowUp } from "react-icons/fa6"
import { PiDressBold } from "react-icons/pi"
import { IoIosArrowRoundUp } from "react-icons/io"
import SlotCounter from "react-slot-counter"
import PastWorks from "../../src/Components/PastWorks/PastWorks"
import Footer from "../../src/Components/Footer/Footer"

const settings = {
    dots: false,
    infinite: true,
    speed: 500, 
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
};

const textList = [
    {
        icon: <PiDressBold />,
        text: "Fashion and Lifestyle Modeling"
    },
    {
        icon: <PiDressBold />,
        text: "Sponsored Content Creation",
    },
    {
        icon: <PiDressBold />,
        text: "Property Virtual Tours",
    },
    {
        icon: <PiDressBold />,
        text: "Brand Ambassadorship",
    },
    {
        icon: <PiDressBold />,
        text: "Event Hosting and Promotion",
    },
    {
        icon: <PiDressBold />,
        text: "Instagram and TikTok Brand Reels"
    },
  ];


function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const textRefs = useRef([]);
    const [visibleItems, setVisibleItems] = useState([]);
    const [ showHighlighter, setShowHighlighter] = useState(false)
    const socialCaption = useRef(null)
    const inView = useInView(socialCaption, {once: false, margin: "0% 0% -40% 0%"})


    useEffect(() => {
        const observerOptions = {
          root: null,
          rootMargin: "0% 0% -20% 0%",
          threshold: 0.8, 
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const index = entry.target.dataset.index;
        
            if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                setVisibleItems((prev) => [...prev, index]); 
            } 
            else if (entry.intersectionRatio < 0.4 || entry.intersectionRatio > 0.45) {
                setVisibleItems((prev) => prev.filter((item) => item !== index)); 
            }
          });
        }, observerOptions);
    
        // Start observing each text item
        textRefs.current.forEach((textRef) => {
          if (textRef) {
            observer.observe(textRef);
          }
        });
    
        return () => {
          observer.disconnect(); // Cleanup observer on component unmount
        };
      }, []);



    return (
        <>
        <section className="landing-section">
            <Navigation setIsMenuOpen={setIsMenuOpen}/>
            <div className="left-col">
                <div className="text-content">
                    <h1 className="header">
                        <motion.span
                         initial= {{
                            x: -200,
                            opacity: 0
                         }}
                         animate = {{
                            x: 0,
                            opacity: 1
                         }}

                         transition={{ duration: .5 }}
                        >
                            Erastus
                            <motion.span className="highlighter" initial={{clipPath: "inset(0 100% 0 0)"}} animate={{clipPath: "inset(0 0 0 0)"}} transition={{ delay: 1.5, duration: 1}}>
                                <img src={highlighter} alt data-no-retina />
                            </motion.span>
                        </motion.span> 
                        <motion.span
                            initial= {{
                                x: 200,
                                opacity: 0
                             }}
                             animate = {{
                                x: 0,
                                opacity: 1
                             }}
    
                             transition={{ duration: .5, delay: .6}}
                        >
                            Chinwenwa
                        </motion.span>
                    </h1>

                    <motion.p id="bio" initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: .5, delay: .7}}>
                        Hi, I'm Daaiizy. I am a Digital Fashion creator on Instagram and TikTok.
                        I'm based in Lagos Nigeria. I have grown my personal brand for 2Years+
                        Focusing on Fashion, Beauty and Lifestyle
                    </motion.p>

                    <Link to={"/"} id="contact-me">
                        Contact Me
                        <FaArrowRight />
                    </Link>
                </div>
            </div>

            <div className="right-col">
                <div className="image-cont-landing">
                    <Slider {...settings}>
                        <img src={image1} />
                        <img src={image2} />
                        <img src={image3} />
                    </Slider>
                </div>
            </div>
            <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </section>
        <section className="about-section">
            <div className="rol-1">

                {textList.map((text, index) =>(
                        <motion.div
                        data-index={index}
                        className={`list-item-about ${visibleItems.includes(index.toString()) ? 'visible' : ''}`}
                        key={index}
                        ref={(el) => (textRefs.current[index] = el)}
                        >
                            <motion.p id="no">0{index + 1}</motion.p>
                            <motion.p id="text">
                                {text.text}     
                            </motion.p>
                        </motion.div>
                    )
                )}
            </div>

            <div className="rol-2">
                <p id="motivation">
                    <strong>Photography</strong> is driven by a deep
                    passion for <strong>capturing life's </strong> most 
                    <strong> precious Moments</strong> with artistry and a touch of magic
                </p>
            </div>
        </section>

        {/* socials */}
        <section className="socials-section" ref={socialCaption}>
            <motion.h1 id="caption" initial={{filter: "blur(5px)"}} animate={inView ? {filter: "blur(0px)"} : {}} transition={{duration: .5}} onAnimationComplete={()=>setShowHighlighter(true)}>
                I have a substantial following across social media platforms,
                ensuring your brand receives the <span style={{position: "relative"}}>
                    visibility
                    <motion.span className="highlighter" initial={{clipPath: "inset(0 100% 0 0)"}} animate={showHighlighter ? {clipPath: "inset(0 0 0 0)"}: {}} transition={{ delay: 1.5, duration: 1}}>
                        <img src={highlighter} alt data-no-retina />
                    </motion.span>
                </span> it deserves.
            </motion.h1>
            <div className="row-wrapper" style={{display: "flex", flexDirection:"row", width: "100%", position: "relative"}}>
                <div className="row-1">

                </div>
                <div className="row-2">
                    <div class="container">
                        <div class="item top-left">
                            <div>
                                <p id="subcaption">Instagram <br/>Followers</p>
                                <p id="count"><IoIosArrowRoundUp /> 
                                    {inView ? <SlotCounter value={43.1} duration={1} /> : "43.1"}k
                                </p>
                            </div>
                        </div>
                        <div class="item top-right">
                            <div>
                                <p id="subcaption">TikTok <br/>Followers</p>
                                <p id="count"><IoIosArrowRoundUp /> 
                                {inView ? <SlotCounter value={11.3} duration={1.5} /> : "11.3"}k
                                </p>
                            </div>
                        </div>
                        <div class="item bottom-left">
                            <div>
                                <p id="subcaption"> Average <br/>TikTok Views</p>
                                <p id="count"><IoIosArrowRoundUp /> 
                                {inView ? <SlotCounter value={110.3} duration={2.5} /> : "110.3"}k
                                </p>
                            </div>
                        </div>
                        <div class="item bottom-right">
                            <div>
                                <p id="subcaption"> Average <br/>Instagram Views</p>
                                <p id="count"><IoIosArrowRoundUp /> 
                                {inView ? <SlotCounter value={510.3} duration={3.5} /> : "510.3"}k
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* past works */}
        <PastWorks />
        <Footer />
        </>
    )
}

export default HomePage