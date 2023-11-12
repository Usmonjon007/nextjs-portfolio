import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    useEffect(() => {
        console.log("Element is in view: ", isInView);
    }, [isInView]);
    return (
        <motion.div
            className="about"
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
            }}
        >
            <div className="title">
                <h2>About Me</h2>
            </div>
            <div className="about-grid">
                <div className="about-grid-info">
                    <p className="about-grid-info-text">
                        Hello there! My name is Usmonjon Hasanov and I am very
                        interested in digital technologies. I am currently{" "}
                        {new Date().getFullYear() - 2007} years old. I am a
                        Full-Stack developer, I can make you beautiful and
                        perfect websites, and I can also make perfect telegram
                        bots.
                    </p>
                    {/* <p className="about-grid-info-text">
                        Fast-forward to today, I specialize in designing and
                        developing high-quality solutions that delight our
                        clients and exceed their expectations at{" "}
                        <Link
                            href="https://rapidops.com"
                            className="link"
                            target="_blank"
                        >
                            Rapidops.
                        </Link>
                    </p>

                    <p className="about-grid-info-text">
                        Additionally, I share my knowledge and passion with the
                        world through my YouTube channel, where I demonstrate
                        how to build full-stack applications.
                    </p>
                    <p className="about-grid-info-text">
                        I am also working on a new project called&nbsp;
                        <Link
                            className="link"
                            target="_blank"
                            href="https://frontendvita.com"
                        >
                            FrontendVita,
                        </Link>
                        &nbsp;aimed at enhancing frontend development skills.
        </p> */}
                    <p className="about-grid-info-text">
                        Here are a few technologies I've worked with:
                    </p>
                    <ul className="about-grid-info-list">
                        <div className="about-grid-info-list-item">HTML</div>
                        <li className="about-grid-info-list-item">CSS</li>
                        <li className="about-grid-info-list-item">SASS</li>
                        <li className="about-grid-info-list-item">
                            JavaScript
                        </li>
                        <li className="about-grid-info-list-item">ReactJS</li>
                        <li className="about-grid-info-list-item">NextJS</li>
                        <li className="about-grid-info-list-item">
                            Typescript
                        </li>
                        <li className="about-grid-info-list-item">
                            Redux Toolkit
                        </li>
                        <li className="about-grid-info-list-item">NodeJS</li>
                        <li className="about-grid-info-list-item">NestJS</li>
                        <li className="about-grid-info-list-item">ExpressJS</li>
                        <li className="about-grid-info-list-item">MongoDB</li>
                        <li className="about-grid-info-list-item">MySQL</li>
                    </ul>
                </div>
                <div className="about-grid-photo">
                    <div className="overlay"></div>
                    <div className="overlay-border"></div>
                    <div className="about-grid-photo-container">
                        <Image src="/me.jpg" alt="profile" fill />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
