import "./hero.scss"; //通过外部文件引入
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div 
            className="textContainer" 
            variants={textVariants}
            initial="initial"
            animate="animate"
        >
            <motion.h1 variants={textVariants}>Hey there! I'm Yiwen.👋</motion.h1>
            <motion.h2 variants={textVariants}>
            🔅 Information Sciences@UIUC <br />
            👩‍💻 Ex Research Intern@BOC <br />
            🔛 Seeking 25 SDE Summer Internship, and 26 New Grad roles <br />
            📫 Feel free to reach out: 
            <a href="mailto: yiwen19@illinois.edu" style={{textDecoration: 'underline', color: 'inherit' }}>
                yiwen19@illinois.edu
            </a>
            </motion.h2>

            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>
                Main Interest: Web & Backend Development
                </motion.button>
            </motion.div>
            <img variants={textVariants} animate="scrollButton" src="/scroll.png" alt=""/>
        </motion.div>
        </div>
        <motion.div className= "slidingTextContainer" variants={sliderVariants} initial = "initial" animate = "animate">
            Girl In Tech
        </motion.div>
        <div className="imageContainer">
            <img src= "/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero
