import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["start start", "end start"]
    });

    const yText=useTransform(scrollYProgress,[0,1],["0%","100%"]);
    const yBg=useTransform(scrollYProgress,[0,1],["0%","50%"]);

  return (
    <div 
        className="parallax"
        ref = {ref}
        style={{
            background: 
                type ==="services" 
                ? "linear-gradient(180deg, rgb(231, 231, 231), white)"
                : "linear-gradient(180deg, white,rgb(217, 215, 216))",
        }}
    >
        <motion.h1 style={{ y: yText }}>{type==="services" ? "Recent Projects" : "Projects"}</motion.h1>
        
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
