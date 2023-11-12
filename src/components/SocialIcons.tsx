import Link from "next/link";
import React from "react";
import {
    FiGithub,
    FiInstagram,
    FiYoutube,
    FiLinkedin,
    FiTwitter,
    FiMail,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

function SocialIcons() {
    const socialLinks = [
        {
            name: "Github",
            icon: <FiGithub />,
            link: "https://www.github.com/usmonjon007",
        },
        {
            name: "Youtube",
            icon: <FiYoutube />,
            link: "https://www.youtube.com/@usmonjonhasanov/",
        },
        {
            name: "LinkedIn",
            icon: <FiLinkedin />,
            link: "https://www.linkedin.com/in/usmonjonhasanov/",
        },
        {
            name: "Instagram",
            icon: <FiInstagram />,
            link: "https://instagram.com/usmonjon_hasanov",
        },
        {
            name: "Twitter",
            icon: <FiTwitter />,
            link: "https://twitter.com/HasanovUsmonjon",
        },
        {
            name: "Telegram",
            icon: <FaTelegram />,
            link: "https://t.me/DevMERN",
        },
        {
            name: "Mail",
            icon: <FiMail />,
            link: "mailto:usmonjonhasanov777@gmail.com",
        },
    ];
    return (
        <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 1.95,
            }}
        >
            <ul className="social-icons-list">
                {socialLinks.map(({ name, icon, link }) => (
                    <li
                        key={name}
                        title={name}
                        className="social-icons-list-item"
                    >
                        <Link
                            href={link}
                            className="social-icons-list-item-link"
                            target="_blank"
                        >
                            {icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default SocialIcons;
