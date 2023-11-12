import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function Hero() {
    return (
        <div className="hero">
            <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.6,
                }}
            >
                Hi my name is
            </motion.h1>
            <motion.h2
                className="hero-title-large"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.75,
                }}
            >
                Usmonjon Hasanov
            </motion.h2>
            <motion.h3
                className="hero-title-large hero-title-sub"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.05,
                }}
            >
                I craft things for the web.
            </motion.h3>
            <motion.p
                className="hero-text"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.35,
                }}
            >
                I am a Full-Stack Web Developer, I can create you a beautifully
                designed, perfect and secure website. I can make not only
                websites but also excellent telegram bots. For this, just
                contact me:{" "}
                <Link
                    href="mailto:usmonjonhasanov777@gmail.com"
                    target="_blank"
                    className="link"
                >
                    usmonjonhasanov777@gmail.com
                </Link>
            </motion.p>
            <motion.div
                className="hero-button"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 1.65,
                }}
            >
                <Button text="Contact Me" link="#contact" />
            </motion.div>
        </div>
    );
}

export default Hero;
