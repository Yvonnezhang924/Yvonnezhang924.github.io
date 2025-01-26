import { useRef } from "react";
import "./Portfolio.scss";
import couponImg from '/Users/harperrr/Portfolio/SelfPortfolio/public/coupon.png';
import webcrawlerImg from '/Users/harperrr/Portfolio/SelfPortfolio/public/webcrawler.png';
import kvsystemImg from '/Users/harperrr/Portfolio/SelfPortfolio/public/kvsystem.png';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Coupon Management System💵",
        img: couponImg,
        desc:"Built scalable microservices for coupon issuance and redemption with real-time tracking, leveraging Kafka and Redis for efficient caching and HBase for high-throughput storage.",
        skills: "Skills: SpringBoot, Kafka Streams, Redis, HBase, Zookeeper"
    },
    {
        id: 2,
        title: "Web Crawler🐛",
        img: webcrawlerImg,
        desc:"Developed a microservices-based web crawler with data extraction, indexing, and search, using Redis for caching, MongoDB for data storage, and Elasticsearch for search optimization.",
        skills: "Skills: Node.js, Redis, MongoDB, Elasticsearch, AWS EC2, Docker, OAuth 2.0."
    },
    {
        id: 3,
        title: "Distributed k-v Storage System",
        img: kvsystemImg,
        desc:"Designed and implemented a high-performance, distributed key-value storage system with fault tolerance and low latency, using Multi-Raft architecture and integrated RocksDB, B+ trees, and hash tables for optimal storage.",
        skills: "Skills: C++, Java, RocksDB"
    },
];

const Single = ({item}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
    });

    const y = useTransform(scrollYProgress, [0,1], [-300,300]);

    return (
    <section>
        <div className="container" >
            <div className="wrapper">
                <div className="imageContainer" ref = {ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <p>{item.skills}</p>
                    <button>Github Link</button>
                </motion.div>
            </div>
        </div>
    </section>
    );
};


const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end", "start start"],
    });

    const y = useTransform(scrollYProgress, [0,1], ["0%", "-300%"]);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Recent Projects</h1>
            <motion.div style = {{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map( (item) => (
            <Single item={item} key={item.id}/>
        ))}
        </div>
    );
};

export default Portfolio;
