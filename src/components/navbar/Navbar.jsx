import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <div className = "navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate = {{opacity:1, scale:1}}
            transition={{duration: 0.5}}
            >
                Yiwen(Yvonne) Zhang
            </motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/yiwenillinois/"><img src="/linkedin.png" alt ="" /></a>
                <a href="https://github.com/Yvonnezhang924"><img src="/github.png" alt ="" /></a>
                <a href="https://www.instagram.com/yiwennn_924?igsh=NTc4MTIwNjQ2YQ=="><img src="/instagram.png" alt ="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
